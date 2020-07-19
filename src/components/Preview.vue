<template>
  <v-card class="mx-auto" max-width="400">
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
    <div class="click" v-on:click="openRecipe">
      <v-img class="white--text align-end" height="200px" :src="recipe.image"></v-img>
    </div>

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
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD////19fXs7Ozv7+8bGxvo6Oj4+PhHR0d0dHRoaGhvb2/MzMwlJSU0NDTh4eHa2to7OzsvLy+5ubmnp6fU1NQXFxehoaFdXV2CgoLBwcFOTk7Q0NBZWVlCQkKLi4uwsLCRkZEODg6YmJiFhYUhISEpKSkSEhJJdf94AAAHsklEQVR4nO2dC3bqIBBAwWiiVo1V47fVtD7b/e/wqamaGCB8ZiBwvAvocGsSYBiA0NAhrhuAzsvQf16G/vMy9B8TwyTpdJIErClIQTQMO9PR4jAYrvvvs/F49t5fv21Wo2ls0AgW8XS02rw9ggwHh8Vo2lH/Q4qG6XyzPxEmk2GeqcdnkuXDCTvIab+Zp2p/TMEwGf1jhy2xXkRq8WvEi8/GKIeRwh+UNezM3xoDF/SPiv/kEulxLxnlbS77wMoZZoNfychXdouuhl602KkE6W2mYIbzvkrkgoHqDzmVfUZK7LYghrl65Ct9le/O6F0vyHJubDj/0RQ8s5Z1HCk9nlUmTb+j2DA1CH1hKNNLpmuzIGtxEKHhwSz0hX9NfsnGPMhR03D0bR6bkG9x37WFiEHGgveBb/gFEvvMgN9zRUOoICtlw8jwDSxz4v2MW5CnpGDN+z9yDEdwoS8cmEEA3sAS35wnlW24AI19Zlcf5MSaXSAfdt/INAT4hj6z/HiKAfOJqcJ8GVmGGuMnCar/YfCn5Aqrb2IYGnbAXMr/YYSn5MpAxhBLkJCvewzYb0yZumLNEKyHYnD7pA4QY2yaDHHewRsHdMHyk8I0XKEGL8LjPaIFW5Ehxie8yooe0WNM+YYxevDzpwA/xKzDNQQfZThizTPEfkHssWAbAo+2nZKyDBNOLttL+izDcJ7RC6u6YUjP6IW0ZhjKd/TG8Nlw7rpF4EyfDAEzJi1hXzXEmZC6ZVQ2TAxy961lVzbMXbcGhaxkGNqHtGD4MAytL7wR3w1xJ/buON4ME9ctwWJ5Mwyxqyj4+DPUWKb3hE1haCN34YheYZi7bgciH1dDvCS3e44Xw87YdTMQ2V0Mp65bgUp0NsROc7slOxuGOqAp+DobhjhxevBGSbBDtoIZJZnrNiCTkNx1E5BJSdifUkK2JKxUd50FAazuaiVHwin7D4YN6bluAjKYtSXtIPS3kAT/FhIS0rovm/CWnOqE7vgbfG/RIyFnaS6MSZjLTg/eSfN+Rr9Z26ikc8qG4BdDuuVIwl14KlgQ/KJZt2xJwCtPV6LQs4lnv0DrMG7sKUHeG+Cawdkw7O5idTYMO+k9PRtGIc+fet3LKnfIuZrP6zo+2JbmFnJdx6cfrpuBSFZUDIX7Ii7/aqLCTQsP/gzDq2K/sb1VX7puCBrB15dugq8Rzu6GSZgpxUmpkj3MTv9YMkxdNwaFqLxnJsSs6bCyKyjEb81HdWfXzHV7wHna2UVz1w0CZ/tkSJWODfSACX02zF03CZh5zTAJ6028vYXlvdy560aBsmUY0pAqT5j78S0cbGKPjGkY0P6n8tEfZcNwdl7EHMNgljAqR/xVDCPXTYOhxz+BJ5C9ltWz755OwpI9bLrNfFKRYQhT4a7QMIB8xoKKDb1f9P58FqoZ+t4p1g6Grp8M6feqd17zYZzu6fPgbVjXYRj63O8zLjNhnUGbu26nNqxDp5nnCPu6UsM8cpppmPg5Gd6xXDinXfs5tGFfG8I5sdzHZeHn87TFhh6eMcg7WZ97c4BvazVvPBGuYdevGpQJ91ov/u0Pfg1Q+ddMCW7wyF23WgHBNSGiW1iwjoaHh39/R8M9M74US9XOYZc29GQ6vBY6iA07PnxQZ0KFphutPBi+9RrueGu6s6v9JQxNF7w13rvW9hEqZzSqYNjyc6TMb5aj7e4Wn5OjeoYtXpISXrimYNjaeYawp1cybOmCDSN1qG3YylIUdlpG05B22qfYb261iiGN2nZw3V72JmvpG4/jdhW+8ef02obtGqLO5O8iV7i1Om3PISHvCpetq9w8nrblQZ2oXLGudLd6Sx7UsdId8mq3x7ci//ajJKho2IYHdaJ4q7mioftfcaZ6bbuqoWtFtXdQy5CmLrNTSl9RXUOautsHJj1UMzOksatz7HQEtQxp5GZ0s29uGZQh7bhY6K/Vc2Ea0o79fL84dw9uSBPbitw1XixDmtjN3TAua8Y2tJuBY124jW9o8eqPL4NWmhhaW0GVSfziGFrKhovWsLENraxp1ItibRpaWJlqXl3CNUTfhCKoI7FkiLyEOm1uALoh5kL4qVZ578QQb9qvmpJhAmGINWHc6UwHa4AY4kw1tMfaVWAMMQapUgu8EkAZgtf3f0E1DMwQeARnNlIrA2cIurFv2xxOFkBDwD1hxgOZEpCGYMObrDmUPKCGMMObX4CBTAlYQ4gVRq20rwBgQxqblqWsgQXBDWnXbIOmfk6NB7ihWYLKIKfGA8HQoO+XKKZUBsNQu+8H7OcfoBjSXEsQtBu8g2Ooc17RqakkXRMkQ5otFQX7EPN5FliGNFZbYtRdO2sGzVBt/Q2+G7yDZ6iyrAE3G6yDaSjdaxjm7cWgGkomxFG6wTu4hlK9BuR0lwGyIc2aSv165nl7MdiGNBbX3vRgp7sM0A3FJfDA83kW+IainD/EyksTFgxpzCv1G1sQtGLIq4Pr8Y8JAMSKIY1Y4/ClFUFLhqxNRT92BG0Z1hVtCVozpN3qg9q0xxwOa4bVz42dj8wVe4a0+3hQlbcUGGDRkHZnDgStGtJuMbo52RS0a0i7l9HNj1VBy4aX/cQz9U0hRlg2pN2d3V/QvqF9Xob+8zL0n5eh/7wM/ec/GWF3IPzrvVQAAAAASUVORK5CYII="
          />
          <v-img
            v-else
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
    console.log(this.$props.recipe);
    return {
        favorited: this.$props.recipe.favorite,
      };
  },
  methods: {
    openRecipe() {
      this.$router.push(`/${this.recipe.id}`)
    },
    async favorite() {
      try {
        let response = null;
        if (this.favorited) {
          response = await axios.post("api/user/unFavorite", {
            recipeId: this.$props.recipe.id
          });
          if (response.status == 200) {
            this.favorited = false;
          }
        }
        else {
          response = await axios.post("api/user/favorite", {
            recipeId: this.$props.recipe.id
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
.click:hover {
  cursor: pointer;
}
.like {
  display: inline-flex;
}
.likeImg {
  margin-top: -5px;
}
</style>
