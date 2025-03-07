<script setup lang="ts">
import type { Modelo } from '~/types/modelos'

// Obtener el ID de la ruta
const route = useRoute()
const itemId = computed(() => Number(route.params.slug))


</script>
<template>

</template>