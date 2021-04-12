// The more recent will be used as the latest
const versions = [
	{
		title: '2.15.4p1',
		slug: 'v2-15-4p1',
        description : '',
        releaseNotes : 'This is a patch release to fix a few issues with 2.15.4. All users should upgrade.',
        instruction : '',
        date : '2020-07-11',
        releases : [
            { 
                name : 'Windows 32-bit installer',
                link : 'https://github.com/the3dfxdude/7kaa/releases/download/v2.15.4p1/7kaa-install-win32-2.15.4p1.exe',
                checksum : 'b5fa0bc358bcfda90df8aae8ad97d8a5',
            },
            { 
                name : 'All platforms 32-bit/64-bit GPL source code',
                link : 'https://github.com/the3dfxdude/7kaa/releases/download/v2.15.4p1/7kaa-2.15.4p1.tar.xz',
                checksum : 'b5fa0bc358bcfda90df8aae8ad97d8a5',
            },
            { 
                name : 'Music (Not GPL) zip',
                link : 'https://www.7kfans.com/downloads/7kaa-music-2.15.zip',
                checksum : '',
            },
            { 
                name : 'Music (Not GPL) tar.bz',
                link : 'https://www.7kfans.com/downloads/7kaa-music-2.15.tar.bz2' ,
                checksum : '',
            }
        ]
	},
    {
		title: '2.15.4',
		slug: 'v2-15-4',
        description : 'Previous version',
        releaseNotes : `
            Summary of changes from 2.15.3 to 2.15.4
            ———
            Fixed a problem in multiplayer that halted the game play.
            Added option to play with the original seven kingdoms, and enabled on original scenarios.
            Apply the leadership bonus when the general is in fort for defending soldiers in range.
            Fixed the mobile general range calculation for the leadership bonus to not apply to the troop anywhere on the map.
            Apply the leadership bonus when the general is on a ship for defending soldiers in range.
            Updated translations.
            Added hotkeys for managing the build menu in the War Factory, Harbor, and Town.
            Restored support for real full screen resolution that requires a screen mode change.
            Improved dynamic UI button and text layout.
            Added Polish translation.
            Added trade locations to the trade report.
            Sort and filter trade locations based on the map selected caravan.
            Allow setting stops using the trade report.
            Allow copying trade routes using the trade report.
        `,
        instruction : '',
        date : '2020-07-04',
        releases : [
            { 
                name : 'Windows 32-bit installer',
                link : 'https://github.com/the3dfxdude/7kaa/releases/download/v2.15.4/7kaa-install-win32-2.15.4.exe',
                checksum : 'b5fa0bc358bcfda90df8aae8ad97d8a5',
            },
            { 
                name : 'All platforms 32-bit/64-bit GPL source code',
                link : 'https://github.com/the3dfxdude/7kaa/releases/download/v2.15.4/7kaa-2.15.4.tar.xz',
                checksum : 'caa3c03c773de805c66546c2371a370c',
            },
            { 
                name : 'Music (Not GPL) zip',
                link : 'https://www.7kfans.com/downloads/7kaa-music-2.15.zip',
                checksum : '',
            },
            { 
                name : 'Music (Not GPL) tar.bz',
                link : 'https://www.7kfans.com/downloads/7kaa-music-2.15.tar.bz2' ,
                checksum : '',
            }
        ]
	},
    {
		title: '2.15.3',
		slug: 'v2-15-3',
        description : 'Previous version',
        releaseNotes : `
            Summary of changes from 2.15.2 to 2.15.3
            ———
            Fixed corrupt characters and fields in various in game messages.
            Improved translation support.
            Updated translations.
            Added some UI improvements.
            Fixed some crashing issues related to spies.
            Standardized on FPU code generation for better cross-platform compatibility.
            Added more advanced config options.
            Added more advanced config options.
            Improved manual.
            Added key binding support.
            Prevented chat keystrokes registering as a hotkey too.
            Fixed sometimes hiring wrong unit in the inn.
            Added scenario advanced config presets to restore default scenario game play to original game design parameters.
            Ensure screen redraw when dropping spy identity.
            Improved alternate font set.
            Added scroll button for long tutor messages.
            Removed gong sound for unsent AI diplomatic messages.
            Re-enabled AI ability to request direct military aid; expect allied AI to work together on defending now.
            Removed uninitialized parameter in Caravan CRC check.
            Removed improper variable-size cast, causing incorrect action processing on 64-bit platforms.
            Correct replay initialization for weather sync.
        `,
        instruction : '',
        date : '2019-12-22',
        releases : [
            { 
                name : 'Windows 32-bit installer',
                link : 'https://github.com/the3dfxdude/7kaa/releases/download/v2.15.3/7kaa-install-win32-2.15.3.exe',
                checksum : 'dfc408696a80a73903c3d8dad165d213',
            },
            { 
                name : 'All platforms 32-bit/64-bit GPL source code',
                link : 'https://github.com/the3dfxdude/7kaa/releases/download/v2.15.3/7kaa-2.15.3.tar.xz',
                checksum : '57a65e4352df60449429c698f34c8b76',
            },
            { 
                name : 'Music (Not GPL) zip',
                link : 'https://www.7kfans.com/downloads/7kaa-music-2.15.zip',
                checksum : '',
            },
            { 
                name : 'Music (Not GPL) tar.bz',
                link : 'https://www.7kfans.com/downloads/7kaa-music-2.15.tar.bz2' ,
                checksum : '',
            }
        ]
	},
    {
		title: '2.15.2',
		slug: 'v2-15-2',
        description : 'Previous version',
        releaseNotes : `
            Summary of changes from 2.15.1 to 2.15.2
            ———
            Fixed queue buttons in the Harbor and War Factory, and in the tutor dialog for the non-blocking button code.
            Fixed AI crash when trying to use a skilled unit that has been deleted.
            Added German, Portuguese, and Spanish translations.
            Correct mobilizing other nations spies in firms under your control.
            Fixed AI crash when fort being used to attack has been deleted.
            Fixed crashes on bullets hitting targets due to not being attributed correctly.
            Fixed crash when a seat of power is destroyed at the same time the greater being casts magic.
            Fixed AI use of uninitialized memory when defending a general or king, which can cause a desync.
            Added mouse wheel support for map scrolling on touchpads. (sraboy)
            Added scenario completion tracking. (sraboy)
            Fixed crash in automated attack helping where one unit selects a target, the target unit enters a building (or deleted), and the local team then tries to assist, but the target unit is no longer on the map.
            Added advanced config file support. This will allow changing more aspects of the game without recompile.
            Enabled sync checking in replay mode.
        `,
        instruction : '',
        date : '2019-06-22',
        releases : [
            { 
                name : 'Windows 32-bit installer',
                link : 'https://github.com/the3dfxdude/7kaa/releases/download/v2.15.2/7kaa-install-win32-2.15.2.exe',
                checksum : 'e9d62d46ac55d97c5574ed70766d65ed',
            },
            { 
                name : 'All platforms 32-bit/64-bit GPL source code',
                link : 'https://github.com/the3dfxdude/7kaa/releases/download/v2.15.2/7kaa-2.15.2.tar.xz',
                checksum : 'abd3648aec3b8337a16f22de43ce9b19',
            },
            { 
                name : 'Music (Not GPL) zip',
                link : 'https://www.7kfans.com/downloads/7kaa-music-2.15.zip',
                checksum : '',
            },
            { 
                name : 'Music (Not GPL) tar.bz',
                link : 'https://www.7kfans.com/downloads/7kaa-music-2.15.tar.bz2' ,
                checksum : '',
            },
            { 
                name : 'Windows patch zip 2.15.3-dev',
                link : 'https://www.7kfans.com/downloads/7kaa-patch-2.15.3-dev-00c6ac9.zip',
                checksum : '',
            },
        ]
	},
    {
		title: '2.15.1',
		slug: 'v2-15-1',
        description : 'Previous version',
        releaseNotes : `
            Here is a release to help address currently known desync and platform issues. This hopefully will improve stability some. But this is only a start. Likely other big issues remain.

            Summary of changes from 2.15.0 to 2.15.1
            ———
            Fixed desync on mobilizing workers.
            Fixed desync on troop sortie, by making troop sorting deterministic.
            Fixed desync on AI attack planning, by making AI fort sorting deterministic.
            Fixed error that caused multiplayer save files appear out of sync.
            Changed the Button class to not block on holding down the mouse button,
            smoothing multiplayer games when alot of clicking may be happening.
            Prevent mobilizing foreign workers from your Firms, however they may be
            fired back to their home town.
            Only enable mobilize worker button when the firm is staffed with non-foreign
            workers.
            Prefer IPv4 addressing for 7kfans.com match-making.
            Fixed ambiguity in some translations.
            Repack structures for Crc checking due to pointer sizing.
            Improved cross-compilation and platform support.
            Uppercased the data and user files, as they are supported in the code,
            maintaining consistency and without needing to guess case.
            Fixed missing Fryhtan encyclopedia picture on some systems.
            Fixed observation mode visibility when playing a replay.
            Added support for center and right paragraph justification.
            Packagers please note that the music files must be in upper-case now, see
            the latest download for the music.
        `,
        instruction : '',
        date : '2018-12-28',
        releases : [
            { 
                name : 'Windows 32-bit installer',
                link : 'https://github.com/the3dfxdude/7kaa/releases/download/v2.15.1/7kaa-install-win32-2.15.1.exe',
                checksum : '3e15530028edf84418ddbc5b28d01731',
            },
            { 
                name : 'All platforms 32-bit/64-bit GPL source code',
                link : 'https://github.com/the3dfxdude/7kaa/releases/download/v2.15.1/7kaa-2.15.1.tar.xz',
                checksum : '977894288ec7bde8235ebd500d82c6f2',
            },
            { 
                name : 'Music (Not GPL) zip',
                link : 'https://www.7kfans.com/downloads/7kaa-music-2.15.zip',
                checksum : '',
            },
            { 
                name : 'Music (Not GPL) tar.bz',
                link : 'https://www.7kfans.com/downloads/7kaa-music-2.15.tar.bz2' ,
                checksum : '',
            }
        ]
	},
    {
		title: '2.15.0',
		slug: 'v2-15-0',
        description : 'Previous version',
        releaseNotes : `
            We've accomplished much of what we hoped for in the 2.14 series, with SDL2, multiplayer match-making, translation support, and now it's time to move to version 2.15. Everyone should get the latest version and try it out.

            Windows 10 users that were using the pre-release build to address a Windows bug, should move to the current release.
            
            Summary of changes from 2.14.7 to 2.15.0
            ———
            Enabled multiplayer sync checking by default
            Added experimental multiplayer game recording and replay (use 'r' at main
            menu screen after playing a match)
            Enhanced localization support
            Enabled translation support on Windows
            Properly support system locales including UTF-8 codesets
            Added Russian fonts
            Added Russian translation
            Improved 64-bit platform support
            Upgraded to SDL 2.0.8 to work around Windows 10 1709 bug
            Improved mouse control and full-screen interaction
            Fixed obscure crashing bug with the Caravan interface
            Added game manual
            Thanks to all who made this release possible.
        
        `,
        instruction : '',
        date : '2018-09-17',
        releases : [
            { 
                name : 'Windows 32-bit installer',
                link : 'https://github.com/the3dfxdude/7kaa/releases/download/v2.15.0/7kaa-install-win32-2.15.0.exe',
                checksum : '297ffc314d4beec2aabc4937127a058f',
            },
            { 
                name : 'All platforms 32-bit/64-bit GPL source code',
                link : 'https://github.com/the3dfxdude/7kaa/releases/download/v2.15.0/7kaa-2.15.0.tar.xz',
                checksum : '297ffc314d4beec2aabc4937127a058f',
            },
            { 
                name : 'Music (Not GPL) zip',
                link : 'https://www.7kfans.com/downloads/7kaa-music.zip',
                checksum : '',
            },
            { 
                name : 'Music (Not GPL) tar.bz',
                link : 'https://www.7kfans.com/downloads/7kaa-music.tar.bz2' ,
                checksum : '',
            }
        ]
	},
    {
		title: '2.14.7',
		slug: 'v2-14-7',
        description : 'Previous version',
        releaseNotes : `
            With this release, we have worked at improving usability of the 7K multiplayer service at 7kfans.com. We have added NAT punch-through support when using 7kfans.com, which will make online play easier and more reliable. Everyone should upgrade when they want to go online next time.

            There have been game balancing changes and fixes, which will make the game more challenging. The Fryhtans can attack more often. Spies are more stealthy. The greater being mana exploit has been fixed. It may be harder to brutally capture towns. As with these kinds of changes, your feedback of testing the gameplay. We hope this has been an improvement.
            
            This said, the game might not be trouble free. Desync issues likely lurk still. Your help in tracking down problems will be much appreciated.
        `,
        instruction : '',
        date : '2017-06-04',
        releases : [
            { 
                name : 'Windows 32-bit installer',
                link : 'https://github.com/the3dfxdude/7kaa/releases/download/v2.14.7/7kaa-install-win32-2.14.7.exe',
                checksum : '6573ebb2a6689a83a52c86358a920316',
            },
            { 
                name : 'All platforms 32-bit/64-bit GPL source code',
                link : 'https://github.com/the3dfxdude/7kaa/releases/download/v2.14.7/7kaa-2.14.7.tar.xz',
                checksum : 'f044d7bd57e636b8b9ac33b728581a43',
            },
            { 
                name : 'Music (Not GPL) zip',
                link : 'https://www.7kfans.com/downloads/7kaa-music.zip',
                checksum : '',
            },
            { 
                name : 'Music (Not GPL) tar.bz',
                link : 'https://www.7kfans.com/downloads/7kaa-music.tar.bz2' ,
                checksum : '',
            },
            { 
                name : 'Windows patch zip 2.15.0-dev',
                link : 'https://www.7kfans.com/downloads/7kaa-patch-2.15.0-dev-157c89d.zip' ,
                checksum : '',
            }
        ]
	},
    {
		title: '2.14.6',
		slug: 'v2-14-6',
        description : 'Previous version',
        releaseNotes : `
            Another great release here, this time adding back in lobby support similar to what was in the original game. With the in-game 7kfans.com service feature, you can use your forum name in-game, while being logged in to the forum with your web browser, and this will give you access to the assisted 7kfans.com match-making features.

            This 2.14.xx series is now considered a stable branch of the tree for all users of the game. So everyone should start using this version, and move off the 2.13 version of the game. Besides, there are great additions to game thanks to everyone contributions in the community. This said, the game might not be trouble free, and there are likely cross-platform issues that will continue to be ironed out. Please give your reports and lets fix them!
        `,
        instruction : '',
        date : '2016-09-04',
        releases : [
            { 
                name : 'Windows 32-bit installer',
                link : 'https://github.com/the3dfxdude/7kaa/releases/download/v2.14.6/7kaa-install-win32-2.14.6.exe',
                checksum : 'd5161b6bcae9c5cde605bf742f92eca2',
            },
            { 
                name : 'All platforms 32-bit/64-bit GPL source code',
                link : 'https://github.com/the3dfxdude/7kaa/releases/download/v2.14.6/7kaa-2.14.6.tar.xz',
                checksum : 'a05a2fa0369946e45a427477f4e0c800',
            },
            { 
                name : 'Music (Not GPL) zip',
                link : 'https://www.7kfans.com/downloads/7kaa-music.zip',
                checksum : '',
            },
            { 
                name : 'Music (Not GPL) tar.bz',
                link : 'https://www.7kfans.com/downloads/7kaa-music.tar.bz2' ,
                checksum : '',
            },
            { 
                name : 'Windows exe-only',
                link : 'https://github.com/the3dfxdude/7kaa/releases/download/v2.14.6/7kaa.exe',
                checksum : '68056ca8bb01484e915c8cae3161a951',
            },
            { 
                name : 'Windows patch zip 2.14.7-dev',
                link : 'https://www.7kfans.com/downloads/7kaa-patch-2.14.7-dev-9f2721f.zip' ,
                checksum : '',
            }
        ]
	},
    {
		title: '2.14.5',
		slug: 'v2-14-5',
        description : 'Previous version',
        releaseNotes : `
            The latest version of 7KAA is now available. This version is long in the making, but perhaps has the most extensive set of improvements yet. The enet based network code supports up to 7 players, and direct connection via UDP, bringing it on par with the legacy DPlay code in 2.13.2. Those with widescreens may appreciate the higher resolution screen stretching that comes with SDL2. Those building from source please note the dependency changes.

            Summary of changes in this release
            ———
            
            Switched to using SDL2.
            Gained support for full-screen stretching.
            Gained support for MacOS.
            Switched to using enet, replacing SDL_net.
            Audio code improvements.
            The multiplayer connection code has stablized.
            New game hotkeys.
            Migrate population across extended town networks.
            Added ability to migrate 10 people at a time across between towns.
            Gettext translation support.
            Several bug fixes.
            Thanks to all who have contributed to this release.
        `,
        instruction : '',
        date : '2015-05-28',
        releases : [
            { 
                name : 'Windows 32-bit installer',
                link : 'https://github.com/the3dfxdude/7kaa/releases/download/v2.14.5/7kaa-install-win32-2.14.5.exe',
                checksum : '38ee8b37558d9a111b9f1a1309a8ac2b',
            },
            { 
                name : 'All platforms 32-bit/64-bit GPL source code',
                link : 'https://github.com/the3dfxdude/7kaa/releases/download/v2.14.5/7kaa-2.14.5.tar.xz',
                checksum : '1a626a2bf92f4ad394558a903f519594',
            },
            { 
                name : 'Music (Not GPL) zip',
                link : 'https://www.7kfans.com/downloads/7kaa-music.zip',
                checksum : '',
            },
            { 
                name : 'Music (Not GPL) tar.bz',
                link : 'https://www.7kfans.com/downloads/7kaa-music.tar.bz2' ,
                checksum : '',
            },
            { 
                name : 'Windows exe-only',
                link : 'https://www.7kfans.com/downloads/7kaa-2.14.5-hotfix.exe',
                checksum : '83152b21973c1b3df8de525bda434be4',
            }
        ]
	},
    {
		title: '2.13.2',
		slug: 'v2-13-2',
        description : 'Legacy Windows API version',
        releaseNotes : ``,
        instruction : '',
        date : '2015-05-28',
        releases : [
            { 
                name : 'Windows 32-bit installer',
                link : 'https://github.com/the3dfxdude/7kaa/releases/download/v2.14.5/7kaa-install-win32-2.14.5.exe',
                checksum : '38ee8b37558d9a111b9f1a1309a8ac2b',
            },
            { 
                name : '32-bit/64-bit GPL source code',
                link : 'https://www.7kfans.com/downloads/7kaa-2.13.2.tar.bz2',
                checksum : '1a626a2bf92f4ad394558a903f519594',
            },
            { 
                name : 'Game data (only for 2.13.x) zip',
                link : 'https://www.7kfans.com/downloads/7kaa-data-2.13.zip',
                checksum : '',
            },
            { 
                name : 'Game data (only for 2.13.x) tar.bz',
                link : 'https://www.7kfans.com/downloads/7kaa-data-2.13.tar.bz2' ,
                checksum : '',
            },
            { 
                name : 'Music (Not GPL) zip',
                link : 'https://www.7kfans.com/downloads/7kaa-music.zip',
                checksum : '',
            },
            { 
                name : 'Music (Not GPL) tar.bz',
                link : 'https://www.7kfans.com/downloads/7kaa-music.tar.bz2' ,
                checksum : '',
            },
            { 
                name : 'Windows 32-bit patch',
                link : 'https://www.7kfans.com/downloads/7kaa-patch-2.13.2.zip',
                checksum : '83152b21973c1b3df8de525bda434be4',
            }
        ]
	}
];

export default versions;
