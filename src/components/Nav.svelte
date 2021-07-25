<script>
	export let segment;
	export const navEntries = [
		{ name : "about", link : "about"},
		{ name : "forums", link : "https://7kfans.com/forums"},
		{ name : "source", link : "https://github.com/the3dfxdude/7kaa"},
		{ name : "downloads", link : "download"},
		{ name : "community", link: "community", prefetch : true},
		{ name : "news", link : "news", prefetch : true}
	];
</script>

<style>
	nav {
		font-weight: 300;
		padding: .2em .5em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: inline-block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(66, 179, 184);
		display: block;
		bottom: 25%;
	}

	a {
		color: rgba(0,0,0,.85);
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	.content-wrapper {
		width: 100%;
		background: antiquewhite;
		left: 0;
		background-image: url('/img/navbar.svg');
		background-size: contain;
		background-position: left;
		background-repeat: repeat-x;
	}

	.nav-button {
		padding: 0 0;
		margin: 0.2rem 0;
		background-image: url('/img/scroll.svg');
		background-size: cover;
		background-position: left;
		background-repeat: no-repeat;
		min-width: 165px;
		max-height: 60px;
		text-align: center;
	}
</style>

<nav class="content-wrapper">
	<ul>
		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li class="button nav-button"><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		{#each navEntries as entry}
			<li class="button nav-button">
				<a rel={entry.prefetch ? "prefetch" : undefined } aria-current="{segment === entry.link ? 'page' : undefined}" href="{entry.link}">{entry.name}</a>
			</li>
		{/each}
	</ul>
</nav>