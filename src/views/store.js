import Vue from "vue";
const state = Vue.observable({ isLoggedIn: false, username: "Guest" });
export const setLoggedIn = () => (state.isLoggedIn = true);
export const setLoggedOut = () => (state.isLoggedIn = false);
export const setUserName = (name) => (state.username = name);
export default state;
