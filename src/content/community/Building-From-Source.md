---
title: 'Building From Source'
authors: '["the3dfxdude"]'
created: '2012-08-23'
updated : '2019-04-04'
---
# Building From Source

## Introduction

This page contains a step-by-step guide to build Seven Kingdoms: Ancient
Adversaries from the source code. We use the GNU autotools and can
support most platforms easily, provided you can full-fill the
dependencies listed below and follow all steps. There won't be any
distro specifics listed here. You can also view an older guide
[here](http://pagehalffull.wordpress.com/2012/08/18/building-the-source-of-seven-kingdoms-ancient-adversaries-on-ubuntu-linux/)
for some out-dated Ubuntu-specifics.

See the [System
Requirements](System-Requirements-for-Seven-Kingdoms-1.html) for
running.

See '[Download 7KAA](/download)' for obtaining the source tar
file to the game.

## Dependencies

Programs

  - make

<!-- end list -->

  - GCC 4.6 or other C++11 compatible compiler

Required libraries

  - SDL 2.0.8

<!-- end list -->

  - enet 1.3.xx

<!-- end list -->

  - OpenAL-soft

Optional libraries

  - libcurl for full 7kfans multiplayer integration

<!-- end list -->

  - gettext 0.19 for translation support

## Building the game

Run the configure script:

`$ ./configure`

If you don't have configure, this means you pulled the game down
directly from the source repository. Generate configure using the shell
script autogen.sh. If you don't understand how to do this, then please
[download](/download) a release tar file.

Compile the source using:

`$ make`

Install the game using:

`# make install`

Run the game using:

`$ 7kaa`

Enjoy\!

## Running the game locally

To run the game without running make install, you need to point to the
game data folder. The game data folder is set by the environment
variable SKDATA. In a bash shell, this can be accomplished by

`$ SKDATA=data ./src/7kaa `

## How to Install the Music

First, [download](/download) the music.

To install the game music, copy the entire music directory containing
the .WAV files, into the local data/ folder or if creating a distro
package, copy to the defined PACKAGE\_DATA\_DIR. To copy into the 7kaa build
directory, run the following:

`$ bzip2 -cd 7kaa-music-2.15.tar.bz2 | tar xvf -`  
`$ mv 7kaa-music/MUSIC data/MUSIC`

## See also

If you're interested in helping translate, see this forum post:
<http://www.7kfans.com/forums/viewtopic.php?f=20&t=417> and
<https://www.7kfans.com/forums/viewtopic.php?f=20&t=938>.
