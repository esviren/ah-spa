<template>
    <div class="container mx-auto w-full sm:pt-4 md:pt-8 ">
        <Menubar :model="items" >
            <template #start>
                <img class="h-8 w-auto" src="/images/log-mini-navbar.png"
              alt="Delitris">
            </template>
            <template #item="{ item, props, hasSubmenu, root }">

                <a v-ripple class="flex items-center" v-bind="props.action" as="router-link" to="item.clic">
                    
                    <Icon :name="``+item.icon" size="1.6em" class="text-white " style="color: black" />
                    
                    <span class="ml-2 ">{{ item.label }}</span>
                    <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge"/>
                    <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                    <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
                </a>
            </template>
            <template #end>
                <div class="flex items-center gap-2">
                    <LocaleSwitcher />
                    <ColorSwitcher />
                   <!-- <UToggle size="lg" 
                        class="mr-1 border-tris-light dark:bg-tris",
                        on-icon="material-symbols-light:wb-sunny"
                        off-icon="i-heroicons-moon-16-solid"
                        color="tris"
                        v-model="selected1" v-on:click="setColorTheme()"/> -->
                    
                </div>
            </template>
        </Menubar>
    </div>
</template>

<script setup lang="ts">

import { ref } from "vue"
import { useRouter } from 'vue-router'

const router = useRouter()

const { t } = useI18n()

const selected1 = ref(false)

var selected2 = false


const setColorTheme = () => {
  if (selected2) {
    useColorMode().preference = 'light'
    console.log("light Color"+ useColorMode().preference)
    selected2 = false
  } else if (selected2 === false) {
    useColorMode().preference = 'dark'
    console.log("light Color"+useColorMode().preference)
    selected2 = true
  } else {
    useColorMode().preference = 'sepia'
    console.log("system")
  }
}

const items = ref([
    {
        label: t('navHome'),
        icon: 'solar:home-smile-angle-broken',
        command: () => {
            router.push('/');
        }
    },
    {
        label: t('navModels'),
        icon: 'healthicons:sexual-reproductive-health',
        command: () => {
            router.push('/models');
        }
    },
    {
        label: t('navMassage'),
        icon: 'guidance:massage',
        command: () => {
            router.push('/masajes');
        }
    },
    {
        label: 'Contáctenos',
        icon: 'solar:mailbox-line-duotone',
        command: () => {
            router.push('/contact');
        }
    }
]);
</script>