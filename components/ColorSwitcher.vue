<template>
    <USelect
      v-model="colorMode.preference"
      :options="options"
      label="Modo de Color"
    />
  </template>
  
  <script setup lang="ts">
  const colorMode = useColorMode()
  
  const options = [
    {
      label: 'Claro',
      value: 'light'
    },
    {
      label: 'Oscuro',
      value: 'dark'
    }
  ]
  </script>