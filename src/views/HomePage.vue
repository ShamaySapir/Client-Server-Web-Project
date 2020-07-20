<template>
  <v-container fluid>
    <h1>Welcome {{ userName }}</h1>
    <v-layout row>
      <v-flex xs6>
        <previewList title="Explore these recipes" :recipes="randomRecipes" />
        <div style="text-align: center;">
          <v-btn
            color="black"
            class="white--text"
            style="margin: 10px;"
            v-on:click="getRandomRecipes"
            >More</v-btn
          >
        </div>
      </v-flex>
      <v-flex xs6 order-lg2>
        <LoginForm v-if="!isLoggedIn" :key="isLoggedIn" />
        <previewList
          title="Last watched recipes"
          :recipes="lastWatchedRecipes"
          v-if="isLoggedIn"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PreviewList from "../components/PreviewList.vue";
import LoginForm from "../components/LoginForm.vue";
import store from "./store";
import axios from "axios";
export default {
  name: "HomePage",
  async mounted() {
    //     this.getRandomRecipes();
    //     if(store.isLoggedIn)
    //      this.getLatestRecipes();
  },
  methods: {
    async getRandomRecipes() {
      await axios
        .get("api/recipes")
        .then((response) => {
          if (response.status == 200) {
            this.randomRecipes = response.data;
          } else {
            this.randomRecipes = [
              {
                id: 223509,
                image:
                  "https://spoonacular.com/recipeImages/223509-556x370.jpg",
                title: "Sweet potato & goat's cheese ravioli",
                readyInMinutes: 95,
                likes: 252,
                vegan: true,
                gluten_free: true,
                viewed: false,
                favorite: false,
              },
            ];
          }
        })
        .catch(
          (err) =>
            (this.randomRecipes = [
              {
                id: 223509,
                image:
                  "https://spoonacular.com/recipeImages/223509-556x370.jpg",
                title: "Sweet potato & goat's cheese ravioli",
                readyInMinutes: 95,
                likes: 252,
                vegan: true,
                gluten_free: true,
                viewed: false,
                favorite: false,
              },
            ])
        );
    },
    async getLatestRecipes() {
      await axios
        .get("api/user/lastWatched")
        .then((response) => {
          if (response.status == 200) {
            this.lastWatchedRecipes = response.data;
          } else {
            this.lastWatchedRecipes = {
              id: 223509,
              image: "https://spoonacular.com/recipeImages/223509-556x370.jpg",
              title: "Sweet potato & goat's cheese ravioli",
              readyInMinutes: 95,
              likes: 252,
              vegan: true,
              gluten_free: true,
              viewed: false,
              favorite: false,
            };
          }
        })
        .catch(
          (err) =>
            (this.lastWatchedRecipes = [
              {
                id: 223509,
                image:
                  "https://spoonacular.com/recipeImages/223509-556x370.jpg",
                title: "Sweet potato & goat's cheese ravioli",
                readyInMinutes: 95,
                likes: 252,
                vegan: true,
                gluten_free: true,
                viewed: false,
                favorite: false,
              },
            ])
        );
    },
  },
  data: function () {
    return {
      randomRecipes: [
        {
          id: 223509,
          image: "https://spoonacular.com/recipeImages/223509-556x370.jpg",
          title: "Sweet potato & goat's cheese ravioli",
          readyInMinutes: 95,
          likes: 252,
          vegan: true,
          gluten_free: true,
          viewed: {},
          favorite: {},
        },
        {
          id: 223509,
          image: "https://spoonacular.com/recipeImages/223509-556x370.jpg",
          title: "Sweet potato & goat's cheese ravioli",
          readyInMinutes: 95,
          likes: 252,
          vegan: true,
          gluten_free: true,
          viewed: {},
          favorite: {},
        },
        {
          id: 223509,
          image: "https://spoonacular.com/recipeImages/223509-556x370.jpg",
          title: "Sweet potato & goat's cheese ravioli",
          readyInMinutes: 95,
          likes: 252,
          vegan: true,
          gluten_free: true,
          viewed: {},
          favorite: {},
        },
      ],
      lastWatchedRecipes: [
        {
          id: 223509,
          image: "https://spoonacular.com/recipeImages/223509-556x370.jpg",
          title: "Sweet potato & goat's cheese ravioli",
          readyInMinutes: 95,
          likes: 252,
          vegan: true,
          gluten_free: true,
          viewed: {},
          favorite: {},
        },
        {
          id: 223509,
          image: "https://spoonacular.com/recipeImages/223509-556x370.jpg",
          title: "Sweet potato & goat's cheese ravioli",
          readyInMinutes: 95,
          likes: 252,
          vegan: true,
          gluten_free: true,
          viewed: {},
          favorite: {},
        },
        {
          id: 223509,
          image: "https://spoonacular.com/recipeImages/223509-556x370.jpg",
          title: "Sweet potato & goat's cheese ravioli",
          readyInMinutes: 95,
          likes: 252,
          vegan: true,
          gluten_free: true,
          viewed: {},
          favorite: {},
        },
      ],
    };
  },
  computed: {
    isLoggedIn() {
      return store.isLoggedIn;
    },
    userName() {
      return store.username;
    },
  },
  components: {
    PreviewList,
    LoginForm,
  },
};
</script>
