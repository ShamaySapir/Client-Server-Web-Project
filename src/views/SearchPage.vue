<template>
  <div class="my-10">
    <SearchBar 
      :searchResults="lastSearchResults"
      :query="lastSearchParams.query"
      :number="lastSearchParams.number"
      :cuisine="lastSearchParams.cuisine"
      :diet="lastSearchParams.diet"
      :intolerance="lastSearchParams.intolerance"
    />
    <!--<PreviewList :recipes="SearchBar.searchResults"/>-->
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue'
import store from "./store";
import axios from 'axios'
export default {
  name: 'SearchPage',
   mounted(){
     if(store.isLoggedIn)
       this.lastSearch()
//     if(!(this.$root.userToken == "" || this.$root.userToken == null)){// logged in so send him to home page
// this.$router.push("/home");    }
  },
data: ()=>({
  lastSearchParams:{
    query: "",
    number: 5,
    cuisine: "",
    diet: "",
    intolerance: "",
  },
  lastSearchResults:[]
}),
  components: {
    SearchBar,
  },
  methods:{
    async lastSearch(){
      await axios.get("api/user/search")
      .then(res => {this.lastSearchParams=res.data;})
      .then(async ()=> {
        const params = this.lastSearchParams
        await axios.post("api/recipes/search",params)
          .then(results => 
            this.lastSearchResults = results.data)
        }).catch(error => {
        console.log(error)
        this.lastSearchResults=[]})
    },
    
  }
}
</script>
