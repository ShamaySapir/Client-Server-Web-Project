<template>
  <div>
    <br>
    <previewList :recipes="recipes"/>
    <LoginForm/>
  </div>
</template>

<script>
// @ is an alias to /src
// import axios from 'axios'
import PreviewList from '../components/PreviewList.vue';
import LoginForm from '../components/LoginForm.vue';
export default {
  name: "HomePage",
  async mounted() {
    // this.recipes = await axios.get('api/recipes');
    this.recipes= this.recipes.data;
    if (this.$root.userToken == "" || this.$root.userToken == null) {
        // not logged in so send him to welcome page
        // this.$router.push("/welcome");
      }
  },
  data: ()=>({
    recipes:[],
  }),
  components:{
    PreviewList,
    LoginForm
  }
};
</script>
