<script setup>
import ExperienceList from '../../data/experience_data.json'
import EducationList from '../../data/education_data.json'
</script>
<template>
    <section class="grid sm:grid-cols-2 grid-cols-1 sm:px-7 px-4 py-12 max-w-[1110px] mx-auto">
        <div class="text-white font-bold">
            <h2 class="text-base font-normal pb-5 pl-7 ">Experience</h2>
            <div
                class="relative before:content-[''] before:block before:w-px custom-before-height before:bg-white-opacity-5 before:absolute custom-before-top before:left-1">
                <div class="pl-7 pb-1 relative pr-7" v-for="item in ExperienceList">
                    <div class="block h-2 w-2 bg-rob-roy absolute top-5 rounded-[50%] left-[.5px]"></div>
                    <div class="mb-8">
                        <h4 class="text-xl pb-1">{{ item.company }}</h4>
                        <h5 class="text-base pb-1 font-medium">{{ item.position }}</h5>
                        <p class="text-sm text font-normal mb-3 text-gray-30">{{ item.year }}</p>
                    </div>
                    <div class="text-gray-25 font-medium"><p class="mb-6">{{ item.description }}</p></div>
                </div>
            </div>
        </div>
        <div class="text-white font-bold">
            <h2 class="text-base font-normal pb-5 pl-7 ">Education</h2>
            <div
                class="relative before:content-[''] before:block before:w-px custom-before-height before:bg-white-opacity-5 before:absolute custom-before-top before:left-1">
                <div class="pl-7 pb-1 relative pr-7" v-for="item in EducationList">
                    <div class="block h-2 w-2 bg-rob-roy absolute top-5 rounded-[50%] left-[.5px]"></div>
                    <div class="mb-8">
                        <h4 class="text-xl pb-1">{{item.college}}</h4>
                        <h5 class="text-base pb-1 font-medium">{{item.position}}</h5>
                        <p class="text-sm text font-normal mb-3 text-gray-30">{{item.year}}</p>
                    </div>
                    <div class="text-gray-25 font-medium"><p class="mb-6">{{item.description}}</p></div>
                </div>
            </div>
        </div>
    </section>
</template>