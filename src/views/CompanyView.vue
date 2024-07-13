<script setup>
import { reactive } from 'vue'

import { useMainStore } from '@/stores/main'
import {  mdiGithub, mdiGroup, mdiCheckCircle } from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import FormFilePicker from '@/components/FormFilePicker.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import { axiosBase } from '../api/axios-base';
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'

import PillTag from '@/components/PillTag.vue'

const mainStore = useMainStore()


const submitPass = () => {
  //
}
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiGroup" title="Company" main>
        <BaseButton href="https://github.com/cui-shinan0812/marketplace-vue-frontend" target="_blank" :icon="mdiGithub"
          label="Star on GitHub" color="contrast" rounded-full small />
      </SectionTitleLineWithButton>



      <CardBox class="mb-6">
        <BaseLevel type="justify-around lg:justify-center">

          <img :src="avatar" :alt="username"
            class="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800" />
          <slot />


          <div class="space-y-3 text-center md:text-left lg:mx-12">
            <div class="flex justify-center md:block">
              <FormCheckRadio v-model="userSwitchVal" name="notifications-switch" type="switch" label="Notifications"
                :input-value="true" />
            </div>
            <h1 class="text-2xl">
              Hello {{ companyExtraInfoForm.legal_business_name }}
            </h1>
            <p>The store or service name specified here will be displayed on your customers' card statements, etc., and
              help them clearly identify their purchases. Please enter information that customers will immediately
              associate with the store or service being used.</p>
            <div class="flex justify-center md:block">
              <PillTag label="Verified" color="info" :icon="mdiCheckCircle" />
            </div>
          </div>
        </BaseLevel>
      </CardBox>


      <CardBox class="mb-6" is-form @submit.prevent="changeBasicInfo">
        <BaseLevel type="justify-around lg:justify-center">

          <img :src="avatar" :alt="username"
            class="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800" />
          <slot />


          <div class="space-y-3 text-center md:text-left lg:mx-12">
            <div class="flex justify-center md:block">
              <FormCheckRadio v-model="userSwitchVal" name="notifications-switch" type="switch" label="Notifications"
                :input-value="true" />
            </div>
            <h1 class="text-2xl">
              Customer-facing information
            </h1>
            <p>The store or service name specified here will be displayed on your customers' card statements, etc., and
              help them clearly identify their purchases. Please enter information that customers will immediately
              associate with the store or service being used.</p>
            <div class="flex justify-center md:block">
              <PillTag label="Premium Plan" color="warning" :icon="mdiCheckDecagram" />
            </div>

          </div>

        </BaseLevel>


      </CardBox>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CardBox is-form>
          <FormField label="Avatar" help="Max 500kb">
            <FormFilePicker label="Upload" />
          </FormField>

          <FormField label="Name" help="Required. Your company name">
            <FormControl v-model="companyBasicForm.company_name" name="username" required autocomplete="username" />
          </FormField>
          <FormField label="Contact Person E-mail" help="Required. Your company's contact e-mail">
            <FormControl v-model="companyBasicForm.company_contact_email" type="email" name="email" required />
          </FormField>

          <FormField label="Contact Person Phone" help="Required. Your company's contact phone number">
            <FormControl v-model="companyBasicForm.company_contact_phone" name="contact_phone" required />
          </FormField>

          <FormField label="Business Address">
            <FormControl v-model="companyBasicForm.company_country" name="company_country" />
          </FormField>

          <FormField label="">
            <FormControl v-model="companyBasicForm.company_city" name="company_city" />
          </FormField>

          <FormField label="">
            <FormControl v-model="companyBasicForm.company_state" name="company_state" required />
          </FormField>

          <FormField label="">
            <FormControl v-model="companyBasicForm.company_address" name="company_address" />
          </FormField>

          <FormField label="Website">
            <FormControl v-model="companyBasicForm.company_website" name="company_website" />
          </FormField>

          <FormField label="Timezone">
            <FormControl v-model="companyBasicForm.company_timezone" name="company_timezone" />
          </FormField>

          <FormField label="Default Language">
            <FormControl v-model="companyBasicForm.company_language" name="company_language" />
          </FormField>

          <template #footer>
            <BaseButtons>
              <BaseButton color="info" type="submit" label="Update" @click="updateCompanyBasicInfo" />

            </BaseButtons>
          </template>
        </CardBox>

        <CardBox is-form @submit.prevent="submitPass">
          <FormField label="Legal Business name" help="Exmaple: Sportopia Limited">
            <FormControl v-model="companyExtraInfoForm.legal_business_name" name="legal_business_name" required />
          </FormField>

          <FormField label="Business Description" help="Exmaple: Sportopia Limited is the leader of FEC industry in Asia.">
            <FormControl v-model="companyExtraInfoForm.business_description" name="business_description" required />
          </FormField>

          <FormField label="Business Email" help="Exmaple: info@yourcompany.com ">
            <FormControl v-model="companyExtraInfoForm.business_email" name="business_email" required />
          </FormField>

          <FormField label="Customer Support phone Number" help="Required. phone number for customer service">
            <FormControl v-model="companyExtraInfoForm.cs_phone" name="cs_phone" required />
          </FormField>

          <FormField label="Business Website" help="https://example.com/info">
            <FormControl v-model="companyExtraInfoForm.business_website" name="business_website" />
          </FormField>

          <FormField label="Customer Support URL" help="https://example.com/support">
            <FormControl v-model="companyExtraInfoForm.cs_website" name="cs_website" />
          </FormField>

          <FormField label="Privacy Policy URL" help="https://example.com/privacy-policy">
            <FormControl v-model="companyExtraInfoForm.privacy_policy_website" name="privacy_policy_website" />
          </FormField>


          <FormField label="Terms of Service URL" help="https://example.com/terms-of-service">
            <FormControl v-model="companyExtraInfoForm.term_service_website" name="term_service_website" />
          </FormField>

          <FormField label="Commerce Disclosures URL" help="https://example.com/specified-commercial-transaction-act">
            <FormControl v-model="companyExtraInfoForm.commerce_disclosures_website" name="commerce_disclosures_website" />
          </FormField>


          <template #footer>
            <BaseButtons>
              <BaseButton type="submit" color="info" label="Update" @click="updateCompanyExtraInfo"/>

            </BaseButtons>
          </template>
        </CardBox>
      </div>
    </SectionMain>
  </LayoutAuthenticated>
