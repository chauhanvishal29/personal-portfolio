<script setup>
    import DesktopImg from '../../assets/image/image-profile-desktop.webp'
    const skillset = [
        {
            'image': 'HTML',
            'year': 4
        },
        {
            'skill': 'CSS',
            'year': 4
        },
        {
            'skill': 'JavaScript',
            'year': 4
        },
        {
            'skill': 'Accessibility',
            'year': 4
        },
        {
            'skill': 'React',
            'year': 4
        },
        {
            'skill': 'Sass',
            'year': 4
        },
    ];

    </script>
<template>
    <section class="pt-32 pb-52 flex relative max-w-[1110px] w-full mx-auto">
        <div class="w-[710px]">
            <h1 class="text-7xl mt-0 mb-16 mx-auto text-white font-bold leading-[72px] tracking-[0.05rem]"> Nice to
                meet you! I'm <span class="border-b-4">Adam Keyes</span>. </h1>
            <p class="text-white mb-16 max-w-md font-medium text-lg tracking-normal"> Based in the UK, I'm a front-end developer passionate about
                building accessible web apps that users love. </p>
            <app-link class="text-white" href="#contact-form">
                <a class="no-underline border-b-2 uppercase text-white transition-all duration-[0.2s] ease-linear text-base font-bold tracking-[2.2px] pb-[10px]">Contact me</a>
            </app-link>
        </div>
        <div class="absolute -mt-20 -right-10 top-0 -z-10 w-[445px]">
            <img :src="DesktopImg" alt="My Image" />
        </div>
    </section>
</template>