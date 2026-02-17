<script setup lang="ts">
import type { Service } from '~/types/services'

interface Props {
  services?: Service[]
  title?: string
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  services: () => [
    {
      title: 'Serviço primário',
      description: 'Descrição padrão do serviço.',
      image: '/images/default.jpg'
    }
  ],
  title: 'Lorem ipsum dolor sit amet.',
  label:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quae ipsum repudiandae libero ullam at consequuntur enim sit nesciunt nobis dolorum, fugiat distinctio pariatur? Aspernatur voluptates doloremque asperiores consectetur fugiat!'
})
</script>

<template>
  <section class="py-20 px-6 bg-neutral-200 dark:bg-neutral-950">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-semibold text-center mb-3">{{ props.title }}</h2>

      <p class="text-center mb-12 max-w-2xl mx-auto">
        {{ props.label }}
      </p>

      <div class="grid md:grid-cols-2 gap-8">
        <UCard
          v-for="service in props.services"
          :key="service.title"
          class="overflow-hidden transition hover:-translate-y-1 shadow-lg"
          variant="subtle"
        >
          <NuxtImg
            :src="service.image"
            class="w-full h-48 object-cover rounded-xl mb-4"
            loading="lazy"
          />

          <h3 class="text-lg font-semibold mb-2">
            {{ service.title }}
          </h3>

          <p>
            {{ service.description }}
          </p>
        </UCard>
      </div>

      <div class="text-center mt-14">
        <WhatsButton label="Agendar atendimento!" />
      </div>
    </div>
  </section>
</template>
