<script setup>
import { useRouter } from 'vue-router'
import SectionFullScreen from '@/components/SectionFullScreen.vue'
import CardBox from '@/components/CardBox.vue'
import FormCheckRadio from '@/components/FormCheckRadio.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import LayoutGuest from '@/layouts/LayoutGuest.vue'



const router = useRouter()

const submit = () => {
  router.push('/dashboard')
}
</script>

<template>
  <LayoutGuest>
    <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
      <CardBox :class="cardClass" is-form @submit.prevent="registerUser">
        
        <FormField label="Email" help="Please enter your Email">
          <FormControl
            v-model="email"
            name="email"
            autocomplete="email"
          />
        </FormField>
        <FormField label="Username" help="Please enter your Username">
          <FormControl
            v-model="username"
            name="username"
            autocomplete="username"
          />
        </FormField>

        <FormField label="Password" help="Please enter your password">
          <FormControl
            v-model="password"
            type="password"
            name="password"
            autocomplete="current-password"
          />
        </FormField>

        <FormField label="Comfirm Password" help="Please enter your password again">
          <FormControl
            v-model="confirm"
            
            type="password"
            name="confirm"
            autocomplete="current-password"
          />
        </FormField>


        <template #footer>
          <BaseButtons>
            <BaseButton type="submit" color="info" label="Login" />
            <BaseButton to="/dashboard" color="info" outline label="Back" />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        name:'Bridge AI Gaming',
        email: '',
        username: '',
        password: '',
        confirm: ''
      }
    },
    methods: {

        registerUser () {
            this.$store.dispatch('registerUser', {
                name: this.name,
                email: this.email,
                username: this.username,
                password: this.password,
                confirm: this.confirm
            }).then(() => {
                this.$router.push({ name: 'login' })
            })
        }
    }
}
</script>