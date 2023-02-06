<template>
  <h1>Vocabulary Checker</h1>
  <VocabularyChecker />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import VocabularyChecker from "@/components/vocabulary/VocabularyChecker.vue";

export default defineComponent({
  components: { VocabularyChecker },
});
</script>
