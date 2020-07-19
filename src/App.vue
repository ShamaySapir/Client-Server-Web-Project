<template>
  <v-app id="morbis">
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="primary">
      <v-toolbar-title style="width: 150px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">ReciPyjamot</span>
      </v-toolbar-title>
      <v-btn color="black" class="white--text" style="margin:10px" to="/home">Home</v-btn>
      <v-btn color="black" class="white--text" style="margin:10px" to="/about">About</v-btn>
      <v-btn color="black" class="white--text" style="margin:10px" to="/search">Search</v-btn>

      <v-spacer />
      <v-btn
        color="black"
        id="loginButton"
        class="white--text"
        style="margin:10px;"
        to="/favorites"
        v-if="$root.isLoggedIn"
      >Favorites</v-btn>
      <v-btn
        color="black"
        id="loginButton"
        class="white--text"
        style="margin:10px;"
        to="/myRecipes"
        v-if="$root.isLoggedIn"
      >My Recipes</v-btn>
      <v-btn
        color="black"
        id="loginButton"
        class="white--text"
        style="margin:10px;"
        to="/family"
        v-if="$root.isLoggedIn"
      >Family Recipes</v-btn>
      <v-spacer />

      <v-btn
        color="black"
        id="loginButton"
        class="white--text"
        style="margin:10px;"
        to="/login"
        v-if="!$root.isLoggedIn"
      >Login</v-btn>
      <v-btn
        v-on:click="logout"
        color="black"
        id="loginButton"
        class="white--text"
        style="margin:10px;"
        v-if="$root.isLoggedIn"
      >Logout</v-btn>
      <v-btn
        color="black"
        v-if="!$root.isLoggedIn"
        id="registerButton"
        class="white--text"
        style="margin:10px"
        to="/register"
      >Register</v-btn>
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
    this.$root.$on("loginChangeMenu", (roles) => {
      this.loginChangeMenu(roles);
    });
    this.$root.$on("SetNotification", (numberOfNotifications) => {
      this.notificationCount = numberOfNotifications;
    })
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
    },
    remove: function(arr) {
      let what;
        // eslint-disable-next-line prefer-rest-params
        const a = arguments;
        let L = a.length;
        let ax;
      while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax = arr.indexOf(what)) !== -1) {
          arr.splice(ax, 1);
        }
      }
    },
    count()
    {
      return this.$root.notificationCount.value
    },
    loginChangeMenu: function(roles) {
      document.getElementById('loginButton').style.display = 'none';
      document.getElementById('registerButton').style.display = 'none';
      document.getElementById('logoutButton').style.display = 'block';
      console.log(roles);
    },
    Logout() {
      fetch(this.$root.baseURL + "/logout/" + this.$root.userToken, {
        method: "GET",
        headers: {
          accept: "*/*"
        }
      })
        .then(response => {
          if (response.ok) {
            this.$root.userToken = "";
            this.$root.roles = [];
            this.$root.memberID = -1;
            alert("logged out");
            document.getElementById('loginButton').style.display = 'block';
            document.getElementById('registerButton').style.display = 'block';
            document.getElementById('logoutButton').style.display = 'none';
            window.location.href = location.origin
            // this.$router.push("/welcome");
          } else {
            alert(
              "There was an error while logging out: " +
                response.status +
                " : " +
                response.statusText
            );
          }
        })
        .catch(err => console.error(err));
    },
    ForceLogout() {
      fetch(this.$root.baseURL + "/api/logout/42", {
        method: "GET",
        headers: {
          accept: "*/*"
        }
      })
        .then(response => {
          if (response.ok) {
            this.$root.userToken = "";
            this.$root.roles = [];
            this.$root.memberID = -1;
            alert("forcing all-user logged out");
            document.getElementById('loginButton').style.display = 'block';
            document.getElementById('registerButton').style.display = 'block';
            document.getElementById('logoutButton').style.display = 'none';
            window.location.href = 'welcome'
            // this.$router.push("/welcome");
          } else {
            alert(
              "There was an error while all-user logging out: " +
                response.status +
                " : " +
                response.statusText
            );
          }
        })
        .catch(err => console.error(err));
    }
  }
};
</script>