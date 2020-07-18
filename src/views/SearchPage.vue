<template>
  <div class="my-10">
    <SearchBar/>
    <!--<PreviewList :recipes="SearchBar.searchResults"/>-->
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue'
export default {
  name: 'SearchPage',
//   mounted(){
//     if(!(this.$root.userToken == "" || this.$root.userToken == null)){// logged in so send him to home page
// this.$router.push("/home");    }
//  },
data: ()=>({
}),
  components: {
    SearchBar,
  },
}
</script>
