<template>
  <div class="my-10">
  <br><h1>
    {{title}}
  </h1>
    <v-img :src="imageSrc"></v-img>
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
      await axios.get("api/user")
      .then(response =>{
        if(response.status!=200){
          console.log("rederecting")
          this.$router.push("/home"); 
        }
        this.recipes = response.data.data;
        this.title = this.recipes.length==0?
        'Sorry you have no Recipes'
        :'Your Recipes'
        this.imageSrc = this.recipes.length==0?
        'https://cdn.pixabay.com/photo/2015/11/03/09/09/magnifying-glass-1020142_960_720.jpg'
        :''

      })
    .catch (error=> {
      console.log(error);
      this.title = 'Sorry we could not get your Personal Recipes );'
      this.imageSrc = 'https://cdn.pixabay.com/photo/2015/11/03/09/09/magnifying-glass-1020142_960_720.jpg'  
    })

  },
  data: function () {
    return {
      recipes: [],
      title: "Loading Personal Recipes",
      imageSrc:""
    };
  },
  components: {
    PreviewList
  },
}
</script>
