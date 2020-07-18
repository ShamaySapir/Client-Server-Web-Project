<template>
  <v-container fluid>
    Welcome to home page of loged in users
    <v-layout row>
      <v-flex xs6 order-lg2>
        <LoginForm :v-if="!loggedin" />
        <previewList title="Your Latest Recipes!" :recipes="lastWatchedRecipes" />
      </v-flex>
      <v-flex xs6>
          <previewList title="Some Random Recipes!" :recipes="randomRecipes" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import axios from 'axios'
import PreviewList from '../components/PreviewList.vue';
import LoginForm from '../components/LoginForm.vue';
export default {
  name: "HomePage",
  async mounted() {
    // const RandomRecipesRespone = await axios.get('api/recipes');
    // this.randomRecipes = RandomRecipesRespone.data;
    //  const lastWatchedResponse = await axios.get('api/user/lastWatched');
    // this.loggedin = lastWatchedResponse.status==200;
    // if(this.loggedin){
    //   this.lastWatchedRecipes = lastWatchedResponse.data;
    // }
  },
  data: ()=>({
    randomRecipes:[ {"id":223509,"image":"https://spoonacular.com/recipeImages/223509-556x370.jpg","title":"Sweet potato & goat's cheese ravioli","readyInMinutes":95,"likes":252,"vegan":true,"gluten_free":true,"viewed":{},"favorite":{}},
     {"id":223509,"image":"https://spoonacular.com/recipeImages/223509-556x370.jpg","title":"Sweet potato & goat's cheese ravioli","readyInMinutes":95,"likes":252,"vegan":true,"gluten_free":true,"viewed":{},"favorite":{}},
      {"id":223509,"image":"https://spoonacular.com/recipeImages/223509-556x370.jpg","title":"Sweet potato & goat's cheese ravioli","readyInMinutes":95,"likes":252,"vegan":true,"gluten_free":true,"viewed":{},"favorite":{}}],
    lastWatchedRecipes:[],
    loggedin: true
  }),
  components:{
    PreviewList,
    LoginForm
  }
};
</script>
