<template>
  <div>
    <h1>
      Hello and welcome to morbis' site !
      <br />Please Log in to continue
      <v-icon>mdi-access-point</v-icon>
      <v-icon>mdi-account</v-icon>
    </h1>
  </div>
</template>

<script>
export default {
  name: "welcome",
    mounted(){
      console.log(this.$cookies.get('session'));
  //     if(!(this.$root.userToken == "" || this.$root.userToken == null)){// logged in so send him to home page
  //       this.$router.push("/home");
  //     }
   },
};
</script>
