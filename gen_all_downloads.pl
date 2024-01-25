#!/usr/bin/perl

=for comment
	Copyright 2024 Jesse Allen

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

my $outdir = "out";
my $STATIC_FOLDER  = "src/static";
my $TEMPLATE_FOLDER = "src/templates";
my $CONTENT_FOLDER = "src/content";
my @STATIC_FOLDER_ASSETS = ("css", "img", "fonts");

gen_all_download_index();

exit 0;

sub gen_all_download_index {
	my %downloads;
	foreach my $name (sort{$b cmp $a} map{basename($_,'.md')} glob("src/content/download/*.md")) {
		if ($name eq 'index' || $name eq 'all') {
			next;
		}
		my $in_fh;
		if (!open($in_fh, "<", "src/content/download/$name.md")) {
			next;
		}
		while (my $line = <$in_fh>) {
			#if ($line =~ /\[([^\]+)]\([^)]+)/) {
			if ($line =~ /\[([^\]]+)]\(([^)]+)/) {
				my $url = $2;
				my $filename = $url;
				$filename =~ s/\/download$//;
				$filename =~ s/.*\///;
				if (defined($downloads{$filename})) {
					if ($downloads{$filename} ne $url) {
						print "ERROR: Inconsistent Urls for $filename in $name.md\n";
						print "$downloads{$filename}\n";
						print "$url\n";
					}
				} else {
					$downloads{$filename} = $url;
				}
			}
		}
		close($in_fh);
	}

	my $fh;
	if (!open($fh, ">", "src/content/download/all.md")) {
		return;
	}
print $fh <<EOF;
---
title: 'All Downloads'
---

All the downloads are listed here on one page for quick reference.

EOF
	foreach my $key (sort(keys(%downloads))) {
		print $fh "[$key]($downloads{$key})<br>\n";
	}
	close($fh);
}
