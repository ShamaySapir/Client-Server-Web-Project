<template>
  <div>Welcome to home page of loged in users</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomePage",
  mounted() {
    console.log(this.$cookies.get('session'));
    console.log(this.$cookies.get('session'));
    if (this.$root.userToken == "" || this.$root.userToken == null) {
        // not logged in so send him to welcome page
        // this.$router.push("/welcome");
      }
  },
};
</script>
