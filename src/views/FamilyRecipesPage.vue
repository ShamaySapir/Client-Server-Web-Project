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
      const response = await axios.get("api/user/family");
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
  //   mounted(){
  //     if(!(this.$root.userToken == "" || this.$root.userToken == null)){// logged in so send him to home page
  // this.$router.push("/home");    }
  //  },
  components: {
    PreviewList,
  },
};
</script>
