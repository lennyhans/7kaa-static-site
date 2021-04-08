<script context="module">
	export function preload() {
		return this.fetch(`news.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}	
</script>

<script>
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
	li{
		text-decoration: none;
	}
</style>

<svelte:head>
	<title>News</title>
</svelte:head>

<section>
<h1>News</h1>
<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li>
			<h2><a rel="prefetch" href="news/{post.slug}">{post.title}</a></h2>
			<article class="summary">{@html post.summary}</article>
			<p><small>{new Date(post.date).toDateString()}</small></p>
		</li>
	{/each}
</ul>
</section>