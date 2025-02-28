<!-- components/LanguageSelectorCompact.vue -->
<template>
    <USelect
      v-model="selectedLanguage"
      :options="languageOptions"
      size="xs"
      :ui="{ width: 'w-20', rounded: 'rounded-full'}"
      @update:model-value="changeLanguage"
    />
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useI18n } from 'vue-i18n'
  
  const { locale } = useI18n()
  
  // Opciones simplificadas de idioma
  const languageOptions = [
    { value: 'en', label: '🇬🇧 EN' },
    { value: 'es', label: '🇪🇸 ES' }
  ]
  
  // Seleccionar idioma actual
  const selectedLanguage = ref(languageOptions.find(option => option.value === locale.value) || languageOptions[0])
  
  // Cambiar idioma
  function changeLanguage(option) {
    locale.value = option.value
    localStorage.setItem('userLanguage', option.value)
  }
  
  // Inicializar desde localStorage si existe
  onMounted(() => {
    const savedLanguage = localStorage.getItem('userLanguage')
    if (savedLanguage && ['en', 'es'].includes(savedLanguage)) {
      locale.value = savedLanguage
      selectedLanguage.value = languageOptions.find(option => option.value === savedLanguage) || languageOptions[0]
    }
  })
  </script>