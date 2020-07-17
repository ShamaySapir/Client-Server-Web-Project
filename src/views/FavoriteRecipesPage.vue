<template>
  <div class="my-10">
  <h1>This is the favorite recipes page</h1>
    <PreviewList :recipes="recipes" />
  </div>
</template>

<script>
// @ is an alias to /src
import PreviewList from '@/components/PreviewList.vue'
import axios from 'axios'
export default {
  name: 'FavoriteRecipesPage',
  async mounted(){
    try {
      const response = await axios.get("api/user/favorite");
      if(response.status!=200){
        console.log("rederecting")
        this.$router.push("/home"); 
      }
      this.recipes = response.data.data;
    } catch (error) {
      console.log(error);
    }
  },
  data: function () {
    return {
      recipes: [],
    };
  },
  components: {
    PreviewList
  },
}
</script>
