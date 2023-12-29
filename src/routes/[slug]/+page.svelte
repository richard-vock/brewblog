<script>
	import { slide } from 'svelte/transition';
    import { onMount } from 'svelte';
	import { formatDate } from '$lib/utils'

    let loaded = false;
    onMount(() => {
        loaded = true;
    });

    function title(data) {
        return `${data.meta.category}: ${data.meta.title}`;
    }

	export let data
</script>

<svelte:head>
	<title>{title(data)}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title(data)} />
</svelte:head>

<section class="bg-nero">
    <div class="px-4 py-12 mx-auto">
        <div class="max-w-4xl mx-auto lg:pt-24">
            <div class="max-w-3xl mx-auto text-lg text-left">
                <div class="space-y-8 mb-8">
                    {#if loaded}
                        <h1
                            class="py-10 text-4xl font-bold leading-none tracking-tighter text-center text-white lg:text-6xl"
                            transition:slide={{ delay: 200, duration: 1000, axis: 'y' }}
                        >
                            {data.meta.category}:<br />{data.meta.title}
                        </h1>
                    {/if}

                    <div class="flex items-center justify-center mx-auto">
                        <p class="text-xs font-medium text-santa group-hover:text-white">
                            {formatDate(data.meta.date)}
                        </p>
                    </div>
                </div><br />


                <svelte:component this={data.content} />

            </div>
        </div>
    </div>
</section>
