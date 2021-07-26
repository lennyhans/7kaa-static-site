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
	a {
		font-family: inherit;
	}
	small {
		color: rgba(0,0,0,.7);
		background: #CCC;
		padding: 0 .3em;
	}
</style>

<svelte:head>
	<title>News</title>
</svelte:head>

<section class="content">

{#each posts as post}
	<!-- we're using the non-standard `rel=prefetch` attribute to
			tell Sapper to load the data for the page as soon as
			the user hovers over the link or taps it, instead of
			waiting for the 'click' event -->
	<article>
		<h2><a rel="prefetch" href="news/{post.slug}">{post.title}</a> 
			<small>{new Date(post.date).toDateString()}</small>
		</h2>
		<div class="summary">{@html post.summary}</div>
		<p></p>
	</article>
{/each}
</section>