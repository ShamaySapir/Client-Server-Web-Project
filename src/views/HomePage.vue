<template>
  <div>
    Welcome to home page of loged in users
    <previewList :recipes="randomRecipes" />
    <previewList :recipes="lastWatchedRecipes" />
    <LoginForm :v-if="!loggedin" />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import PreviewList from '../components/PreviewList.vue';
import LoginForm from '../components/LoginForm.vue';
export default {
  name: "HomePage",
  async mounted() {
    const RandomRecipesRespone = await axios.get('api/recipes');
    this.randomRecipes = RandomRecipesRespone.data;
    const lastWatchedResponse = await axios.get('api/user/lastWatched');
    this.loggedin = lastWatchedResponse.status==200;
    if(this.loggedin){
      this.lastWatchedRecipes = lastWatchedResponse.data;
    }
  },
  data: ()=>({
    randomRecipes:[],
    lastWatchedRecipes:[],
    loggedin: true
  }),
  components:{
    PreviewList,
    LoginForm
  }
};
</script>
