<script setup lang="ts">
import type { Step } from '~/types/process'

interface Props {
  title?: string
  subTitle?: string
  steps?: Step[]
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Como funciona o atendimento',
  subTitle: 'Um processo simples e pensado para o seu conforto.',
  steps: () => [
    {
      title: 'Primeiro contato',
      description: 'Entre em contato para tirar dúvidas e receber as primeiras orientações.'
    },
    {
      title: 'Agendamento',
      description: 'Definimos o melhor horário para o atendimento online ou presencial.'
    },
    {
      title: 'Início do atendimento',
      description: 'O processo acontece de forma acolhedora e respeitando o seu momento.'
    }
  ]
})
</script>

<template>
  <section class="py-20 px-6">
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="text-3xl font-semibold mb-3">
        {{ props.title }}
      </h2>

      <p
        v-if="props.subTitle"
        class="mb-12 max-w-2xl mx-auto"
      >
        {{ props.subTitle }}
      </p>

      <div class="grid md:grid-cols-3 gap-8 text-left">
        <UCard
          v-for="(step, index) in props.steps"
          :key="index"
          class="rounded-2xl p-6 shadow-sm"
          variant="soft"
        >
          <template #header>
            <div class="font-semibold mb-2">
              {{ String(index + 1).padStart(2, '0') }} - {{ step.title }}
            </div>
          </template>

          <p>
            {{ step.description }}
          </p>
        </UCard>
      </div>
    </div>
  </section>
</template>
