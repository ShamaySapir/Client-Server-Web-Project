<template>
  <v-app id="ReciPyjamot">
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="primary">
      <v-toolbar-title style="width: 150px;" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">ReciPyjamot</span>
      </v-toolbar-title>
      <v-btn color="black" class="white--text" style="margin: 10px;" to="/home">
        <v-icon left>home</v-icon>Home
      </v-btn>
      <v-btn
        color="black"
        class="white--text"
        style="margin: 10px;"
        to="/about"
      >
        <v-icon left>info</v-icon>About
      </v-btn>
      <v-btn
        color="black"
        class="white--text"
        style="margin: 10px;"
        to="/search"
      >
        <v-icon left>search</v-icon>Search
      </v-btn>
      <div v-if="isLoggedIn">
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="black"
              class="white--text"
              style="margin: 10px;"
              v-bind="attrs"
              v-on="on"
            >
              Personal
            </v-btn>
          </template>

          <v-list color="primary">
            <v-list-item>
              <v-btn
                color="black"
                id="loginButton"
                class="white--text"
                style="margin: 10px;"
                to="/favorites"
              >
                <v-icon left>favorite</v-icon>Favorites
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn
                color="black"
                id="loginButton"
                class="white--text"
                style="margin: 10px;"
                to="/myRecipes"
              >
                <v-icon left>restaurant</v-icon>My Recipes
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn
                color="black"
                id="loginButton"
                class="white--text"
                style="margin: 10px;"
                to="/family"
              >
                <v-icon left>group</v-icon>Family Recipes
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-spacer />

      <v-btn
        color="black"
        id="loginButton"
        class="white--text"
        style="margin: 10px;"
        to="/login"
        v-if="!isLoggedIn"
      >
        <v-icon left>input</v-icon>Login
      </v-btn>
      <v-btn
        v-on:click="logout"
        :key="isLoggedIn"
        color="black"
        id="loginButton"
        class="white--text"
        style="margin: 10px;"
        v-if="isLoggedIn"
        to="/home"
      >
        <v-icon left>logout</v-icon>Logout
      </v-btn>
      <v-btn
        color="black"
        v-if="!isLoggedIn"
        id="registerButton"
        class="white--text"
        style="margin: 10px;"
        to="/register"
      >
        <v-icon left>assignment</v-icon>Register
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import store, { setLoggedOut, setUserName } from "./views/store";
import axios from "axios";

export default {
  mounted() {
    this.$root.baseURL = "http://localhost:3000";
  },
  props: {
    source: String,
  },

  data: function () {
    return {
      drawer: null,
      registerButton: null,
      logoutButton: null,
      notificationCount: 0,
    };
  },
  methods: {
    logout: async function () {
      await axios.post("api/user/deleteSearch");
      this.$cookies.remove("session");
      setLoggedOut();
      setUserName("Guest");
      if (this.$router.currentRoute.path != "/home") {
        this.$router.push("/home");
      }
    },
  },
  computed: {
    isLoggedIn() {
      return store.isLoggedIn;
    },
  },
};
</script>
