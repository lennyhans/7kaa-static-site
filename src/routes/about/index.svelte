<script context="module">
	export function preload() {
		return this.fetch(`about.json`).then(r => r.json()).then(features => {
			return { features };
		});
	}	
</script>

<script>
	export let features;
	let id = ""

</script>


<svelte:head>
	<title>About</title>
</svelte:head>
<section class="content">
	<h1>About 7k Fans</h1>
	<p>The Seven Kingdoms Fan-site is the gathering place for fans of
		any of the Seven Kingdoms Series computer games by Enlight Software.
		Here you can share details of the games and find opponents. 
		This is also home of the community supported open source releases. 
		You may find GPL versions of 7KAA and patches for 7K2 to improve on the longevity of this great series.</p>
</section>

<section class="content">
{#each features as feature} 
	<article>
		{@html feature.html}
	</article>
{/each}
</section>
