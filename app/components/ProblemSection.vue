<script setup lang="ts">
interface Props {
  title?: string
  imagePath?: string
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, officiis!',
  label:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam alias magnam quos nisi, dolorum mollitia provident quidem aspernatur earum pariatur harum laborum nam debitis? Iusto necessitatibus consequuntur voluptatem nobis sed!'
})
</script>

<template>
  <section class="py-16 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-2xl font-semibold mb-6">{{ props.title }}</h2>

      <p class="leading-relaxed">
        {{ props.label }}
      </p>
    </div>
  </section>
</template>
