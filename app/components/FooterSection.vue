<script setup lang="ts">
import type { Social } from '~/types/social'

const year = new Date().getFullYear()

interface Props {
  name?: string
  profession?: string
  professionalRegistry?: string
  serviceLocation?: string
  whatsapp?: string
  whatsappLabel?: string
  email?: string
  socials?: Social[]
  creditsText?: string
  creditsLink?: string
}

const props = withDefaults(defineProps<Props>(), {
  name: 'Nome do profissional',
  profession: 'Profissão',
  professionalRegistry: 'Registro profissional',
  serviceLocation: 'Atendimento online e presencial',
  whatsapp: '5511999999999',
  whatsappLabel: '(11) 99999-9999',
  email: 'email@exemplo.com',
  socials: () => [
    {
      icon: 'i-simple-icons-instagram',
      link: 'https://instagram.com/',
      label: 'Instagram'
    },
    {
      icon: 'i-simple-icons-whatsapp',
      link: 'https://wa.me/5511999999999',
      label: 'WhatsApp'
    },
    {
      icon: 'i-simple-icons-linkedin',
      link: '#',
      label: 'LinkedIn'
    }
  ],
  creditsText: 'Site criado por André Barbieri, de psico para psico.',
  creditsLink: 'https://wa.me/5511993971098'
})
</script>

<template>
  <UFooter class="border-none bg-neutral-900 dark:bg-neutral-950 text-white">
    <!-- ESQUERDA -->
    <template #left>
      <div class="text-sm">
        <p class="font-semibold">{{ props.name }} – {{ props.profession }}</p>

        <p>{{ props.professionalRegistry }}</p>
        <p>{{ props.serviceLocation }}</p>

        <p>
          WhatsApp:
          <a
            :href="`https://wa.me/${props.whatsapp}`"
            target="_blank"
            class="transition"
          >
            {{ props.whatsappLabel }}
          </a>
        </p>

        <p>
          Email:
          <a
            :href="`mailto:${props.email}`"
            class="transition"
          >
            {{ props.email }}
          </a>
        </p>
      </div>
    </template>

    <!-- REDES SOCIAIS -->
    <template #right>
      <div class="flex items-center gap-2">
        <UButton
          v-for="(social, index) in props.socials"
          :key="index"
          :icon="social.icon"
          color="neutral"
          variant="ghost"
          :to="social.link"
          target="_blank"
          :aria-label="social.label"
          class="text-white"
        />
      </div>
    </template>

    <!-- BASE -->
    <template #bottom>
      <div class="text-center p-3 text-xs font-bold flex justify-center items-center">
        <a
          :href="props.creditsLink"
          target="_blank"
        >
          © {{ year }} - {{ props.creditsText }}
        </a>
      </div>
    </template>
  </UFooter>
</template>
