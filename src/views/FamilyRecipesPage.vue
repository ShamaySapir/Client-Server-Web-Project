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
import PreviewList from "@/components/PreviewList.vue";
import axios from "axios";
export default {
  name: "FamilyRecipesPage",
  async mounted() {
      await axios.get("api/user/family")
        .then(response => {
          if(response.status==200){
            this.recipes=response.data.data
            this.title = this.recipes.length==0?
            'Sorry you have no Family Recipes'
            :'Your Family Recipes'
            this.imageSrc = this.recipes.length==0?
            'https://cdn.pixabay.com/photo/2015/11/03/09/09/magnifying-glass-1020142_960_720.jpg'
            :''
          }
          else{
            this.title = "Sorry we could not get your Family Recipes );"
            this.imageSrc = "https://cdn.pixabay.com/photo/2015/11/03/09/09/magnifying-glass-1020142_960_720.jpg"
          }
          })
          .catch (error => console.log(error));
  },
  data: function () {
    return {
      recipes: [],
      title: "Loading Family Recipes...",
      imageSrc: ""
    };
  },
  components: {
    PreviewList,
  },
};
</script>
