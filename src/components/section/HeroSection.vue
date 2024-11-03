<script setup>
    import DesktopImg from '../../assets/image/vishal-bg.jpg'
    import DesktopMobImg from '../../assets/image/vishal_bg_mobile.png'
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
    <section class="md:pt-32 md:pb-52 px-4 md:pb-14 md:pt-24 pb-16 sm:block md:flex relative max-w-[1110px] w-full mx-auto">
        <div class="relative md:absolute m-auto object-contain md:-mt-20 mt-0 -top-7 md:right-0 top-0 -z-10 w-44 md:w-[390px]">
            <img :src="DesktopImg" alt="My Image" class="hidden md:block" />
            <img :src="DesktopMobImg" alt="My Image" class="block md:hidden bg-custom-gradient" />
        </div>
        <div class="max-w-[450px] md:text-left md:w-[505px] max-auto text-center m-auto md:m-0">
            <h1 class="md:text-7xl text-[40px] mt-0 mb-8 md:mb-16 mx-auto text-white font-bold md:leading-[72px] leading-[45px] md:text-left text-center tracking-[0.05rem]"> Nice to
                meet you! I'm <span class="border-b-4">Vishal Chauhan</span>. </h1>
            <p class="text-white max-auto m-auto mb-8 md:mb-16 lg:max-w-lg font-medium text-base md:text-lg tracking-normal"> Based in the UK, I'm a front-end developer passionate about
                building accessible web apps that users love. </p>
            <app-link class="text-white" href="#contact-form">
                <a class="no-underline border-b-2 uppercase text-white transition-all duration-[0.2s] ease-linear text-base font-bold tracking-[2.2px] pb-[10px]">Contact me</a>
            </app-link>
        </div>
        
    </section>
</template>