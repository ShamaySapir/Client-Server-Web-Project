<template>
  <div class="my-10">
  <h1>This is the search page</h1>
    <SearchBar/>
    <PreviewList/>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue'
import PreviewList from '@/components/PreviewList.vue'
export default {
  name: 'SearchPage',
//   mounted(){
//     if(!(this.$root.userToken == "" || this.$root.userToken == null)){// logged in so send him to home page
// this.$router.push("/home");    }
//  },
  components: {
    SearchBar,
    PreviewList
  },
}
</script>
