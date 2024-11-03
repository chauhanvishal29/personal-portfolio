<script setup>
import DesktopImg from '../../assets/image/image-profile-desktop.webp'

const projects = [
    {
        image: DesktopImg,
        project_name: 'Design portfolio',
        technology: ['html', 'css']
    },
    {
        image: DesktopImg,
        project_name: 'E-learning landing page',
        technology: ['html', 'css']
    }
];
</script>

<template>
    <section class="py-12 md:pb-0 sm:px-7 px-4 max-w-[1110px] w-full mx-auto">
        <div class="border-b-white border-solid border-b pb-4">
            <div class="flex md:justify-between justify-around items-center pb-10 ">
                <h2 class="md:text-7xl text-[40px] font-extra-bold sm:tracking-wider -tracking-[1.1px] text-white">Projects</h2>
                <a href=""
                    class="no-underline border-b-2 uppercase text-white transition-all duration-[0.2s] ease-linear text-base font-bold tracking-[2.2px] pb-[10px]">
                    Contact me
                </a>
            </div>

            <!-- Loop through projects -->
            <div class="grid md:grid-cols-2 grid-cols-1 gap-10">
                <div v-for="(item, index) in projects" :key="index">
                    <div class="mb-5 md:block flex justify-center">
                        <img :src="item.image" class="md:w-[540px] w-[346px] h-[400px] object-cover " alt="">
                    </div>
                    <div class="text-white max-w-[345px] my-0 mx-auto uppercase font-bold leading-[3.2rem]">
                        <h3 class="text-2xl tracking-normal">{{ item.project_name }}</h3>
                        <div class="flex space-x-5 pb-5 pt-2">
                            <span v-for="(tech, techIndex) in item.technology" :key="techIndex"
                                class="text-base font-medium">
                                {{ tech }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
