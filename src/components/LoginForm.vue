<template>
  <v-card raised class="mx-auto my-auto" max-width="500">
    <div align="center" dark class="primary mb-10 py-3 white--text">
      <h1>
        <v-icon large dark left>input</v-icon>Login
      </h1>
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
          <v-icon dark right>send</v-icon>
        </v-btn>
      </v-form>
    </div>
    <v-spacer></v-spacer>
  </v-card>
</template>
<script>
import crypto from "crypto-js";
import axios from "axios";
import {setLoggedIn} from '../views/store'
export default {
  name: "LoginForm",
  data: function() {
    return {
    valid: false,
    username: "",
    password: "",
    passwordVisable: false,
    }
  },
  methods: {
    async login() {
      if (!this.valid) {
        alert("There's a problem");
        return;
      }
      await axios.post("api/auth/login", {
          username: this.username,
          password: crypto.SHA256(this.password).toString()
      })
        .then(response => {
          if (response.status==200) {
            setLoggedIn()
            if (this.$router.currentRoute.path != "/home") {
              this.$router.go(-1);
            }
            // else {
            //   this.$emit('render');
            // }
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