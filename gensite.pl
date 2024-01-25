#!/usr/bin/perl

=for comment
	Copyright 2021 Jesse Allen

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 2 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.

=cut

use warnings;
use strict;

use lib 'lib';
use Cwd;
use File::Basename;
use Text::Template;
use Text::Markdown 'markdown';
use YAML::Tiny;
use GreyMatterExtractor;

my $outdir = "out";
my $STATIC_FOLDER  = "src/static";
my $TEMPLATE_FOLDER = "src/templates";
my $CONTENT_FOLDER = "src/content";
my @STATIC_FOLDER_ASSETS = ("css", "img", "fonts");

mkdir($outdir);
foreach my $folder (@STATIC_FOLDER_ASSETS) {
	 symlink("../$STATIC_FOLDER/$folder","$outdir/$folder");
}

my $template_file;
my $template;
my $article_in;
my $outfile;
my $article_folder;
my %vars;

my %default_vars = (
	title => 'Seven Kindoms Ancient Adversaries',
	description => 'Seven Kingdoms Ancient Adversaries is the real-time strategy game designed by Trevor Chan, now freely available and maintained by the community.',
	base_path => '/',
	forum_path => '/',
	game_version => '2.15.6',
);

if (@ARGV && $ARGV[0] eq '-local') {
	$default_vars{base_path} = "file://" . getcwd . "/out/";
}

my @articles = ();

gen_download_index();
gen_news_index();

my @content_folder = get_content_directories($CONTENT_FOLDER);
my @content_main_files = get_content_files($CONTENT_FOLDER);

for (@content_main_files){
	#print "content_main_files : is $_\n";{}
	if($_ eq "index.html"){
		next;
	}
	my $output_name = replace_extension_to_html($_);
	#print ("$string \n");
	push(@articles, ["{title}", $_, $output_name] );
}

for (@content_folder){
	#print "\$_ is $_\n";
	my $curent_folder = $_;
	my @content_folder_files = get_content_files("$CONTENT_FOLDER/$_");
	for (@content_folder_files){
		my $output_name = replace_extension_to_html($_);
		push(@articles, ["{title}", "$curent_folder/$_", "$curent_folder/$output_name", $curent_folder, $curent_folder] );
		if(! -d "$outdir/$curent_folder"){
			mkdir("$outdir/$curent_folder")
		}
		#print "\t\t\ content_folder_files -> \$_ is $_ and output_name : $curent_folder/$output_name\n";
	}
}

init_index();
write_page();

init_article();
while(next_article()) {
	write_page();
}

exit 0;

sub init_vars {
	return %default_vars;
}

sub init_partial {
	my ($partial_name, %template_variables) = @_;
	my $template_file = "$TEMPLATE_FOLDER/$partial_name";
	my $template = Text::Template->new(TYPE => 'FILE',  SOURCE => $template_file);
	
	return $template->fill_in(HASH => \%template_variables);
}

sub init_partial_from_string {
	my ($template_content, %template_variables) = @_;
	my $template = Text::Template->new(TYPE => 'STRING',  SOURCE => $template_content);
	
	return $template->fill_in(HASH => \%template_variables);
}

sub prepare_view {
	my ($view_name, $is_home) = @_;
	$template_file = "$TEMPLATE_FOLDER/$view_name";
	$template = Text::Template->new(TYPE => 'FILE',  SOURCE => $template_file);
	%vars = init_vars();
	$vars{menu} = init_partial("_menu.html", (init_vars(), home => $is_home));
}

sub init_index {
	prepare_view("index.html", 1);
	$vars{title} = "Seven Kingdoms Ancient Adversaries";
	$vars{latest_news} = init_partial("_news_index.html", (news_list => gen_news_card("src/content/news", 3)));
	$article_in = "$CONTENT_FOLDER/index.md";
	$outfile = "$outdir/index.html";
}

sub init_article {
	prepare_view("article.html", 0);
	$article_in = "";
	$outfile = "";
}

sub next_article {
	if (!@articles) {
		return 0;
	}

	my $params = shift(@articles);

	#TODO: Remove, now from GrayMatter header
	$vars{title} = $params->[0];
	$article_in = "$CONTENT_FOLDER/$params->[1]";
	$outfile = "$outdir/$params->[2]";
	$article_folder = $params->[3];
	$vars{category} = '';
	if( defined $article_folder ) {
	    $vars{category} = $article_folder;
	}
	
	# if(defined $article_folder){
	# 	print("[INFO] FOLDER : $article_folder\n");
	# 	print("[INFO] Preparing MENU on article \n");
	# 	$vars{menu} = init_partial("_menu.html", (home => 0, relative_folder=>$article_folder) );
	# }
	
	return 1;
}

sub gen_download_index {
	my $fh;
	if (!open($fh, ">", "src/content/download/index.md")) {
		return;
	}
print $fh <<EOF;
---
title: 'Downloads'
---

## The latest version is [$default_vars{game_version}](v$default_vars{game_version}.html)

### All versions
EOF
	foreach my $name (sort{$b cmp $a} map{basename($_,'.md')} glob("src/content/download/*.md")) {
		if ($name eq 'index' || $name eq 'all') {
			next;
		}
		print $fh "[$name]($name.html)<br>\n";
	}
	print $fh "\n[Links to all files](all.html)\n";
	close($fh);
}

sub gen_news_index {
	my $news_base_path = "src/content/news";
	my $fh;
	if (!open($fh, ">", "$news_base_path/index.md")) {
		return;
	}
print $fh <<EOF;
---
title: 'News'
---
EOF
	my $news_list = gen_news_card($news_base_path);
	print $fh init_partial("_news_index.html", (news_list => $news_list));
	close($fh);
}

