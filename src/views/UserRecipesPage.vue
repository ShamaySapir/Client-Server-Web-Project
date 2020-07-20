<template>
  <div class="my-10">
  <br><h1>
    {{title}}
  </h1>
    <PreviewList :recipes="recipes" />
  </div>
</template>

<script>
// @ is an alias to /src
import PreviewList from '@/components/PreviewList.vue'
import axios from "axios";
export default {
  name: 'UserRecipesPage',
  async mounted() {
    try {
      const response = await axios.get("api/user");
      if(response.status!=200){
        console.log("rederecting")
        this.$router.push("/home"); 
      }
      this.recipes = response.data.data;
      this.title = this.recipes.length==0?
    'Sorry you have no Recipes'
    :'Your Recipes'
    } catch (error) {
      console.log(error);
    }

  },
  data: function () {
    return {
      recipes: [],
      title: "Loading Personal Recipes"
    };
  },
  components: {
    PreviewList
  },
}
</script>
