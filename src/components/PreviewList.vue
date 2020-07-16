<template>
  <div>
    <div align="center">
      <h1>This is a preview list</h1>
    </div>
    <div class="preview">
      <Preview v-for="recipe in recipes" :key="recipe" :recipe="recipe"></Preview>
    </div>
  </div>
</template>
<script>
import Preview from "@/components/Preview.vue";
export default {
  name: "PreviewList",
  props: ["recipes"],
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
