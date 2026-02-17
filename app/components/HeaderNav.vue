<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

interface Props {
  title?: string
  logo?: string
  items?: NavigationMenuItem[]
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Nome do profissional',
  logo: undefined,
  items: () => [
    { label: 'Início', to: '#inicio' },
    { label: 'Sobre', to: '#sobre' },
    { label: 'Atendimento', to: '#atendimento' },
    { label: 'Contato', to: '#contato' }
  ]
})
</script>

<template>
  <UHeader>
    <!-- TITLE / LOGO -->
    <template #title>
      <div class="flex items-center">
        <NuxtImg
          v-if="props.logo"
          :src="props.logo"
          alt="Logo"
          class="h-8 w-auto"
          sizes="120px"
          preload
        />

        <span
          v-else
          class="font-semibold text-neutral-900 dark:text-white"
        >
          {{ props.title }}
        </span>
      </div>
    </template>

    <!-- MENU -->
    <UNavigationMenu :items="props.items" />

    <!-- MENU MOBILE -->
    <template #body>
      <UNavigationMenu
        :items="props.items"
        orientation="vertical"
        class="w-full"
      />
    </template>

    <!-- RIGHT -->
    <template #right>
      <UColorModeButton />
    </template>
  </UHeader>
</template>
