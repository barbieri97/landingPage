<script setup lang="ts">
const { link } = useWhatsApp()

interface Props {
  color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral' | undefined
  size?: 'sm' | 'md' | 'lg' | 'xl'
  target?: '_blank' | '_self'
}

const props = withDefaults(defineProps<Props>(), {
  color: 'success',
  size: 'xl',
  target: '_blank'
})
</script>

<template>
  <div class="fixed bottom-6 right-6 z-50">
    <UButton
      :href="link"
      :target="props.target"
      :color="props.color"
      :size="props.size"
      icon="i-simple-icons-whatsapp"
      class="rounded-full w-16 h-16 flex items-center justify-center shadow-xl hover:scale-105 transition text-white"
    />
  </div>
</template>
