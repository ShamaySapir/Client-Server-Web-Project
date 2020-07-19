/* eslint-disable no-undef */
import Vue from "vue";
import Router from "vue-router";
import HomePage from "../views/HomePage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import LoginPage from "../views/LoginPage.vue";
import welcome from "../views/WelcomePage.vue";
import AboutPage from "../views/About.vue";
import CreateRecipePage from "../views/CreateRecipePage.vue";
import SearchPage from "../views/SearchPage.vue";
import UserRecipesPage from "../views/UserRecipesPage.vue";
import FavoriteRecipesPage from "../views/FavoriteRecipesPage.vue";
import FamilyRecipesPage from "../views/FamilyRecipesPage.vue";
import SettingsPage from "../views/SettingsPage.vue";
import RecipePage from "../views/RecipePage.vue";

Vue.use(Router);
const protectedRoutes = [
  "CreateRecipePage",
  "FamilyRecipesPage",
  "userRecipesPage",
  "RecipePage",
  "FavoriteRecipesPage",
];
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "Home Page",
      component: HomePage,
    },
    {
      path: "/about",
      name: "About Page",
      component: AboutPage,
    },
    {
      path: "/register",
      name: "Register Page",
      component: RegisterPage,
    },
    {
      path: "/login",
      name: "Login Page",
      component: LoginPage,
    },
    {
      // set path for new team page
      path: "/welcome",
      name: "Welcome Page",
      component: welcome,
    },
    {
      // set path for create a new recipe
      path: "/create",
      name: "CreateRecipePage",
      component: CreateRecipePage,
    },
    {
      // set path for create a new recipe
      path: "/search",
      name: "SearchPage",
      component: SearchPage,
    },
    {
      // set path for create a new recipe
      path: "/family",
      name: "FamilyRecipesPage",
      component: FamilyRecipesPage,
    },
    {
      // set path for create a new recipe
      path: "/favorites",
      name: "FavoriteRecipesPage",
      component: FavoriteRecipesPage,
    },
    {
      // set path for create a new recipe
      path: "/myRecipes",
      name: "userRecipesPage",
      component: UserRecipesPage,
    },
    {
      // set path for create a new recipe
      path: "/settings",
      name: "settings",
      component: SettingsPage,
    },
    {
      // set path for a recipe
      path: "/:id",
      name: "RecipePage",
      component: RecipePage,
    },
    {
      // set path for create a new recipe
      path: "/",
      name: "default redirect",
      redirect: "/home",
    },
  ],
});

router.beforeEach((to, _, next) => {
  const sessionCookie = router.app.$cookies.get("session");
  if (!sessionCookie) {
    router.app.isLoggedIn = false;
  }
  if (sessionCookie && !router.app.isLoggedIn) {
    router.app.isLoggedIn = true;
  }
  if (!protectedRoutes.includes(to.name)) {
    next();
  } else {
    if (!sessionCookie) {
      next({ name: "Login Page" });
    }
    next();
  }
});
export default router;
