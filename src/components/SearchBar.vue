<template>
  <div>
    <v-card raised class="mx-auto my-auto" max-width="800">
      <div align="center" class="primary mb-10 py-3 white--text">
        <h1 class="primary">
          <v-icon large dark left>search</v-icon>Recipe Search
        </h1>
      </div>

      <div align="center">
        <v-form ref="form" v-model="valid">
          <v-flex xs12 sm15 d-flex>
            <v-text-field
              class="mx-5"
              outlined
              v-model="query"
              label="Enter your search here"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm10 d-flex>
            <v-select
              v-model="cuisine"
              label="Cusine"
              :items="cusines"
              outlined
            ></v-select
            ><v-spacer></v-spacer>
            <v-select
              v-model="diet"
              label="Diet"
              :items="Diets"
              outlined
            ></v-select
            ><v-spacer></v-spacer>
            <v-select
              v-model="intolerance"
              label="Intolerance"
              :items="Intolerances"
              outlined
            ></v-select>
          </v-flex>
          <v-radio-group v-model="number">
            <v-radio
              v-for="n in 3"
              :key="`${n * 5}`"
              :label="`${n * 5} Results`"
              :value="`${n * 5}`"
            ></v-radio>
          </v-radio-group>
          <div v-if="searchResults.length != 0">
                <v-btn v-on:click="popluar">Most popular first</v-btn>
      <v-btn v-on:click="time">Least preparation time first</v-btn>
          </div>
          <v-btn color="success" block @click="search">
            Search
            <v-icon dark right>search</v-icon>
          </v-btn>
        </v-form>
      </div>
    </v-card>
    <!-- Should add v-if="searchResults.length != 0" To the div -->
    <PreviewList
      :title="searchResults.length != 0 ? previewTitle : ''"
      :recipes="searchResults"
    />
  </div>
</template>
<script>
import axios from "axios";
import PreviewList from "@/components/PreviewList.vue";
export default {
  name: "SearchBar",
  components: {
    PreviewList,
  },
  props:{
    searchResults:[],
  },
  methods:{
    async search(){
      await axios.post("api/recipes/search",{
        query:this.query,
        number:this.number,
        cuisine:this.cuisine,
        diet:this.diet,
        intolerance:this.intolerance,
      }).then(res => this.searchResults = res.data)
      console.log(this.searchResults)
    },
    time: function () {
      // eslint-disable-next-line require-jsdoc
      function compare(a, b) {
        if (a.readyInMinutes < b.readyInMinutes) return 1;
        if (a.readyInMinutes > b.readyInMinutes) return -1;
        return 0;
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.searchResults.sort(compare);
    },
    popluar: function () {
      // eslint-disable-next-line require-jsdoc
      function compare(a, b) {
        if (a.likes < b.likes) return -1;
        if (a.likes > b.likes) return 1;
        return 0;
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.searchResults.sort(compare);
    },
  },
  computed: {
    
  },
  data: () => ({
    query: "",
    number: 5,
    cuisine: "",
    diet: "",
    intolerance: "",
    previewTitle: "Results:",
    cusines:[
      {value: "", text: ""},
      {value: 'African', text: 'African'},
      {value: 'American',text: 'American'},
      {value: 'British',text: 'British'},
      {value: 'Cajun',text: 'Cajun'},
      {value: 'Caribbean',text: 'Caribbean'},
      {value: 'Chinese',text: 'Chinese'},
      {value: 'Eastern European',text: 'Eastern European'},
      {value: 'European',text: 'European'},
      {value: 'French', text: 'French'},
      {value: 'German',text: 'German'},
      {value: 'Greek',text: 'Greek'},
      {value: 'Indian',text: 'Indian'},
      {value: 'Irish',text: 'Irish'},
      {value: 'Italian',text: 'Italian'},
      {value: 'Japanese',text: 'Japanese'},
      {value: 'Jewish',text: 'Jewish'},
      {value: 'Korean',text: 'Korean'},
      {value: 'Latin American',text: 'Latin American'},
      {value: 'Mediterranean',text: 'Mediterranean'},
      {value: 'Mexican',text: 'Mexican'},
      {value: 'Middle Eastern',text: 'Middle Eastern'},
      {value: 'Nordic',text: 'Nordic'},
      {value: 'Southern',text: 'Southern'},
      {value: 'Spanish',text: 'Spanish'},
      {value: 'Thai', text: 'Thai'},
      {value: 'Vietnamese',text: 'Vietnamese'},
    ],
    Intolerances: [
      { value: "", text: "" },
      { value: "Dairy", text: "Dairy" },
      { value: "Egg", text: "Egg" },
      { value: "Gluten", text: "Gluten" },
      { value: "Grain", text: "Grain" },
      { value: "Peanut", text: "Peanut" },
      { value: "Seafood", text: "Seafood" },
      { value: "Sesame", text: "Sesame" },
      { value: "Shellfish", text: "Shellfish" },
      { value: "Soy", text: "Soy" },
      { value: "Sulfite", text: "Sulfite" },
      { value: "Tree Nut", text: "Tree Nut" },
      { value: "Wheat", text: "Wheat" },
    ],
  }),
};
</script>

<style scoped></style>
