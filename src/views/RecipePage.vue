<template>
  <div class="my-10">
  <h1>This is a recipe page</h1>
    <Recipe/>
  </div>
</template>

<script>
// @ is an alias to /src
import Recipe from '@/components/Recipe.vue'

export default {
  name: 'RecipePage',
//   mounted(){
//     if(!(this.$root.userToken == "" || this.$root.userToken == null)){// logged in so send him to home page
// this.$router.push("/HomePage");    }
//  },
  components: {
    Recipe
  },
}
</script>
