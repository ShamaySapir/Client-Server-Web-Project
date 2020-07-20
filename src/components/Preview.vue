<template>
  <v-card class="mx-auto" max-width="400">
    <v-list-item>
      <v-list-item-content>
        <div>
          <v-list-item-title class="headline">{{
            recipe.title
          }}</v-list-item-title>
          <v-img
            v-if="recipe.viewed"
            height="30px"
            width="30px"
            src="https://pngimage.net/wp-content/uploads/2018/06/sight-png-6.png"
          />
        </div>
      </v-list-item-content>
    </v-list-item>
    <div class="click" v-on:click="openRecipe">
      <v-img
        class="white--text align-end"
        height="200px"
        :src="recipe.image"
      ></v-img>
    </div>

    <v-card-subtitle class="like">
      {{ recipe.likes }}
      <v-img
        class="likeImg"
        height="30px"
        width="30px"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRffPW6bFotdy6auFDV2E9TWp6pn8N-1AE86w&usqp=CAU"
      />
      <v-img
        v-if="recipe.vegan"
        class="likeImg"
        height="30px"
        width="30px"
        src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2016/05/13_Vegetarian.jpg"
      />
      <v-img
        v-if="recipe.glutenFree"
        class="likeImg"
        height="30px"
        width="30px"
        src="https://www.newhope.com/sites/newhope360.com/files/styles/article_featured_retina/public/gluten-free-trends.jpg?itok=qUoz8a1A"
      />
    </v-card-subtitle>

    <v-card-text class="text">
      <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
    </v-card-text>

    <v-card-actions>
      <v-btn v-on:click="favorite" icon>
        <v-icon v-if="favorited" left>favorite</v-icon>
        <v-icon v-else left>favorite_border</v-icon>
      </v-btn>

      <v-btn color="orange" text v-on:click="openRecipe">Watch Recipe</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import axios from "axios";

export default {
  name: "preview",
  props: ["recipe"],
  data: function () {
    return {
      favorited: this.$props.recipe.favorite,
    };
  },
  methods: {
    openRecipe() {
      this.$router.push(`/${this.recipe.id}`);
    },
    async favorite() {
      try {
        let response = null;
        if (this.favorited) {
          response = await axios.post("api/user/unFavorite", {
            recipeId: this.$props.recipe.id,
          });
          if (response.status == 200) {
            this.favorited = false;
          }
        } else {
          response = await axios.post("api/user/favorite", {
            recipeId: this.$props.recipe.id,
          });
          if (response.status == 200) {
            this.favorited = true;
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.click:hover {
  cursor: pointer;
}
.like {
  display: inline-flex;
}
.likeImg {
  margin-top: -5px;
}
.mx-auto {
  margin: 10px;
}

.text {
  text-align: start;
}
</style>
