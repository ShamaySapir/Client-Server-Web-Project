<template>
  <div class="my-10">
    <SearchBar :searchResults="lastSearchResults" />
    <!--<PreviewList :recipes="SearchBar.searchResults"/>-->
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from "@/components/SearchBar.vue";
import store from "./store";
import axios from "axios";
export default {
  name: "SearchPage",
  mounted() {
    if (store.isLoggedIn)
      //  if(store.isLoggedIn==-7)
      this.lastSearch();
    //     if(!(this.$root.userToken == "" || this.$root.userToken == null)){// logged in so send him to home page
    // this.$router.push("/home");    }
  },
  data: () => ({
    lastSearchParams: {
      query: "",
      number: "5",
      cuisine: "",
      diet: "",
      intolerance: "",
    },
    lastSearchResults: [],
  }),
  components: {
    SearchBar,
  },
  methods: {
    async lastSearch() {
      await axios
        .get("api/user/search")
        .then((res) => {
          this.lastSearchParams = res.data;
        })
        .then(async () => {
          const params = this.lastSearchParams;
          if (params && params.query) {
            await axios.post("api/recipes/search", params).then((results) => {
              // results.data.forEach(recipe => this.lastSearchResults.push(recipe))
              if (results.status == 200) {
                this.lastSearchResults = results.data;
              } else {
                this.lastSearchResults = [];
              }
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.lastSearchResults = [];
        });
    },
  },
};
</script>
