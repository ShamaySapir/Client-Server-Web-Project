<template>
  <div class="my-10">
    <h1>This is the family recipes page</h1>
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
      const response = await axios.get("api/user/1/family");
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
      recipes: [1, 2, 3, 4, 5, 6],
    };
  },
  //   mounted(){
  //     if(!(this.$root.userToken == "" || this.$root.userToken == null)){// logged in so send him to home page
  // this.$router.push("/home");    }
  //  },
  components: {
    PreviewList,
  },
};
</script>
