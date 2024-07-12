<script setup>
import SectionFullScreen from '@/components/SectionFullScreen.vue'
import CardBox from '@/components/CardBox.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import LayoutGuest from '@/layouts/LayoutGuest.vue'
</script>

<template>
  <LayoutGuest>
    <SectionFullScreen v-slot="{ cardClass }" bg="pinkRed">
      <CardBox :class="cardClass">
        <div class="space-y-3">
          <h1 class="text-2xl">Are you going to sign out?</h1>

        </div>

        <template #footer>
          <BaseButtons>
            <BaseButton label="Logout" @click="Logout" color="danger" />
          </BaseButtons>
          
        </template>
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>

<script>
  export default {
    name: 'logout',
    
    methods: {

        Logout () {
            this.$store.dispatch('logoutUser', {
                
            }).then(() => {
                this.$router.push({ name: 'login' })
            })
        }
    }
}
</script>
