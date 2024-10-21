<template>
    <section class="w-full bg-raisin-black mx-auto">
        <div class="text-white max-w-[1110px] mx-auto pt-10 pb-14 flex">
            <div class="max-w-[445px] mx-auto my-0 ml-0">
                <h1 class="mb-9 text-7xl font-bold tracking-wider">Contact</h1>
                <p class="text-lg font-medium leading-7 tracking-normal font-medium text-light-silver">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get
                    back
                    to you as soon as possible.</p>
            </div>
            <div class="text-left">
                <form action="" class="min-w-[445px] flex flex-col gap-y-8 w-full my-0  m-auto">
                    <div>
                        <label for="name" class="uppercase text-philippine-gray text-base font-medium -tracking-[0.2] pl-6">name</label>
                        <input type="text" name="name" id="name" class="w-full border-b-white bg-raisin-black text-white text-4 font-medium tracking-[-0.32px] border-transparent border-b border-solid">
                    </div>
                    <div>
                        <label for="name" class="uppercase text-philippine-gray text-base font-medium -tracking-[0.2] pl-6">email</label>
                        <input type="text" name="email" id="email" class="w-full border-b-white bg-raisin-black text-white text-4 font-medium tracking-[-0.32px] border-transparent border-b border-solid">
                    </div>
                    <div>
                        <label for="name" class="uppercase text-philippine-gray text-base font-medium -tracking-[0.2] pl-6">message</label>
                        <textarea name="message" id="message" rows="2" class="w-full border-b-white bg-raisin-black text-white text-4 font-medium tracking-[-0.32px] border-transparent border-b border-solid"></textarea>
                    </div>

                    <button type="submit" class="ml-auto pb-4 uppercase bg-transparent w-fit text-white cursor-pointer text-base leading-6 font-bold leading-[2.2px] border-b-[2.2px] border-b-eucalyptus">Send message</button>
                </form>
            </div>
        </div>
    </section>
</template>