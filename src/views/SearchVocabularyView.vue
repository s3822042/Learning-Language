<template>
  <h1>Search vocabulary</h1>
  <SearchVocabulary />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SearchVocabulary from "@/components/vocabulary/SearchVocabulary.vue";

export default defineComponent({
  components: { SearchVocabulary },
});
</script>
