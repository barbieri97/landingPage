<script setup lang="ts">
import { site } from '~/content/site'

const sections = site.sections
const hero = sections.hero
const problem = sections.problem
const services = sections.services
const about = sections.about
const cta = sections.cta
const process = sections.process
const navBar = site.navBar
</script>

<template>
  <div>
    <HeaderNav
      :title="navBar.title"
      :items="navBar.items"
    />
    <WhatsAppFloatingButton />
    <section id="inicio">
      <HeroSection
        :title="hero.title"
        :label="hero.label"
      />
    </section>
    <ProblemSection
      :title="problem.title"
      :label="problem.label"
    />
    <section id="servicos">
      <ServicesSection
        :title="services.title"
        :services="services.services"
        :label="services.label"
      />
    </section>

    <section id="sobre">
      <AboutSection
        :title="about.title"
        :sub-title="about.subTitle"
        :label="about.label"
      />
    </section>

    <USeparator
      size="sm"
      class="px-5"
    />
    <section id="atendimento">
      <ProcessSection
        :title="process.title"
        :sub-title="process.subTitle"
        :steps="process.steps"
      />
    </section>

    <section id="contato">
      <CTASection
        :title="cta.title"
        :label="cta.label"
      />
      <ContactSection />
    </section>

    <section id="duvida">
      <FAQSection />
    </section>
    <FooterSection
      :name="site.name"
      :profession="site.profession"
      :professional-registry="site.professionalRegistry"
      :email="site.email"
      :whatsapp="site.whatsapp"
      :whatsapp-label="site.whatsappLabel"
      :socials="site.socials"
      :service-location="site.serviceLocation"
    />
  </div>
</template>