sub gen_news_card {
	my ($path, $limit_count) = @_; 
	my @news_files = get_sorted_files_by_name($path, ".md", "*.md");
	my $limit_to = $#news_files;
	my $iteration = 0;
	if(!defined $limit_count){
		$limit_count = 0;
	}
	if($limit_count > 0 ){
		$limit_to = $limit_count;
	}
	my $news_list = '';
	foreach my $name (@news_files) {
		if ($name eq 'index') {
			next;
		}
		last if($limit_to == $iteration );
		my %news_entry = process_content_file("$path/$name.md");
		$news_list = $news_list.init_partial("_news_card.html", (spread_hash($news_entry{header}), content => $news_entry{body}));
		$iteration++;
	}
	return $news_list;
}

sub get_sorted_files_by_name {
	my ($path, $filename, $filepattern) = @_;
	return (sort{$b cmp $a} map{basename($_,'.md')} glob("$path/*.md"));
}

sub is_file_newer {
	my $a = (stat($_[0]))[9];
	my $b = (stat($_[1]))[9];
	return $a > $b;
}

sub is_up_to_date {
	if (! -e $outfile) {
		return 0;
	}

	if ($article_in ne "") {
		if (! -e $article_in) {
			die "The file $article_in does not exists";
		}
		if (!is_file_newer($outfile, $article_in)) {
			return 0;
		}
	}

	return is_file_newer($outfile, $template_file);
}

sub slurp {
	my $file = $_[0];
	my $fh;
	if (!open($fh, '<', $file)) {
		print "Unable to read temp file";
		return "";
	}
	local $/ = undef;
	my $cont = <$fh>;
	close $fh;
	return $cont;
}

sub write_page {
	if ($outfile eq "") {
		die;
	}

	if (is_up_to_date($outfile)) {
		return;
	}
	if ($article_in ne "") {
		my %article_processed =  process_content_file($article_in);

		$vars{article} = init_partial_from_string($article_processed{body}, %vars);
		my $config = $article_processed{header};	
		# TODO: How to add automatically the values of the hash to the vars hash?
		if ( defined $config->{title}){
		    #print "# YAML HEADER \n $config->{title}";
		    $vars{title} = $config->{title};
		    $vars{slug} = $config->{slug};
		    ## TODO: Find a better way to draw per page custom variables
		    if ( defined $vars{category} && $vars{category} eq 'news' ){
			$vars{date} = $config->{date};
			$vars{author} = $config->{author};
		    } else {
			$vars{date} = undef;
			$vars{author} = undef;
		    }

		}else{
			print "\t[II] No header Info (YAML) for $article_in\n"
		}
	}

	$vars{head} = init_partial("_head.html", %vars);
	my $fh;
	if (!open($fh, ">", $outfile)) {
		return;
	}
	print $fh $template->fill_in(HASH => \%vars);
	close($fh);
	#print "\t--> OK\n";
	return;
}

#** @function get_content_directories ($directory_to_check)
# @brief Try to read the directory and return only the directories in it
#
# @params $directory_to_check The directory to check
# @retval @detected_directories All the directories readed (not recursive)
#*
sub get_content_directories {
	my ($directory_to_check) = @_;
	my @detected_directories = ();
	opendir(my $dir_handler, $directory_to_check) || die "Can't open directory: $!\n";

	while (my $dir_entry = readdir($dir_handler)) {
		next if should_skip_current_prev_dir($dir_entry);
		if(-d "$directory_to_check/$dir_entry" ){
			push(@detected_directories, $dir_entry );
		}
	}
	closedir($dir_handler);
	return @detected_directories;

}

sub get_content_files {
	my ($directory_to_check) = @_;
	my @detected_files = ();
	opendir(my $dir_handler, $directory_to_check) || die "Can't open directory: $!\n";

	while (my $dir_entry = readdir($dir_handler)) {
		next if should_skip_current_prev_dir($dir_entry);
		if(-f "$directory_to_check/$dir_entry" ){
			push(@detected_files, $dir_entry );
		}

	}
	closedir($dir_handler);
	return @detected_files;
}

sub should_skip_current_prev_dir {
	my ($directory_to_check) = @_;
	return $directory_to_check eq "." || $directory_to_check eq "..";
}

sub replace_extension_to_html {
	my ($output_name) = @_;

	if(! defined $output_name){
		return @_;
	}
	# Try match and replace the last ".extension "
	$output_name =~ s/(\.\w.$)\b/.html/io;
	return $output_name;
}

sub process_content_file {
	my ($input) = @_;

	if ($input eq ""){
		print "\t[WW] Unable to read $input\n";
		return;
	}
	
	my %input_matter = read_header($input);
	my $yamls = undef;
	# Prevent die thanks to https://stackoverflow.com/a/451236
	eval { $yamls = YAML::Tiny->read_string( $input_matter{Header} ) }; warn "\t[WW] Unable to read YAML for $input\n" if $@;
	if( !defined $yamls )
	{
		print "\t[II] YAML Header is not defined\n";
	}

	my $testBody = $input_matter{Body};
	my $config = $yamls->[0];	
	
	if ( !defined $config ){
		print "\t[II] No header Info (YAML) for $input\n";
	}

	# TODO: Read format from original file (ex. could be a markdown or html)
	
	return (
		"header" => $config,
		"body" => markdown($testBody),
	);
	
}

sub spread_hash {
	# TODO: Validate hash
	my ($input) = @_;
	return %$input;
}
