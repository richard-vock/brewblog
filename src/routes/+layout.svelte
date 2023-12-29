<script lang="ts">
import Footer from './footer.svelte';
import Header from './header.svelte';

import '../app.css';
</script>

<div class="layout">
    <Header />

    <slot />

    <Footer />
</div>
