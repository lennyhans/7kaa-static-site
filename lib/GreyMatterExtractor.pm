package GreyMatterExtractor;
use strict;
use warnings;

use Exporter qw(import);

our @EXPORT = qw(read_header multiply);

# Simple GreyMatter Reader (YAML Header + Markdown )

sub read_header {
    validate_parameters(@_);
    open(FH, '<', @_) or die $!;
    my $yamltext = "";
    my $body = "";
    my $marker = 0;
    my $tag = "---\n";

    while(<FH>){
        if ( "$_" eq "$tag") {
            $marker++;
            next;
        }
        if($marker < 2) {
            $yamltext=$yamltext.$_;
        }else{
            $body=$body.$_;
        }
    }
    
    close(FH);
    return (
        "Header" => $yamltext,
        "Body" => $body,
    );
}

sub validate_parameters {
    die 'The file is needed'
        if @_ eq "";
    return 1;
}

1;