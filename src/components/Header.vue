<template>
    <div class="pt-7 sm:px-7 text-center max-w-[1110px] w-full mx-auto">
        <header class="md:flex  block justify-between items-center ">
            <nav>
                <span class="md:text-3xl text-2xl text-white font-bold tracking-[-.04rem]">Web Developer</span>
            </nav>
            <ul class="flex justify-center md:mt-0 mt-3 gap-10">
                <li><font-awesome-icon :icon="['fab', 'github']"  :style="{ fontSize: '19px' }" inverse /></li>
                <li><font-awesome-icon :icon="['fab', 'linkedin']"  :style="{ fontSize: '19px' }" inverse /></li>
                <li><font-awesome-icon :icon="['fab', 'twitter']"  :style="{ fontSize: '19px' }" inverse /></li>
            </ul>
        </header>
    </div>
</template>