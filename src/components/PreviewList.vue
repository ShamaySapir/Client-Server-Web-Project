<template>
  <div>
    <div align="center">
      <h1>This is a preview list</h1>
    </div>
    <div class="preview">
      <Preview v-for="number in numbers" :key="number"></Preview>
    </div>
  </div>
</template>
<script>
import Preview from "@/components/Preview.vue";
export default {
  name: "PreviewList",
  data: function () {
    return {
      numbers: [1, 2, 3, 4, 5, 6],
    };
  },
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
