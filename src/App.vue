<script setup>
import AppNav from './components/AppNav.vue'
import HeroSection from './components/HeroSection.vue'
import PartnersSection from './components/PartnersSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import FaqSection from './components/FaqSection.vue'
import CommunitySection from './components/CommunitySection.vue'
import PatreonSection from './components/PatreonSection.vue'
import SponsorsSection from './components/SponsorsSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppNav />
  <main>
    <HeroSection />
    <PartnersSection />
    <FeaturesSection />
    <FaqSection />
    <CommunitySection />
    <PatreonSection />
    <SponsorsSection />
  </main>
  <AppFooter />
</template>
