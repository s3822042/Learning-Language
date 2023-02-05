<template>
  <div class="box" @click="redirectToUrl(url)">
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["title", "message", "url"],
  methods: {
    redirectToUrl: function (url: string) {
      this.$router.push(url);
    },
  },
});
</script>
<style scoped>
.box {
  border: 1px solid #ddd;
  padding: 10px;
}
</style>
