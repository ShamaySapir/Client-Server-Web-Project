<template>
  <div class="my-10">
    <h1>This is the family recipes page</h1>
    <PreviewList :recipes="recipes" />
  </div>
</template>

<script>
// @ is an alias to /src
import PreviewList from "@/components/PreviewList.vue";
export default {
  name: "FamilyRecipesPage",
  async mounted() {
    try {
      const response = await fetch("http://localhost:3000/user/1/family");
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  },
  data: function () {
    return {
      recipes: [1, 2, 3, 4, 5, 6],
    };
  },
  //   mounted(){
  //     if(!(this.$root.userToken == "" || this.$root.userToken == null)){// logged in so send him to home page
  // this.$router.push("/HomePage");    }
  //  },
  components: {
    PreviewList,
  },
};
</script>
