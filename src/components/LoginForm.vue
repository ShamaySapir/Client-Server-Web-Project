<template>
  <v-card raised class="mx-auto my-auto" max-width="500">
    <div align="center" dark class="primary mb-10 py-3 white--text">
      <h1>Login</h1>
    </div>
    <div align="center">
      <v-form ref="form" v-model="valid">
        <v-text-field
          class="mx-5"
          outlined
          v-model="username"
          :prepend-icon="'mdi-account'"
          label="Username"
          required
        ></v-text-field>
        <v-text-field
          class="mx-5"
          outlined
          v-model="password"
          :prepend-icon="'mdi-lock'"
          :append-icon="passwordVisable ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="passwordVisable = !passwordVisable"
          :type="passwordVisable ? 'text' : 'password'"
          label="Password"
          required
        ></v-text-field>

        <v-btn color="success" block @click="login">
          Login
          <v-icon right>mdi-check-circle</v-icon>
        </v-btn>
      </v-form>
    </div>
    <v-spacer></v-spacer>
  </v-card>
</template>
<script>
import crypto from "crypto-js";
import axios from "axios";
export default {
  name: "LoginForm",
  data: () => ({
    valid: false,
    username: "",
    password: "",
    passwordVisable: false,
    recipes:[]
  }),
  methods: {
    async login() {
      if (!this.valid) {
        alert("There's a problem");
        return;
      }
      // eslint-disable-next-line no-unused-vars
    
await axios.post("api/auth/Login", {
          username: this.username,
          password: crypto.SHA256(this.password).toString()
      })
        .then(response => {
          if (response.status==200) {
            this.$root.isLoggedIn = true;
            this.$router.go(-1);
          } else {
            if (response.status == 401) {
              alert("The combination of username and password doesn't exist");
            } else {
              response.json().then(json => {
                alert(response.status + ": " + json.message);
              });
            }
          }
        })
        .catch(err => {console.error(err)});
    },
  },
};

</script>

<style scoped>
</style>