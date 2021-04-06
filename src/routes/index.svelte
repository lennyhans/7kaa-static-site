<script>
	import successkid from 'images/successkid.jpg';
	import Splash from '../components/Splash.svelte';
	export let latestVersion = "2.15.4p1";
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

<Splash {latestVersion}/>

