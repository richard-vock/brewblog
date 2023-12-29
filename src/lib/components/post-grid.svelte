<script>
    import { formatDate } from '$lib/utils'

    export let posts;
</script>


<div class="grid grid-cols-1 gap-12 py-12 lg:grid-cols-2">
    {#each posts as post }
        <a href="./posts/{post.slug}">
            <div class="p-8 rounded-xl shadow-thick sm:flex lg:items-start group bg-cinder">
                <div>
                    <span class="text-sm text-santa">{ formatDate(post.date) }</span>

                    <p class="mt-3 text-lg font-medium leading-6">
                        <a href="./posts/{post.slug}" class="text-xl text-white lg:text-2xl hover:text-moody">
                            { post.category }: { post.title }
                        </a>
                    </p>
                    <p class="mt-6 text-lg text-santa">
                        { post.brief }
                    </p>
                </div>
            </div>
        </a>
    {/each}
</div>
