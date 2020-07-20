<template>
  <v-card raised class="mx-auto my-auto" max-width="700">
    <div align="center" class="primary mb-10 py-3 white--text">
      <h1 class="primary"><v-icon large dark left>assignment</v-icon>Register</h1>
      <div class="red--text">
      {{message}}
      </div>
    </div>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs14>
        <v-card color="white">
        <v-card-title>
          Public Infomation<v-icon light medium right>visibility</v-icon>
        </v-card-title>
          <br>
          <v-text-field
            class="mx-5"
            outlined
            v-model="username"
            :prepend-icon="'mdi-account'"
            :rules="usernameRules"
            label="Username"
            required
          ></v-text-field>
          <v-text-field
            class="mx-5"
            outlined
            v-model="email"
            :prepend-icon="'mdi-email'"
            :type="'email'"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-flex xs11 sm11 d-flex>
            <v-select
              v-model="country"
              label="Country"
              :prepend-icon="'mdi-lock'"
              :items="countries"
              outlined
              required
            ></v-select>
          </v-flex>
          <v-text-field
            class="mx-5"
            outlined
            v-model="imageURL"
            :prepend-icon="'mdi-image'"
            label="Image URL"
            required
          ></v-text-field>
        </v-card>
      </v-flex>
      <v-flex xs8>
        <v-card color="white">
          <v-card-title>          
            Private Infomation<v-icon light medium right>visibility_off</v-icon>
          </v-card-title>
          <v-text-field
            class="mx-5"
            outlined
            v-model="firstName"
            :prepend-icon="'mdi-pencil'"
            :rules="nameRules"
            label="First Name"
            required
          ></v-text-field>
          <v-text-field
            class="mx-5"
            outlined
            v-model="lastName"
            :prepend-icon="'mdi-pencil'"
            :rules="nameRules"
            label="Last Name"
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
            :rules="passwordRules"
            label="Password"
            required
          ></v-text-field>
          <v-text-field
            class="mx-5"
            outlined
            v-model="confirmPassword"
            :prepend-icon="'mdi-lock'"
            :append-icon="passwordVisable ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="passwordVisable = !passwordVisable"
            :type="passwordVisable ? 'text' : 'password'"
            :rules="passwordRules"
            label="Confirm Password"
            required
          ></v-text-field>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card dark color="primary">
          <v-card-title>
            <v-icon dark medium left>account_box</v-icon> Profile 
          </v-card-title>
          <v-img :src="imageURL==''?'http://tech.taskrabbit.com/images/authors/missing_person.png':imageURL" aspect-ratio="1"></v-img>
          <v-card-text>
            <strong>{{username}}</strong> from {{country}}<br>{{email}}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
          <v-btn color="success" block @click="register">
            Register
            <v-icon dark right>send</v-icon>
        </v-btn>
  </v-card>
</template>

<script>
import axios from 'axios';
const crypto = require("crypto-js");

export default {
  name: "RegisterForm",
  props:{
    countries:[],
  },
  data: () => ({
    message:"",
    valid: false,
    username: "BojackHorseman",
    password: "a12345678A",
    confirmPassword: "a12345678A",
    country:"United States of America",
    firstName: "Bojack",
    lastName: "Horseman",
    email: "borseman@gmail.com",
    imageURL:'https://tse1.mm.bing.net/th?id=OIP.EkbXJQEr85A1vYYtRGqqPgHaEJ&pid=Api&rs=1&c=1&qlt=95&w=182&h=102',
    usernameRules: [
      v =>
        !v ||
        /[a-zA-Z][a-zA-Z0-9_.@]{3,}/.test(v) ||
        "Username must be alphanumeric, at least 4 letters and start with a letter"
    ],
    passwordRules: [
      v =>
        !v ||
        (/(.*[a-z].*)/.test(v) &&
          /(.*[A-Z].*)/.test(v) &&
          /(.*[0-9].*)/.test(v) &&
          /(.{8,20})/.test(v)) ||
        "Password must contain: numbers, 8-20 letters long and big and small letters"
    ],
    nameRules: [
      v =>
        !v ||
        /( ?[a-zA-Z]{3,}$)+/.test(v) ||
        "Name must contain 3 letters and alphabet only"
    ],
    emailRules: [
      v =>
        !v ||
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/.test(v) ||
        "Invalid E-mail"
    ],
    date: null,
    menu: false,
    passwordVisable: false,
  }),
  methods: {
    async register() {
      if(
        this.password==null||
        this.confirmPassword==null||
        this.country==null||
        this.firstName==null||
        this.lastName==null||
        this.email==null||
        this.imageURL==null
      ) {
        this.message ="Please fill every cell before registering";
        return;
      }
      await axios.post("/api/auth/register",{
          username: this.username,
          firstName: this.firstName,
          lastName: this.lastName,
          country: this.country,
          password: crypto.SHA256(this.password).toString(),
          confirmationPassword: crypto.SHA256(this.confirmPassword).toString(),
          email: this.email,
          image: this.imageURL,
        })
      // fetch(this.$root.baseURL + "/api/register", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify({
      //     username: this.username,
      //     firstName: this.firstname,
      //     lastName: this.lastName,
      //     country: this.country,
      //     password: crypto.SHA256(this.password).toString(),
      //     confirmationPassword: crypto.SHA256(this.confirmPassword).toString(),
      //     email: this.email,
      //     image: this.imageURL,
      //   })
      // })
        .then(async response => {
          if (response.status==201||response.status==200) {
            this.message = "Registered Successfully!";
              this.$router.push("/login");
          } else {
            this.message = "There is a problem please try again";
            response.json().then(json => {
                alert(response.status + ": " + json.message);
            });
          }
        })
        .catch(err => {
           this.message = "There is a problem please try again";
          console.error(err)});
    }
  }
};
</script>

<style scoped>
</style>