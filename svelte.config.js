import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import {visit} from 'unist-util-visit'

import { mdsvex } from 'mdsvex'

function rehype() {
    return function(tree) {
        if (!tree) return;
        // sweep over all paragraphs and headings
        visit(tree, 'element', function (node) {
            if (node.tagName === 'p') {
                node.properties.className = 'text-base text-santa sm:text-lg md:mt-5 md:text-xl';
            }
            if (node.tagName === 'h1') {
                node.properties.className = 'py-10 text-2xl font-bold leading-none tracking-tighter text-center text-white lg:text-4xl';
            }
            if (node.tagName === 'ul') {
                node.properties.className = 'text-base prose list-disc text-santa sm:text-lg md:mt-5 md:text-xl';
            }
        });
        // sweep over all paragraphs
        visit(tree, 'element', function (node) {
            if (node.tagName === 'p') {
                node.properties.className = 'text-base text-santa sm:text-lg md:mt-5 md:text-xl';
            }
        });
        // sweep over all paragraphs in blockquotes
        visit(tree, 'element', function (node) {
            if (node.tagName === 'blockquote') {
                // children = [];
                node.properties.className = 'p-12 my-12 shadow-thick rounded-xl bg-cinder';
                for (let child of node.children) {
                    if (child.type === 'element' && child.tagName === 'p') {
                        child.properties.className = 'text-base text-transparent bg-gradient-to-tr bg-clip-text from-majorelly via-fandango to-flamingo sm:text-lg md:text-xl lg:text-2xl';
                    }
                }
            }
        });
    }
}

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
    rehypePlugins: [rehype],
    extensions: ['.md'],
    smartypants: true,
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', ...mdsvexOptions.extensions],
    preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter()
    }
};

export default config;
