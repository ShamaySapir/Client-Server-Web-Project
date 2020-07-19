<template>
  <div class="my-10">
    <RegisterForm :countries="countries"/>
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterForm from '@/components/RegisterForm.vue'
import axios from 'axios'
export default {
  name: 'RegisterPage',
  data: () =>({
    countries:[],
  }),
  async mounted(){
    const countryEntries = await axios.get("https://restcountries.eu/rest/v2/all");
    countryEntries.data.forEach(
      (country) => {
        console.log(country.name)
        this.countries.push({text: country.name,value: country.name,})

      })
    if(!(this.$root.userToken == "" || this.$root.userToken == null)){// logged in so send him to home page
      this.$router.push("/home");
    }
 },
  components: {
    RegisterForm
  }
}
</script>