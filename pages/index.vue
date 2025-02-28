<template>

    <div class="container mx-auto my-24 p-2">
        <div class="flex flex-wrap justify-center items-center">
            <div class="pb-8 md:mr-16 justify-center items-center">
                <img class=" w-auto" src="/images/AH-SPA.png"
                  alt="Delitris">
            </div>
            <div class="">
                <img class="rounded-3xl w-auto h-[35%]"  src="/images/masaje-2.jpg"
                  alt="Delitris">
            </div>

        </div>

        <h1 class="pt-24 mx-2 text-center text-3xl lg:text-7xl  text-tris dark:text-tris-soft">{{ $t('indexH1') }}</h1>
        <h2 class="pb-4 md:pb-32 text-center text-7xl lg:text-9xl text-tris dark:text-tris-soft">A·H SPA ForMen</h2>

        <div>
            <h2 class="px-4 text-5xl text-tris dark:text-tris-soft">{{ $t('masaje1H2') }}</h2>
            <p class="pt-12 pb-4 px-4 text-xl md:text-2xl dark:text-tris-soft">{{ $t('masajeDesP') }}</p>
        </div>
        <div class="md:flex md:flex-nowrap justify-center items-center my-24">

            <div class="">
                <MasajeIndex/>
            </div>
        </div>
        
        <h2  class="text-5xl pl-4 text-center text-tris dark:text-tris-soft">{{ $t('models1H1') }}</h2>
        <div class="md:flex md:flex-nowrap my-24">
            <div class="pl-4  ">
                <Models />
            </div>
        </div> 

        
    </div>


</template>

<script setup lang="ts">

const { t } = useI18n()

useHead({
  title: t('nameTitle'),
  meta:[
    {name:"description",content:t('indexH1')},
    {property:"og:description",content:t('indexH1')},
    {property:"og:image",content:"https://delitris.pet/images/Logo-Delitris-Circle.png"},
    {name:"twitter:card",content:`sumary_large_image`},
  ],
})


</script>
