# 🚀 Landing Base — Nuxt 4

Template base para criação rápida de **landing pages de alta conversão** para profissionais liberais (psicólogos, nutricionistas, médicos, terapeutas, advogados e prestadores de serviço).

O objetivo deste projeto é permitir iniciar novos sites em minutos, mantendo consistência visual, qualidade de código e foco em conversão.

---

## 🎯 Objetivo do Projeto

Esta base foi criada para:

- ✅ Reduzir tempo de desenvolvimento
- ✅ Padronizar estrutura de landing pages
- ✅ Facilitar personalização para novos clientes
- ✅ Manter foco em conversão (WhatsApp / agendamento)
- ✅ Evitar retrabalho entre projetos
- ✅ Servir como ponto inicial para novos clientes

A ideia é que **80% do projeto permaneça igual**, alterando apenas conteúdos, imagens e identidade visual.

---

## 🧠 Conceito da Landing Page

A estrutura segue a jornada psicológica de conversão:

```
PROMESSA → IDENTIFICAÇÃO → SOLUÇÃO → CONFIANÇA → AÇÃO
```

Cada seção da página existe para responder uma dúvida do visitante:

1. Estou no lugar certo?
2. Essa pessoa pode me ajudar?
3. Posso confiar?
4. Como funciona?
5. Como entro em contato?

---

## 🧩 Estrutura da Página

A landing é dividida em seções reutilizáveis:

```
HeroSection        → Apresentação principal + CTA
ProblemsSection    → Identificação com dores do público
ServicesSection    → Serviços oferecidos (cards)
AboutSection       → Sobre o profissional
SocialProof        → Depoimentos / prova social
HowItWorks         → Como funciona o atendimento
CTASection         → Chamada final para ação
FooterSection      → Informações profissionais e contato
```

---

## 📁 Estrutura do Projeto

```
landing-base/
│
├── components/
│   └── sections/
│       ├── HeroSection.vue
│       ├── ServicesSection.vue
│       ├── AboutSection.vue
│       ├── CTASection.vue
│       └── FooterSection.vue
│
├── composables/
│   └── useWhatsApp.ts
│
├── content/
│   └── site.ts
│
├── assets/
│   └── images/
│
├── app.vue
└── nuxt.config.ts
```

---

## ⚙️ Como Funciona a Personalização

Toda informação do cliente fica centralizada em:

```
/content/site.ts
```

Exemplo:

```ts
export const site = {
  name: 'nome sobrenone',
  profession: 'Psicóloga Clínica',
  crp: '06/1884723',
  city: 'São Paulo',
  whatsapp: '55119745620060',

  services: [
    {
      title: 'Psicoterapia Infantil',
      description: '...',
      image: '/images/infantil.jpg'
    }
  ]
}
```

Os componentes apenas consomem esses dados.

👉 Para um novo cliente, normalmente basta alterar:

- `content/site.ts`
- `/assets/images`

---

## 🎨 Estilo Visual

O design segue princípios de:

- minimalismo
- leitura fácil
- sensação de acolhimento
- foco em ação
- baixa distração

Pensado especialmente para profissionais da área da saúde.

---

## 📱 Conversão

A landing é otimizada para:

- Botões de WhatsApp visíveis
- CTA em múltiplos pontos da página
- Leitura rápida (escaneável)
- Mobile first
- Redução de fricção para contato

---

## 🚀 Como iniciar um novo projeto

1. Duplicar o repositório base:

```bash
git clone landing-base landing-nome-do-cliente
```

2. Alterar conteúdos:

```
/content/site.ts
/assets/images
```

3. Ajustar cores (se necessário)

4. Deploy

Tempo médio de criação: **30–60 minutos**.

---

## 🛠 Tecnologias

- [Nuxt 4](https://nuxt.com)
- [Nuxt UI](https://ui.nuxt.com)
- TailwindCSS
- Nuxt Image

---

## 🔮 Melhorias futuras (roadmap)

- [ ] Tema configurável por cliente
- [ ] SEO automático via config
- [ ] Schema.org para profissionais de saúde
- [ ] Versão multi-page opcional
- [ ] Integração com Google Analytics

---

## 📄 Licença

Uso interno para criação de projetos comerciais.

---
