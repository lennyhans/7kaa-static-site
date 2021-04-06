<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>

main{
	height: 100%;
	margin: 0;
}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>