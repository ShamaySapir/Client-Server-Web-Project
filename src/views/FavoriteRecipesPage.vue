<template>
  <div class="my-10">
  <h1>This is the favorite recipes page</h1>
    <PreviewList/>
  </div>
</template>

<script>
// @ is an alias to /src
import PreviewList from '@/components/PreviewList.vue'
export default {
  name: 'FavoriteRecipesPage',
//   mounted(){
//     if(!(this.$root.userToken == "" || this.$root.userToken == null)){// logged in so send him to home page
// this.$router.push("/HomePage");    }
//  },
  components: {
    PreviewList
  },
}
</script>
