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
["Download Seven Kingdoms","latest.md","latest.html"],
["Play Seven Kingdoms","play.md","play.html"],
["About Seven Kingdoms","about.md","about.html"],
["Catapult III Speed Run","catapult-speedrun-III.md","community.html"],
);
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
      die;
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
    $vars{article} = markdown(slurp($article_in));
  }

  my $fh;
  if (!open($fh, ">", $outfile)) {
    return;
  }
  print $fh $template->fill_in(HASH => \%vars);
  close($fh);

  return;
}
