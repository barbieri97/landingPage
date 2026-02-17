<script setup lang="ts">
interface Props {
  title?: string
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ex!',
  label:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate accusantium quasi voluptatum repellendus. Veniam cupiditate natus minima, temporibus sequi voluptates.'
})
</script>

<template>
  <section class="py-20 px-6 text-center bg-neutral-200 dark:bg-neutral-950">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl font-bold mb-6">{{ props.title }}</h2>

      <p class="mb-8">{{ props.label }}</p>
      <WhatsButton label="Agendar pelo WhatsApp" />
    </div>
  </section>
</template>
