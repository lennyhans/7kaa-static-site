<script context="module">
	import ReleaseComponent from './_releases.svelte';
	export function preload() {
		return this.fetch(`download.json`).then(r => r.json()).then(versions => {
			return { versions };
		});
	}	
</script>

<script>
	export let versions;
</script>
<style>
	:global(h2 > small, h2 > em) {
    	color: rgba(0,0,0,.7);
		background: #CCC;
		padding: 0 .3em;
	}

	h2 > small
	  {
		color: rgba(0,0,0,.7);
		background: #CCC;
		padding: 0 .3em;
	}
	hr{
		border-bottom: rgba(0,0,0,.8) solid .1em;
		border-top: 0;
	}
</style>

<svelte:head>
	<title>Downloads</title>
</svelte:head>


<section class="content">
	<h1>Releases</h1>

	{#each versions as { html }}

		{@html html}
	<!-- 	
		<h2 id="{slug}"><a href="download/#{slug}" >#</a> {title} <small>{new Date(date).toDateString()}</small></h2>
		<hr>
		<p>{description}</p>
		<div>
			{#each releaseNotes.split("\n") as par }
				<p style="margin:0">{par}</p>
			{/each}
			
			<ReleaseComponent releasesList={releases}/>
		</div>	 -->

	{/each}
</section>

