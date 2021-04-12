<script>
    import ReleaseComponent from './_release.svelte';
	export let releasesList;
</script>

<ul>
    {#each releasesList as r}
        <ReleaseComponent {...r}></ReleaseComponent>
    {/each}
</ul>