<template>
    <section class="w-full md:px-7 px-4 bg-raisin-black mx-auto">
        <div class="text-white max-w-[1110px] mx-auto pt-10 mb:pb-14 pb-10 ">
            <div class="border-b-2 lg:flex block border-white pb-14 mb-10 ">
                <div class="max-w-[445px] mx-auto lg:text-start md:text-center sm:text-start my-0 lg:ml-0">
                    <h1 class="mb:mb-9 mb-3 md:text-7xl text-[40px] md:text-start text-center font-bold tracking-wider">Contact</h1>
                    <p class="md:text-lg mb-14 text-base md:text-start text-center leading-normal md:leading-7 tracking-normal text-light-silver">I would love
                        to hear about your project and how I could help. Please fill in the form, and I’ll get
                        back
                        to you as soon as possible.</p>
                </div>
                <div class="text-left max-w-[445px] mx-auto lg:pt-0 md:pt-12">
                    <form action="" class="flex flex-col gap-y-8 w-full my-0  m-auto">
                        <div>
                            <label for="name"
                                class="uppercase text-philippine-gray text-base font-bold -tracking-[0.2] pl-6">name</label>
                            <input type="text" name="name" id="name"
                                class="w-full border-b-white bg-raisin-black text-white text-4 font-bold tracking-[-0.32px] border-transparent border-b border-solid">
                        </div>
                        <div>
                            <label for="name"
                                class="uppercase text-philippine-gray text-base font-bold -tracking-[0.2] pl-6">email</label>
                            <input type="text" name="email" id="email"
                                class="w-full border-b-white bg-raisin-black text-white text-4 font-bold tracking-[-0.32px] border-transparent border-b border-solid">
                        </div>
                        <div>
                            <label for="name"
                                class="uppercase text-philippine-gray text-base font-bold -tracking-[0.2] pl-6">message</label>
                            <textarea name="message" id="message" rows="2"
                                class="w-full border-b-white bg-raisin-black text-white text-4 font-bold tracking-[-0.32px] border-transparent border-b border-solid"></textarea>
                        </div>

                        <button type="submit"
                            class="ml-auto pb-4 uppercase bg-transparent w-fit text-white cursor-pointer text-base leading-6 font-bold leading-[2.2px] border-b-[2.2px] border-b-eucalyptus">Send
                            message</button>
                    </form>
                </div>
            </div>
            <div class="md:flex block text-center items-center justify-between">
                <span class="md:text-3xl text-2xl text-white font-bold ">Vishalchauhan</span>
                <span class=""></span>
                <ul class="flex justify-center mt-4 gap-10">
                    <li><a href="https://github.com/chauhanvishal29" target="_blank"><font-awesome-icon :icon="['fab', 'github']" :style="{ fontSize: '19px' }" inverse /></a></li>
                    <li><a href="https://www.linkedin.com/in/chauhan-vishal-a14b371a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" :style="{ fontSize: '19px' }" inverse /></a></li>
                    <li><font-awesome-icon :icon="['fab', 'twitter']" :style="{ fontSize: '19px' }" inverse /></li>
                </ul>
            </div>
        </div>
    </section>
</template>