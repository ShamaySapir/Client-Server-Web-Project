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
import PreviewList from "@/components/PreviewList.vue";
import axios from "axios";
export default {
  name: "FamilyRecipesPage",
  async mounted() {
      await axios.get("api/user/family")
        .then(responce => {
          if(responce.status==200){
            this.recipes=responce.data.data
            this.title = this.recipes.length==0?
            'Sorry you have no Family Recipes'
            :'Your Family Recipes'
          }
          else{
            this.title = "Sorry we could not get your Family Recipes );"
          }
          })
          .catch (error => console.log(error));
  },
  data: function () {
    return {
      recipes: [],
      title: "Loading Family Recipes..."
    };
  },
  components: {
    PreviewList,
  },
};
</script>
