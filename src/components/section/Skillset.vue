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
    <section class="border-t-white border-b-white border-t border-solid border-b py-12 max-w-[1110px] w-full mx-auto">
        <ul class="grid gap-y-14 gap-x-6 grid-cols-3">
            <li v-for="(item, index) in skillset" class="flex flex-col">
                <span class="text-5xl font-bold text-white -tracking-[1.5px] mb-3">{{ item.skill }}</span>
                <span class="text-lg font-medium text-white leading-7 tracking-normal">{{ item.year }} Years Experience</span>
            </li>
        </ul>
    </section>
</template>