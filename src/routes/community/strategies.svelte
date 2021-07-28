<script context="module">
	export async function preload() {

        const resIndex = await this.fetch(`community/strategies.json`)
        const strategiesContent = await resIndex.json();

        return { strategies: strategiesContent }
    }	
</script>

<script>
	export let pageTitle = "Strategies";
    export let strategies = []
</script>


<svelte:head>
	<title>Community {pageTitle}</title>
</svelte:head>
<section class="content">
	<h1>{pageTitle}</h1>
	{#each strategies as strategy}
        <article title={strategy.title}>
            <p class="summary">
                thanks to {JSON.parse(strategy.authors).join(", ")};
                created at {strategy.created};
                updated at {strategy.updated}
            </p>
            {@html strategy.html}
        </article>
    {/each}
</section>
