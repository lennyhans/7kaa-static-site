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

{#each features as feature}
<section class="content">
	<h2 id="{feature.slug}"><a href="about/#{feature.slug}" >#</a> {feature.title}</h2>
	<div>
		{@html feature.html}
	</div>
</section>
{/each}

