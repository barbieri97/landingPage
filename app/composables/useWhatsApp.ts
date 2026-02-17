import { site } from '~/content/site'

export const useWhatsApp = () => {
  const phone = site.whatsapp

  const message = encodeURIComponent(
    `Olá, ${site.firstName}! Gostaria de mais informações sobre os atendimentos.`
  )

  const link = `https://wa.me/${phone}?text=${message}`

  return { link }
}
