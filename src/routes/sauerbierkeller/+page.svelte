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
	<title>{config.title} - Sauerbierkeller</title>
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
                        Sauerbierkeller
                    </h1>
                {/if}
                </div>

                <PostGrid posts={data.posts} />
            </div>
        </div>
    </div>
</section>
