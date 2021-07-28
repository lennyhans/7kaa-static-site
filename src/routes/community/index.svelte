<script context="module">
	export function preload() {
	}	
</script>

<script>
	export let pageTitle = "Community";
</script>
<style>
	a {
		font-family: inherit;
		font-weight: 700;
	}
</style>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>
<section class="content">
	<h1>{pageTitle} content</h1>
	<p>content should appear here</p>
	<h2>This could contains</h2>
	<ul>
		<li>Migrated <a href="https://7kfans.com">wiki content</a></li>
		<li>Community videos</li>
		<li>Community images (like artwork)</li>
		<li>Playing 
			<a href="/community/strategies">strategies</a>,
			 guides or playthrough</li>
		<li>Tournaments and ranking</li>
		<li>3rd Party Seven Kingdoms Programs</li>
	</ul>
</section>
