<script setup>
import Project1 from '../../assets/image/projects/project1.jpg'
import Project2 from '../../assets/image/projects/project2.jpg'

const projects = [
    {
        image: Project1,
        project_name: 'Employee Payroll',
        technology: ['python', 'Html', 'css'],
        link: 'https://github.com/chauhanvishal29/college-management'
    },
    {
        image: Project2,
        project_name: 'Electrical Service',
        technology: ['Laravel', 'html', 'css'],
        link: 'https://github.com/chauhanvishal29/electrical-service'
    }
];
</script>

<template>
    <section class="py-12 md:pb-0 sm:px-7 px-4 max-w-[1110px] w-full mx-auto">
        <div class="border-b-white border-solid border-b pb-4">
            <div class="flex md:justify-between justify-around items-center pb-10 ">
                <h2 class="md:text-7xl text-[40px] font-extra-bold sm:tracking-wider -tracking-[1.1px] text-white">
                    Projects</h2>
                <a href=""
                    class="no-underline border-b-2 uppercase text-white transition-all duration-[0.2s] ease-linear text-base font-bold tracking-[2.2px] pb-[10px]">
                    Contact me
                </a>
            </div>

            <!-- Loop through projects -->
            <div class="grid md:grid-cols-2 grid-cols-1 gap-10">
                <div v-for="(item, index) in projects" :key="index" class="relative group">
                    <div
                        class="mb-5 md:block flex group-hover:opacity-25 transition-opacity duration-300 ease-out justify-center">
                        <img :src="item.image"
                            class="md:w-[540px] w-[345px] group-hover:opacity-50 transition-opacity duration-300 ease-out h-[400px] object-cover "
                            alt="">
                    </div>
                    <div
                        class="text-white md:max-w-[540px] max-w-[345px] my-0 mx-auto uppercase font-bold leading-[3.2rem]">
                        <h3 class="text-2xl tracking-normal">{{ item.project_name }}</h3>
                        <div class="flex space-x-5 pb-5 pt-2">
                            <span v-for="(tech, techIndex) in item.technology" :key="techIndex"
                                class="text-base font-medium">
                                {{ tech }}
                            </span>
                        </div>
                    </div>
                    <div
                        class="lg:absolute relative lg:hidden block top-0 group-hover:flex md:max-w-[540px] max-w-[345px] -translate-x-2/4 -translate-y-2/4 left-2/4 lg:top-[37%]">
                        <a :href="item.link"
                            class="no-underline uppercase text-white tracking-widest border-b-2 border-eucalyptus hover:text-eucalyptus transition-all duration-[0.2s] ease-linear text-base font-bold leading-[2px] lg:pb-3 pb-1">View
                            Code</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
