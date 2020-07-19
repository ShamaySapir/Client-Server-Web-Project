<template>
  <v-app id="morbis">
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="primary">
      <v-toolbar-title style="width: 150px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">ReciPyjamot</span>
      </v-toolbar-title>
      <v-btn color="black" class="white--text" style="margin:10px" to="/home">
        <v-icon left>home</v-icon>Home
      </v-btn>
      <v-btn color="black" class="white--text" style="margin:10px" to="/about">
        <v-icon left>info</v-icon>About
      </v-btn>
      <v-btn color="black" class="white--text" style="margin:10px" to="/search">
        <v-icon left>search</v-icon>Search
      </v-btn>

      <v-spacer />
      <v-btn
        color="black"
        id="loginButton"
        class="white--text"
        style="margin:10px;"
        to="/favorites"
        v-if="isLoggedIn"
      >
        <v-icon left>favorite</v-icon>Favorites
      </v-btn>
      <v-btn
        color="black"
        id="loginButton"
        class="white--text"
        style="margin:10px;"
        to="/myRecipes"
        v-if="isLoggedIn"
      >
        <v-icon left>restaurant</v-icon>My Recipes
      </v-btn>
      <v-btn
        color="black"
        id="loginButton"
        class="white--text"
        style="margin:10px;"
        to="/family"
        v-if="isLoggedIn"
      >
        <v-icon left>group</v-icon>Family Recipes
      </v-btn>
      <v-spacer />

      <v-btn
        color="black"
        id="loginButton"
        class="white--text"
        style="margin:10px;"
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
        style="margin:10px;"
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
        style="margin:10px"
        to="/register"
      >
        <v-icon left>assignment</v-icon>Register
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" item>
          <v-img src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Morbis" />
        </v-avatar>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
  import store, {setLoggedOut} from "./views/store";

export default {

  mounted() {
    this.$root.baseURL = "http://localhost:3000";
  },
  props: {
    source: String
  },

  data: function() {
    return {
    drawer: null,
    registerButton: null,
    logoutButton: null,
    notificationCount:0,
    }
  },
  methods: {
    logout: function() {
      this.$cookies.remove("session");
      setLoggedOut()
      if (this.$router.currentRoute.path != "/home") {
        this.$router.push("/home");
      }
      
    }
  },
  computed: {
    isLoggedIn() {
        return store.isLoggedIn;
      }
  },
};
</script>