<script setup>
const skillset = [
    {
        'skill': 'Laravel',
        'year': 4
    },
    {
        'skill': 'VueJS',
        'year': 1
    },
    {
        'skill': 'Core PHP',
        'year': 4
    },
    {
        'skill': 'JavaScript',
        'year': 3
    },
    {
        'skill': 'HTML',
        'year': 3.5
    },
    {
        'skill': 'CSS',
        'year': 3
    },
];

</script>
<template>
    <section class="sm:px-7 px-4 max-w-[1110px] w-full mx-auto">
        <div class="border-y-white border-t border-solid border-b py-12">
            <ul class="grid md:gap-y-14 gap-y-3 gap-x-6 md:text-start text-center md:grid-cols-3 grid-cols-1">
                <li v-for="(item, index) in skillset" class="flex flex-col">
                    <span class="md:text-5xl text-[32px] leading-tight font-bold text-white -tracking-[1.5px] md:mb-3 mb-0">{{ item.skill }}</span>
                    <span class="md:text-lg text-base font-medium text-white leading-7 tracking-normal">{{ item.year }} Years
                        Experience</span>
                </li>
            </ul>
        </div>
    </section>
</template>