</template>

<script>

import { getAPI } from '../api/axios-base'
import { mapState } from 'vuex'
export default {
  name: 'Profile',
  data() {
    return {
      companyBasicForm:{
        company_id:'',
        company_name: '',
        company_city: '',
        company_state: '',
        company_country: '',
        company_address: '',
        company_contact_phone: '',
        company_contact_email: '',
        company_website: '',
        company_timezone: '',
        company_language: ''
      },
      companyExtraInfoForm: {
        company_extra_id: '',
        legal_business_name: '',
        business_email: '',
        business_description:'',
        cs_phone: '',
        business_website: '',
        cs_website: '',
        privacy_policy_website: '',
        term_service_website: '',
        commerce_disclosures_website: ''
      },
    }
  },

  methods: {

    registerUser() {
      this.$store.dispatch('registerUser', {
        name: this.name,
        email: this.email,
        username: this.username,
        password: this.password,
        confirm: this.confirm
      }).then(() => {
        this.$router.push({ name: 'login' })
      })
    },

    getCompanyBasicInfo(id) {

      axiosBase.get(`/api/CompanyBasicInfo/${id}/`)
        .then(response => {
          this.companyBasicForm.company_name = response.data.company_name
          this.companyBasicForm.company_address = response.data.company_address
          this.companyBasicForm.company_city = response.data.company_city
          this.companyBasicForm.company_state = response.data.company_state
          this.companyBasicForm.company_country = response.data.company_country
          this.companyBasicForm.company_contact_phone = response.data.company_contact_phone
          this.companyBasicForm.company_contact_email = response.data.company_contact_email
          this.companyBasicForm.company_website = response.data.company_website
          this.companyBasicForm.company_timezone = response.data.company_timezone
          this.companyBasicForm.company_language = response.data.company_language
          this.getCompanyExtraInfo()
        })
    },

    updateCompanyBasicInfo({ commit }, data) {
      
    },
    getCompanyExtraInfo() {
      // use axiosBase to get company extra info
      axiosBase.get('/api/CompanyExtraInfo/?company_basic_id=1')
          .then(response => {
            this.companyExtraInfoForm.company_extra_id = response.data[0].id 
            this.companyExtraInfoForm.legal_business_name = response.data[0].legal_business_name
            this.companyExtraInfoForm.business_email = response.data[0].business_email
            this.companyExtraInfoForm.business_description = response.data[0].business_description
            this.companyExtraInfoForm.cs_phone = response.data[0].cs_phone
            this.companyExtraInfoForm.business_website = response.data[0].business_website
            this.companyExtraInfoForm.cs_website = response.data[0].cs_website
            this.companyExtraInfoForm.privacy_policy_website = response.data[0].privacy_policy_website
            this.companyExtraInfoForm.term_service_website = response.data[0].term_service_website
            this.companyExtraInfoForm.commerce_disclosures_website = response.data[0].commerce_disclosures_website

          })
          .catch(error => {
            // handle the error
            console.log(error);
          });

    },

    getCompanyMemberInfo() {
      axiosBase.get(`/api/CompanyMembers/${this.$store.state.userId}/`)
        .then(response => {
          
          this.companyBasicForm.company_id = response.data.company
          this.getCompanyBasicInfo(this.companyBasicForm.company_id)
        })
        .catch(err => {
          console.log(err)
        })

    },
    updateCompanyExtraInfo() {
      let data = {
        legal_business_name: this.companyExtraInfoForm.legal_business_name,
        business_email: this.companyExtraInfoForm.business_email,
        business_description: this.companyExtraInfoForm.business_description,
        cs_phone: this.companyExtraInfoForm.cs_phone,
        business_website: this.companyExtraInfoForm.business_website,
        cs_website: this.companyExtraInfoForm.cs_website,
        privacy_policy_website: this.companyExtraInfoForm.privacy_policy_website,
        term_service_website: this.companyExtraInfoForm.term_service_website,
        commerce_disclosures_website: this.companyExtraInfoForm.commerce_disclosures_website,
        company: this.companyBasicForm.company_id
      }

      console.log(data)

      if(this.companyExtraInfoForm.company_extra_id === ''){
        axiosBase.post('/api/CompanyExtraInfo/', data)
          .then(response => {
            console.log(response.data)
            
          })
          .catch(err => {
            
          });
      } else {
        axiosBase.put(`/api/CompanyExtraInfo/${this.companyExtraInfoForm.company_extra_id}/`, data)
          .then(response => {
            console.log(response.data)
            
          })
          .catch(err => {
            
          });
      }

    },

    updateCompanyBasicInfo(){
      let data = {
        company_name: this.companyBasicForm.company_name,
        company_address: this.companyBasicForm.company_address,
        company_city: this.companyBasicForm.company_city,
        company_state: this.companyBasicForm.company_state,
        company_country: this.companyBasicForm.company_country,
        company_contact_phone: this.companyBasicForm.company_contact_phone,
        company_contact_email: this.companyBasicForm.company_contact_email,
        company_website: this.companyBasicForm.company_website,
        company_timezone: this.companyBasicForm.company_timezone,
        company_language: this.companyBasicForm.company_language,
      }

      if(this.companyBasicForm.company_id !== ''){
        axiosBase.put(`/api/CompanyBasicInfo/${this.companyBasicForm.company_id}/`, data)
          .then(() => {
            console.log('Company Basic Info Updated')
          })
          .catch(err => {
            console.log(err)
          });
      }else{
        axiosBase.post('/api/CompanyBasicInfo/', data)
          .then(() => {
            console.log('Company Basic Info Updated')
            
          })
          .catch(err => {
            
          });
      }
    },
  }, created() {
    console.log(useMainStore.userName)
    getAPI.get('/mods/', { headers: { Authorization: `Bearer ${this.$store.state.accessToken}` } }) // proof that your access token is still valid; if not the
      // axios getAPI response interceptor will attempt to get a new  access token from the server. check out ../api/axios-base.js getAPI instance response interceptor
      .then(response => {
        this.$store.state.APIData = response.data // store the response data in store
      })
      .catch(err => { // refresh token expired or some other error status
        console.log(err)
        this.$router.push({ name: 'login' })
      })
  },
  async mounted() {
    
    await this.getCompanyMemberInfo();
  }
}
</script>