<template>
  <div class="my-10">
    <CreateRecipeForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateRecipeForm from '@/components/CreateRecipeForm.vue'

export default {
  name: 'CreateRecipePage',
  mounted(){
    if(!(this.$root.userToken == "" || this.$root.userToken == null)){// logged in so send him to home page
this.$router.push("/home");    }
 },
  components: {
    CreateRecipeForm
  },
}
</script>
