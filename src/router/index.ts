import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import VocabularyCheckerView from "@/views/VocabularyCheckerView.vue";
import SearchVocabularyView from "@/views/SearchVocabularyView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/vocabulary-checker",
      name: "checker",
      component: VocabularyCheckerView,
    },
    {
      path: "/search-vocabulary",
      name: "search",
      component: SearchVocabularyView,
    },
  ],
});

export default router;
