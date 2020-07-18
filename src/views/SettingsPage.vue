<template>
  <div class="my-10">
    <Settings/>
  </div>
</template>

<script>
// @ is an alias to /src
import Settings from '@/components/Settings.vue'

export default {
  name: 'SettingsPage',
//   mounted(){
//     if(!(this.$root.userToken == "" || this.$root.userToken == null)){// logged in so send him to home page
// this.$router.push("/home");    }
//  },
  components: {
    Settings
  },
}
</script>