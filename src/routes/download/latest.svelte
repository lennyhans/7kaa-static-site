<script context="module">
    
	export async function preload(page, session) {		
        return this.fetch(`download/latest.json`).then(r => r.json()).then(versions => {
            return this.redirect(302, `download/#${versions.slug}`);
		});
	}
</script>