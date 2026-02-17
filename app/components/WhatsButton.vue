<script setup lang="ts">
const { link } = useWhatsApp()

interface Props {
  color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral' | undefined
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  target?: '_blank' | '_self'
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  size: 'xl',
  target: '_blank',
  label: 'Agendar pelo WhatsApp'
})
</script>

<template>
  <UButton
    :href="link"
    :target="props.target"
    :size="props.size"
    :color="props.color"
    class="text-white"
  >
    {{ props.label }}
  </UButton>
</template>
