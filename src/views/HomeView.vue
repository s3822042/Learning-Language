<script>
import { defineComponent } from "vue";
import BaseBox from "@/components/box/BaseBox.vue";

export default defineComponent({
  components: { BaseBox },
});
</script>

<template>
  <main>
    <h1>Language Learning App</h1>
    <label>You could use one of below feature</label>
    <div class="grid-container">
      <BaseBox
        title="Vocabulary Checker"
        message="You can check word matches between languages"
        url="vocabulary-checker"
      ></BaseBox>
      <BaseBox
        title="Search Vocabulary"
        message="You can search vocabulary across multiple language"
        url="search-vocabulary"
      ></BaseBox>
      <BaseBox
        title="Progress"
        message="You can view your progress (available on login)"
      ></BaseBox>
    </div>
  </main>
</template>
<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
</style>
