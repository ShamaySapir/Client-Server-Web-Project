<template>
  <div align="center">
    {{title}}
    <div class="preview">
      <Preview v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"></Preview>
    </div>
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
