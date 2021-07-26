<script context="module">
	
	export async function preload() {

		const resIndex = await this.fetch(`index.json`)
		const indexSummary = await resIndex.json();

		const resVersions = await this.fetch(`download/latest.json`)
		const versions = await resVersions.json();
		
		const resNews = await this.fetch(`news.json`)
		const news = (await resNews.json()).filter( (e,i) => i <= 3);
		
		return {news, versions, summary: indexSummary[0].html}
	}	
</script>

<script>
	import Splash from '../components/Splash.svelte';
	import News from './news/index.svelte';
	export let versions;
	export let news;
	export let summary;
	export let latestVersion = versions ? versions.title : ""; // "2.15.4p1"
	export let gameBrief = "Enter the world of intrigue and diplomacy, of trade, conquest, and espionage.";

	let Dates = "";
	let Content = "";
	let Author = "";
	let Title = "";
	let active_players_count = "";
	let average_online_match_time = "";
	let kingdom_1 = "";
</script>

<style>
.separator {
		width: 100%;
		background: antiquewhite;
		left: 0;
		background-image: url('/img/navbar.svg');
		background-size: contain;
		background-position: left;
		background-repeat: repeat-x;
		min-height: 4.5em;
		bottom: 4.5em;
		position:relative;
	}
</style>

<svelte:head>
	<title>Seven Kingdoms Fans</title>
</svelte:head>

<Splash {latestVersion} {gameBrief}/>
<div class="separator">

</div>
<section class="content">

<h1 id="#play-online">Play Seven Kingdoms </h1>
{@html summary}
</section>

<section class="content">
	<h2>News</h2>
	<News posts={news} subcomponent=true></News>
</section>