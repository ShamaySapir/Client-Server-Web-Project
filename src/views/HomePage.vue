<template>
  <v-container fluid>
    <h1>Welcome to ReciPyjamot</h1>
    <v-layout row>
      <v-flex xs6>
        <previewList title="Some Random Recipes!" :recipes="randomRecipes" />
      </v-flex>
      <v-flex xs6 order-lg2>
        <LoginForm v-if="!isLoggedIn" @render="render" :key="isLoggedIn" />
        <previewList title="Your Latest Recipes!" :recipes="lastWatchedRecipes" v-if="isLoggedIn" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PreviewList from '../components/PreviewList.vue';
import LoginForm from '../components/LoginForm.vue';
export default {
  name: "HomePage",
  async mounted() {
  },
  data: function() {
    return {
    randomRecipes:[ {"id":223509,"image":"https://spoonacular.com/recipeImages/223509-556x370.jpg","title":"Sweet potato & goat's cheese ravioli","readyInMinutes":95,"likes":252,"vegan":true,"gluten_free":true,"viewed":{},"favorite":{}},
     {"id":223509,"image":"https://spoonacular.com/recipeImages/223509-556x370.jpg","title":"Sweet potato & goat's cheese ravioli","readyInMinutes":95,"likes":252,"vegan":true,"gluten_free":true,"viewed":{},"favorite":{}},
      {"id":223509,"image":"https://spoonacular.com/recipeImages/223509-556x370.jpg","title":"Sweet potato & goat's cheese ravioli","readyInMinutes":95,"likes":252,"vegan":true,"gluten_free":true,"viewed":{},"favorite":{}}],
    lastWatchedRecipes:[ {"id":223509,"image":"https://spoonacular.com/recipeImages/223509-556x370.jpg","title":"Sweet potato & goat's cheese ravioli","readyInMinutes":95,"likes":252,"vegan":true,"gluten_free":true,"viewed":{},"favorite":{}},
     {"id":223509,"image":"https://spoonacular.com/recipeImages/223509-556x370.jpg","title":"Sweet potato & goat's cheese ravioli","readyInMinutes":95,"likes":252,"vegan":true,"gluten_free":true,"viewed":{},"favorite":{}},
      {"id":223509,"image":"https://spoonacular.com/recipeImages/223509-556x370.jpg","title":"Sweet potato & goat's cheese ravioli","readyInMinutes":95,"likes":252,"vegan":true,"gluten_free":true,"viewed":{},"favorite":{}}],
    isLoggedIn: this.$root.isLoggedIn,
    }
  },
  methods: {
    render: function() {
      this.isLoggedIn = this.$root.isLoggedIn;
    }
  },
  components:{
    PreviewList,
    LoginForm
  }
};
</script>
