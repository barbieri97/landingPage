<script setup lang="ts">
interface Props {
  title?: string
  subTitle?: string
  label?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Nome do profissional',
  subTitle: 'Profissão - CRP 06/191484',
  label: () => [
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque veniam quia nemo officiis molestias cumque repudiandae, sed tempora deleniti in! Consequatur animi ipsa voluptas debitis consectetur, omnis veritatis vel corporis!',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque veniam quia nemo officiis molestias cumque repudiandae, sed tempora deleniti in! Consequatur animi ipsa voluptas debitis consectetur, omnis veritatis vel corporis!'
  ]
})
</script>

<template>
  <section class="py-16 px-6">
    <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <NuxtImg
        src="/images/psico.jpg"
        class="rounded-xl shadow-lg"
        loading="lazy"
      />

      <div>
        <h2 class="text-2xl font-semibold mb-2">{{ props.title }}</h2>
        <h3 class="font-semibold mb-3">{{ props.subTitle }}</h3>
        <p
          v-for="(l, index) in props.label"
          :key="index"
          class="mb-4"
        >
          {{ l }}
        </p>
        <WhatsButton />
      </div>
    </div>
  </section>
</template>
