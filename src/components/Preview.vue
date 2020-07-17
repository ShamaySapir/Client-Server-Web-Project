<template>
  <v-card v-on:click="openRecipe" class="mx-auto" max-width="400">
    <v-list-item>
      <v-list-item-content>
        <div>
          <v-list-item-title class="headline">{{recipe.title}}</v-list-item-title>
          <v-img
            v-if="recipe.viewed"
            height="30px"
            width="30px"
            src="https://pngimage.net/wp-content/uploads/2018/06/sight-png-6.png"
          />
        </div>
      </v-list-item-content>
    </v-list-item>
    <v-img class="white--text align-end" height="200px" :src="recipe.image"></v-img>

    <v-card-subtitle class="like">
      {{recipe.likes}}
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

    <v-card-text class="text--primary">
      <div>Ready in {{recipe.readyInMinutes}} minutes</div>
    </v-card-text>

    <v-card-actions>
      <v-btn v-on:click="favorite" text>
        <div>
          <v-img
            v-if="favorited"
            height="15px"
            width="17px"
            src="data:image/png;base64,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"
          />
        </div>
      </v-btn>

      <v-btn color="orange" text>Watch Recipe</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import axios from "axios";

export default {
  name: "preview",
  props: ["recipe"],
  data: function() {
    return {
        favorited: this.$props.recipe.favorite,
      };
  },
  methods: {
    openRecipe() {
      this.$router.push("/Recipe")
    },
    async favorite() {
      try {
        let response = null;
        if (this.$props.recipe.favorite) {
          response = await axios.post("api/user/unFavorite", {
            recipeId: this.$props.recipe.id
          });
          if (response.status == 200) {
            this.favorited = false;
            console.log(this.favorited);
          }
        }
        else {
          response = await axios.post("api/user/favorite", {
            recipeId: this.$props.recipe.recipeId
          })
          if (response.status == 200) {
            this.favorited = true;
          }
        }
      } catch (error) {
          console.log(error);
        }
      }
  }
};
</script>

<style scoped>
.title {
  background-color: mediumblue;
  opacity: 0.5;
}
.like {
  display: inline-flex;
}
.likeImg {
  margin-top: -5px;
}
</style>
