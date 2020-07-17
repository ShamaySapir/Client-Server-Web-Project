<template>
  <v-app id="morbis">
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <template v-for="item in items">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon
            :hidden="item.hidden"
            :aria-pressed="false"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(child, i) in item.children" :key="i" link :to="child.to">
              <v-list-item-content>
                <v-list-item-title :link="child.link">{{ child.text }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.text" :hidden="item.hidden" link :to="item.to">
            <v-icon>{{ item.icon }}</v-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title style="width: 150px" class="ml-0 pl-4">
        <!-- <v-img :src="require('../src/assets/morbis-logo.svg')" contain height="50px" width="50px"></v-img> -->
        <span class="hidden-sm-and-down">ReciPyjamot</span>
      </v-toolbar-title>
     <!-- <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      />
      <v-spacer />
      -->
      <v-btn color="black" class="white--text" style="margin:10px" to="/home">Home</v-btn>
      <v-btn color="black" class="white--text" style="margin:10px" to="/about">About</v-btn>
      <v-spacer/>
      <v-btn color="black" id="loginButton" class="white--text" style="margin:10px;" to="/login">Login</v-btn>
      <v-btn color="black" id="registerButton" class="white--text" style="margin:10px" to="/register">Register</v-btn>
      <!--
      <v-btn color="black" id="logoutButton" class="white--text" style="margin:10px;" @click="Logout">Logout</v-btn>
      <v-btn color="black" id="all_user_logoutButton" class="white--text" style="margin:10px;" @click="ForceLogout">All-User Logout</v-btn>
      -->
      <v-btn icon to="/settings">
        <v-badge
        :content="notificationCount"
        :value="notificationCount"
        color="red"
        overlap
        
      >
        <v-icon>apps</v-icon>
      </v-badge>
      </v-btn>
      <!--
      <v-btn to="/notificationPage" icon>
      <v-badge
        :content="notificationCount"
        :value="notificationCount"
        color="red"
        overlap
      >
        <v-icon>mdi-bell</v-icon>
      </v-badge>
      </v-btn>
      -->
      <v-btn icon large>
        <v-avatar size="32px" item>
          <v-img src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Morbis" />
        </v-avatar>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view />
      <!-- content here -->
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
    // this.$root.baseURL = location.origin;
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