import Vue from "vue";
const state = Vue.observable({ isLoggedIn: false });
export const setLoggedIn = () => (state.isLoggedIn = true);
export const setLoggedOut = () => (state.isLoggedIn = false);
export default state;
