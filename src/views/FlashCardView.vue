<template>
  <h1>Flashcard</h1>
  <FlashCard />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FlashCard from "@/components/flashcard/FlashCard.vue";

export default defineComponent({
  components: { FlashCard },
});
</script>
