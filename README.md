# Seven Kingdoms: Ancient Adversaries Static Site

Project website: [www.7kfans.com](https://www.7kfans.com)


This is a GPL release of the Seven Kingdoms: Ancient Adversaries thanks to
Enlight Software which granted the ability to license the game under a
free and open source license in 2009. We are indebted to Enlight for making the 7kfans
project possible and giving a new chance to build a community for fans
of the game.


## Summary
This is a proposed static site for the classic game Seven Kingdoms Ancient Adversaries from 1998 by Enlight Software
[more on Wikipedia](https://en.wikipedia.org/wiki/Seven_Kingdoms_(video_game))

All the images are from the original assets of the game (processed with Inkscape).

## Site generation
You need perl to prepare the site, that can be checked out with

```shell
perl --version
```

So to prepare the site just run
```shell
perl gensite.pl
```

or

```shell
./gensite.pl
```

That should make appear the `out` directory which have all the files to host the static site, in fact you can check 
the site opening every file or navigating by the web site itself on a hosting provider.

## Develop

If you want to run the site on your own (without bell and whistles) you can run specifying that is local, then go and find the output folder `out/`.
_This should work for POSIX systems_

```shell
./gensite.pl -local
```