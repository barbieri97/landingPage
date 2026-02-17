<script setup lang="ts">
interface Props {
  title?: string
  imagePath?: string
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, officiis!',
  imagePath: '/images/hero.jpg',
  label:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam alias magnam quos nisi, dolorum mollitia provident quidem aspernatur earum pariatur harum laborum nam debitis? Iusto necessitatibus consequuntur voluptatem nobis sed!'
})
</script>

<template>
  <section class="relative py-20 px-6 overflow-hidden">
    <!-- Background image -->

    <NuxtImg
      :src="props.imagePath"
      sizes="sm: 100vw md: 100vw lg:1920px"
      class="absolute inset-0 w-full h-full object-cover"
      preload
    />

    <!-- Overlay escuro para legibilidade -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- Conteúdo -->
    <div class="relative max-w-4xl mx-auto text-center text-white">
      <h1 class="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        {{ props.title }}
      </h1>

      <p class="text-lg md:text-xl mb-8">
        {{ props.label }}
      </p>
      <WhatsButton />
    </div>
  </section>
</template>
