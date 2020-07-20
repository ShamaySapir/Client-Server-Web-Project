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
    try {
      const response = await axios.get("api/user/family");
      console.log(response);
      /* const recipes = response.data.recipes.map((r) => {
        return {
          id: r.id,
          title: r.title,
          readyInMinutes: r.readyInMinutes,
          image: r.image,
          aggregateLikes: r.aggregateLikes
        };
      });*/

      // insert to this.recipes
    } catch (error) {
      console.log(error);
    }

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
