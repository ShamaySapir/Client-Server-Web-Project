<template>
    <div class="preview">
      <Preview v-for="recipe in recipes" :key="recipe" :recipe="recipe"></Preview>
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
