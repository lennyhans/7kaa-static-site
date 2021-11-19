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
use File::Basename;
use Text::Template;
use Text::Markdown 'markdown';

use YAML::Tiny;
use GreyMatterExtractor;

# my $filename = 'src/content/news/0-release-2-15-4.md';

# #die "OpenDIR";
# # This returns a Hash with ( "Header", "Body" )
# my %greymatteredFile = read_header($filename);
# # Open the config
# my $yaml = YAML::Tiny->read_string( $greymatteredFile{Header} );
# my $testBodyContent = $greymatteredFile{Body};

# # Get a reference to the first document
# my $config = $yaml->[0];
# # Or read properties directly
# my $title = $yaml->[0]->{title};
# print "This is title", $title ,"\n";
# print "The Body is \n\n $testBodyContent \n\n";
#die "Test";

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
my %vars;
my $version = "2.15.4p1";



my @articles = (
#["Download Seven Kingdoms","latest.md","latest.html"],
#["Play Seven Kingdoms","play.md","play.html"],
#["About Seven Kingdoms","about.md","about.html"],
#["Catapult III Speed Run","community/catapult-speedrun-III.md","community.html"],
);

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
	print "\$_ is $_\n";
	my $curent_folder = $_;
	my @content_folder_files = get_content_files("$CONTENT_FOLDER/$_");
	for (@content_folder_files){
		my $output_name = replace_extension_to_html($_);
		push(@articles, ["{title}", "$curent_folder/$_", "$curent_folder/$output_name"] );
		if(! -d "$outdir/$curent_folder"){
			mkdir("$outdir/$curent_folder")
		}
		print "\t\t\ content_folder_files -> \$_ is $_ and output_name : $curent_folder/$output_name\n";
	}
}

init_index();
write_page();

init_article();
while(next_article()) {
	write_page();
}

exit 0;

sub init_index {
	$template_file = "$TEMPLATE_FOLDER/index.html";
	$template = Text::Template->new(TYPE => 'FILE',  SOURCE => $template_file);
	%vars = ();
	$vars{title} = $version;
	$article_in = "$CONTENT_FOLDER/index.md";
	$outfile = "$outdir/index.html";
}

sub init_article {
	$template_file = "$TEMPLATE_FOLDER/article.html";
	$template = Text::Template->new(TYPE => 'FILE',  SOURCE => $template_file);
	%vars = ();
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
	
	return 1;
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
		print "Processing :$article_in \n";
		my %article_in_matter = read_header($article_in);
		# Open the config
		#print "The Header is (YAML):  $article_in_matter{Header} \n";
		my $yamls = undef;
		# Prevent die thanks to https://stackoverflow.com/a/451236
		eval { $yamls = YAML::Tiny->read_string( $article_in_matter{Header} ) }; warn "\t[WW] Uanble to read YAML\n" if $@;
		if( !defined $yamls )
		{
			print "\t[II] YAML Header is not defined\n";
		}
		#print " The error is $! or YAML::Tiny->errstr \n";

		# title: 'Catapult III Speed Run'
		# authors: '["Infectorpp", "Ra"]'
		# created: '2016-06-07‎'
		# updated : '2021-04-01'

		my $testBody = $article_in_matter{Body};
		
		my $config = $yamls->[0];	
		# TODO: How to add automatically the values of the hash to the vars hash?
		if ( defined $config->{title}){
			#print "# YAML HEADER \n $config->{title}";
			$vars{title} = $config->{title};

		}else{
			print "\t[II] No header Info (YAML)\n"
		}
		
		#print "The Body is for $article_in is \n\n $testBody \n\n";
		#print "OURDIR : $outdir";
		#if( -f "$outdir/" )


		my $tempFileName = "temp.md";
		open(my $fh, ">", $tempFileName)
    	or die "Can't open > $tempFileName: $!";

		print $fh $testBody;
		close $fh;

		# TODO: Read format from original file (ex. could be a markdown or html)
		$vars{article} = markdown(slurp($tempFileName));
	}

	my $fh;
	if (!open($fh, ">", $outfile)) {
		return;
	}
	print $fh $template->fill_in(HASH => \%vars);
	close($fh);
	print "\t--> OK\n";
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