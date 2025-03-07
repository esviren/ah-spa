<script setup lang="ts">
import type { Modelo } from '~/types/modelos'

// Obtener el ID de la ruta
const route = useRoute()
const itemId = computed(() => Number(route.params.slug))


</script>
<template>
    <div class="container mx-auto my-24 p-2">
        <h1 class="pt-24 mx-2 text-center text-3xl lg:text-7xl  text-tris dark:text-tris-soft">{{ $t('indexH1') }}</h1>
        <div class="flex flex-wrap justify-center items-center">
            <div class="pb-8 md:mr-16 justify-center items-center">
                <img class="rounded-3xl w-auto h-[35%]"  src="/images/modelo5.jpg"
                alt="AH-SPA">
            </div>
            <div class="">
                <h2 class="pb-4 md:pb-32 text-center text-7xl lg:text-9xl text-tris dark:text-tris-soft">Clara</h2>

                <div class="space-y-4 md:flex md:flex-col flex justify-center items-center">
                <div  class="flex flex-nowrap">
                    
                    <Icon name="solar:map-point-favourite-broken" size="1.6em" class="text-white " style="color: black" />
                    <h4 class="text-xl pl-4">cEstatura: 1.6m</h4>
                </div>
                <div  class="flex flex-nowrap">
                    
                    <Icon name="solar:phone-calling-rounded-line-duotone" size="1.6em" class="text-white " style="color: black" />
                    <h4 class="text-xl pl-4">Peso: 59 Kg</h4>
                    

                </div>

                <div  class="flex flex-nowrap">
                    <Icon name="solar:letter-line-duotone" size="1.6em" class="text-white " style="color: black" />
                    <h3 class="text-xl pl-4">Peso: 59 Kg</h3>
                </div>

                <img class=" w-auto" src="/images/AH-SPA.png"
                  alt="AH-SPA">
            </div>

        </div>
        

        <div>
            
            <p class="pt-12 pb-4 px-4 text-xl md:text-2xl dark:text-tris-soft">{{ $t('masaje1Clara') }}</p>
        </div>

        
        <h2  class="text-5xl pl-4 text-center text-tris dark:text-tris-soft">{{ $t('models1H1') }}</h2>
        <div class="md:flex md:flex-nowrap my-24">
            <div class="pl-4  ">
                <ModelsPlus />
            </div>
        </div> 

        
    </div>
</div> 

</template>