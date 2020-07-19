<template>
  <div class="preview">
    <v-flex flex-column>
      <h1 align="center">{{recipes.length ==0 ? "" :title}}</h1>
      <Preview v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"></Preview>
    </v-flex>
  </div>
</template>
<script>
import Preview from "@/components/Preview.vue";
export default {
  name: "PreviewList",
  props: ["recipes","title"],
  components: {
    Preview,
  },
};
</script>

<style scoped>
.preview {
  display: flex;
  flex-wrap: wrap;
}
</style>
