<template>
    <div class="pt-7 max-w-[1110px] w-full mx-auto">
        <header class="flex justify-between items-center ">
            <nav>
                <span class="text-3xl text-white font-bold tracking-[-.04rem]">Web Developer</span>
            </nav>
            <ul class="flex gap-10">
                <li><font-awesome-icon :icon="['fab', 'github']"  :style="{ fontSize: '19px' }" inverse /></li>
                <li><font-awesome-icon :icon="['fab', 'linkedin']"  :style="{ fontSize: '19px' }" inverse /></li>
                <li><font-awesome-icon :icon="['fab', 'twitter']"  :style="{ fontSize: '19px' }" inverse /></li>
            </ul>
        </header>
    </div>
</template>