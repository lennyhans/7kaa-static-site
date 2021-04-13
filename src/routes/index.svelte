<script context="module">
	

	export function preload() {
		return this.fetch(`download/latest.json`).then(r => r.json()).then(versions => {
			return { versions };
		});
	}	
</script>

<script>
	import Splash from '../components/Splash.svelte';
	export let versions;
	export let latestVersion = versions.title; // "2.15.4p1"
	export let gameBrief = "Enter the world of intrigue and diplomacy, of trade, conquest, and espionage.";

	let Date = "";
	let Content = "";
	let Author = "";
	let Title = "";
	let active_players_count = "";
	let average_online_match_time = "";
	let kingdom_1 = "";
</script>

<style>

</style>

<svelte:head>
	<title>Seven Kingdoms Fans</title>
</svelte:head>

<Splash {latestVersion} {gameBrief}/>
<!-- TODO INSERT SEPARATOR -->
<section class="content">
<h1 id="#play-online">Play Seven Kingdoms </h1>
<div id="entry-0" class="entry">
	<h3><a href="#entry-0">#</a> With your friends</h3>
	<p> The game supports playing with up to 7 players over the internet. Are you ready to try your skill against other opponents? You'll have many of your memorable moments in the game when playing with others. </p>
	<p> Install the latest version of the game. The old 2.0 original game release versions from the 90's had desync issues, and are no longer used. The latest version of the game will be what other people will have. Playing mixed versions is not possible, so it is best to use the latest version. </p>
	<p> Next register a forum account. This will allow you to list the game through 7kfans.com for others to find. When you login and create a game when clicking 7kfans.com as the service. When using 7kfans.com the advantage will be for automatic NAT traversal, allowing you to play when a firewall is enabled. </p>
	<p> To find opponents to play with, go to the forum. Post a message in chat, or go to popular community sites where players arrange times for matches. There is an active community of players eager to play. </p>
	<h3><a href="#entry-0">#</a> Other ways to connect</h3>
	<p> There are other options of available, such as LAN and direct connect, which may be used with VPN software. These are for the times when playing privately or not over the internet. VPN software does not fix issues encountered when playing over the internet. </p>
	<h3><a href="#entry-0">#</a> Troubleshooting</h3>
	<p> The game uses the UDP ports of 19255 and 19383. This is not the same as the original release version, so old guides prior to version 2.15 do not apply. </p>
	<p> Most issues stem from using too strict of a firewall. Make sure you allow the 7kaa.exe game application through your firewall, and do not block the in-going and out-going traffic on those ports. The ports may change if they are in use. Also, port-forwarding is not required because NAT traversal will handle it. </p>
	<p> Lastly, being a peer-to-peer game, the maximum latency between peers for smooth game play is 500ms. The speed of the connection does not matter on modern broadband internet. </p>
</div>
</section>
