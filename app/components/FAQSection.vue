<script setup lang="ts">
import type { FAQItem } from '~/types/faq'

interface Props {
  title?: string
  subTitle?: string
  items?: FAQItem[]
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Perguntas frequentes',
  subTitle: 'Algumas dúvidas comuns antes de iniciar o atendimento.',
  items: () => [
    {
      question: 'Como funciona o atendimento online?',
      answer:
        'O atendimento é realizado por videochamada em ambiente seguro, com a mesma ética e sigilo do atendimento presencial.'
    },
    {
      question: 'Qual a duração das sessões?',
      answer: 'As sessões têm duração média de 50 minutos.'
    },
    {
      question: 'Atende convênios?',
      answer:
        'Os atendimentos são particulares, com possibilidade de recibo para reembolso conforme o plano de saúde.'
    }
  ]
})
</script>

<template>
  <section class="py-20 px-6">
    <div class="max-w-3xl mx-auto">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-semibold mb-3">
          {{ props.title }}
        </h2>

        <p
          v-if="props.subTitle"
          class="text-neutral-600 dark:text-neutral-400"
        >
          {{ props.subTitle }}
        </p>
      </div>

      <UAccordion
        :items="
          props.items.map((item) => ({
            label: item.question,
            content: item.answer
          }))
        "
      />
    </div>
  </section>
</template>

<!-- :ui="{
  item: `
bg-neutral-200 dark:bg-neutral-950
rounded-2xl
shadow-sm
border border-neutral-200 dark:border-neutral-700
transition
my-5
`,

  trigger: `
px-6 py-5
text-left
font-medium
hover:bg-neutral-50 dark:hover:bg-neutral-700/40
rounded-2xl
`,

  content: `
px-6 pb-6
leading-relaxed
roundend-2xl
`
}" -->
