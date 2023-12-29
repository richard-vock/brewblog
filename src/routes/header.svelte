<script>
let open = false;
</script>

<header class="w-full text-gray-400 border-b bg-pearl border-cinder">
    <div
        class="flex flex-col w-full px-4 mx-auto bg-bunker md:items-center md:justify-between md:flex-row md:px-6 lg:px-16 max-w-7xl"
    >
        <div class="flex flex-row items-center justify-between py-2 lg:py-0">
            <!-- <a href="./index.html" class="text-lg font-semibold rounded-lg focus:outline-none focus:shadow-outline"> -->
            <!--     <div class="inline-flex items-center"> -->
            <!--         <svg -->
            <!--             class="w-12 h-12 text-majorelly" -->
            <!--             version="1.1" -->
            <!--             xmlns="http://www.w3.org/2000/svg" -->
            <!--             xmlns:xlink="http://www.w3.org/1999/xlink" -->
            <!--             width="2048.00" -->
            <!--             height="2048.00" -->
            <!--             viewBox="0 0 2048.0 2048.0" -->
            <!--         > -->
            <!--             <g id="document" transform="matrix(1,0,0,1,1024.0,1024.0)"> -->
            <!--                 <path -->
            <!--                     d="M324.531,275.738 L-116.188,275.738 C-326.063,275.738 -497.639,104.162 -497.639,-105.713 C-497.639,-315.587 -326.063,-487.164 -116.188,-487.164 C-1.29359,-487.164 105.942,-438.142 181.006,-347.758 C196.326,-329.375 225.432,-326.311 243.815,-341.63 C262.199,-356.95 265.263,-386.056 249.943,-404.44 C159.559,-513.207 27.8131,-576.016 -113.125,-576.016 C-375.085,-576.016 -584.96,-363.077 -584.96,-105.713 C-584.96,151.652 -372.021,364.59 -114.657,364.59 L326.063,364.59 C350.574,364.59 370.489,346.207 370.489,320.164 C370.489,294.121 349.042,275.738 324.531,275.738 Z M-358.234,-105.713 C-358.234,-238.991 -249.466,-349.29 -114.657,-349.29 C-42.6557,-349.29 26.2812,-317.119 72.2391,-261.97 C87.5584,-243.587 116.665,-240.523 135.048,-255.842 C153.432,-271.161 156.495,-300.268 141.176,-318.651 C78.3669,-395.248 -15.081,-439.674 -114.657,-439.674 C-298.488,-439.674 -447.086,-291.077 -447.086,-107.245 C-447.086,76.587 -298.488,225.184 -114.657,225.184 L226.488,225.184 C250.998,225.184 270.914,206.801 270.914,180.758 C270.914,154.716 252.53,136.332 226.488,136.332 L-116.188,136.332 C-249.466,137.864 -358.234,27.5652 -358.234,-105.713 Z M-114.657,1.52234 L-117.72,87.3105 L326.063,87.3105 C350.574,87.3105 370.489,68.9273 370.489,42.8845 C370.489,16.8416 352.106,1.52233 329.127,1.52233 L-114.657,1.52234 Z " -->
            <!--                     fill="currentColor" -->
            <!--                     fill-opacity="1.00" -->
            <!--                 /> -->
            <!--             </g> -->
            <!--         </svg> -->
            <!--         Shadow -->
            <!--     </div> -->
            <!-- </a> -->
            <button class="md:hidden focus:outline-none" on:click={() => (open = !open)} aria-label="hidden">
                <svg fill="#ffffff" viewBox="0 0 20 20" class="w-6 h-6">
                    {#if open}
                        <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    {:else}
                        <path
                            fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                        />
                    {/if}
                </svg>
            </button>
        </div>
        <nav class:flex={open} class:hidden={!open} class="flex-col items-center flex-grow hidden px-5 md:pb-0 md:flex md:justify-end md:flex-row">
            <a
                title="Übersicht"
                class="px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-transparent rounded-lg text-magnesium lg:text-base md:mt-0 md:ml-auto hover:text-white focus:text-white hover:bg-pearl focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                href="/"
            >
                Startseite
            </a>
            <!-- <a -->
            <!--     title="Was ich so braue" -->
            <!--     class="px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-transparent rounded-lg text-magnesium lg:text-base md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-pearl focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" -->
            <!--     href="/rezepte" -->
            <!-- > -->
            <!--     Rezepte -->
            <!-- </a> -->

            <a
                title="Fassgärung im eigenen Keller"
                class="px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-transparent rounded-lg text-magnesium lg:text-base md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-pearl focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                href="/sauerbierkeller"
            >
                Sauerbierkeller
            </a>
            <a
                title="Alles rund um Hefe und Bakterien"
                class="px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-transparent rounded-lg lg:mr-auto text-magnesium lg:text-base md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-pearl focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                href="/labor"
            >
                Labor
            </a>
        </nav>
    </div>
</header>
