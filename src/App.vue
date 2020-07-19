<template>
  <v-app id="morbis">
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="primary">
      <v-toolbar-title style="width: 150px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">ReciPyjamot</span>
      </v-toolbar-title>
      <v-btn color="black" class="white--text" style="margin:10px" to="/home"><v-icon left>home</v-icon> Home</v-btn>
      <v-btn color="black" class="white--text" style="margin:10px" to="/about"><v-icon left>info</v-icon> About</v-btn>
      <v-btn color="black" class="white--text" style="margin:10px" to="/search"><v-icon left>search</v-icon> Search</v-btn>

      <v-spacer />
      <v-btn
        color="black"
        id="loginButton"
        class="white--text"
        style="margin:10px;"
        to="/favorites"
        v-if="$root.isLoggedIn"
      ><v-icon left>favorite</v-icon> Favorites</v-btn>
      <v-btn
        color="black"
        id="loginButton"
        class="white--text"
        style="margin:10px;"
        to="/myRecipes"
        v-if="$root.isLoggedIn"
      ><v-icon left>restaurant</v-icon> My Recipes</v-btn>
      <v-btn
        color="black"
        id="loginButton"
        class="white--text"
        style="margin:10px;"
        to="/family"
        v-if="$root.isLoggedIn"
      ><v-icon left>group</v-icon> Family Recipes</v-btn>
      <v-spacer />

      <v-btn
        color="black"
        id="loginButton"
        class="white--text"
        style="margin:10px;"
        to="/login"
        v-if="!$root.isLoggedIn"
      ><v-icon left>input</v-icon> Login</v-btn>
      <v-btn
        v-on:click="logout"
        color="black"
        id="loginButton"
        class="white--text"
        style="margin:10px;"
        v-if="$root.isLoggedIn"
        to="/home"
      ><v-icon left>logout</v-icon> Logout</v-btn>
      <v-btn
        color="black"
        v-if="!$root.isLoggedIn"
        id="registerButton"
        class="white--text"
        style="margin:10px"
        to="/register"
      ><v-icon left>assignment</v-icon> Register</v-btn>
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
const userMenu = {
  icon: "mdi-chevron-up",
  "icon-alt": "mdi-chevron-down",
  text: "Recipes",
  model: false,
  hidden: false,
  children: [
    { text: "My Recipes", icon: "mdi-food-variant", to: "/myRecipes" },
    { text: "Favorites", icon: "mdi-heart", to: "/favorites" },
    { text: "Family Recipes", icon: "mdi-account-group", to: "/family" },
  ]
};

const menus = [];
menus["USER"] = userMenu;
const menu = [
  { icon: "mdi-home", text: "\t Home", to: "/home" },
  { text: "Search Recipes", icon: "mdi-magnify", to: "/search" },
  { text: "New Recipe", icon: "mdi-magnify", to: "/create" },
  userMenu,
  { icon: "mdi-cog", text: "Settings", to: "/settings" }
];
export default {

  mounted() {
    this.$root.baseURL = "http://localhost:3000";
    document.getElementById('logoutButton').style.display = 'none';
  },
  props: {
    source: String
  },

  data: () => ({
    drawer: null,
    registerButton: null,
    logoutButton: null,
    items: menu,
    notificationCount:0,
  }),
  methods: {
    logout: function() {
      this.$cookies.remove("session");
      this.$router.push("/home");
    }
  }
};
</script>