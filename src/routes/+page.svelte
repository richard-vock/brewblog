<script>
	import { slide } from 'svelte/transition';
    import { onMount } from 'svelte';

    import * as config from '$lib/config';

    import PostGrid from '$lib/components/post-grid.svelte';

    let loaded = false;
    onMount(() => {
        loaded = true;
    });

    export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="relative w-full">
    <div class="relative items-center w-full px-5 mx-auto pb-44 md:px-12 lg:px-20 max-w-7xl">
        <div class="pt-24 mx-auto max-w-7xl">
            <div class="pb border-b border-river">
                <div class="flex justify-between">
                {#if loaded}
                    <h1
                        class="py-10 text-4xl font-bold leading-none tracking-tighter text-white lg:text-6xl"
                        transition:slide={{ delay: 200, duration: 1000, axis: 'y' }}
                    >
                        Emperor Norton's<br />Brew Blog
                    </h1>
                {/if}
                <img
                    class="w-24 h-24 logo"
                    src="/logo_cut.png"
                    alt="Emperor Norton's Brew Blog"
                />
                </div>
            </div>

            <PostGrid posts={data.posts} />
        </div>
    </div>
</section>

<style>
.logo {
    width: 500px;
}
</style>
