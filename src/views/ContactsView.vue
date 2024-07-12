<script setup>
import { useRouter } from 'vue-router'
import { useDarkModeStore } from '@/stores/darkMode.js'
import { gradientBgPurplePink } from '@/colors.js'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import LayoutGuest from '@/layouts/LayoutGuest.vue'

const styles = ['white', 'basic']

const darkModeStore = useDarkModeStore()

darkModeStore.set(false)

const router = useRouter()

const handleStyleChange = (slug) => {
  document.documentElement.classList.forEach((token) => {
    if (token.indexOf('style') === 0) {
      document.documentElement.classList.replace(token, `style-${slug}`)
    }
  })

  router.push('/dashboard')
}
</script>

<template>
  <LayoutGuest>
    <div :class="gradientBgPurplePink" class="flex min-h-screen items-center justify-center">
      <SectionMain>
        <h1 class="text-4xl md:text-5xl text-center text-white font-bold mt-12 mb-3 lg:mt-0">
          Contacts Feature Working in Progress&hellip;
        </h1>
        <h2 class="text-xl md:text-xl text-center text-white mb-12">
          Powered by 
          <code class="px-1.5 py-0.5 rounded bg-white bg-opacity-20">Bridge AI Gaming</code>
        </h2>
        <stripe-buy-button
  buy-button-id="buy_btn_1PaXP5HqnAEES4j7PVwsarVq"
  publishable-key="pk_live_51OACSrHqnAEES4j7qf2NjhTVhtfVRRpyeZH6hypsriaykkSpiuZPPj9MbtPk1aPY9pFyzFetJE784bY1cWvyUTqg00xvMcVeAu"
>
</stripe-buy-button>
        
      </SectionMain>
    </div>
  </LayoutGuest>
</template>

