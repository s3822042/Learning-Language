<template>
  <div>
    <select v-model="selectedLanguage">
      <option v-for="(languageName, code) in languageNames" :value="code">
        {{ languageName }}
      </option>
    </select>
    <input type="text" v-model="searchTerm" />
    <button @click="searchVocabulary">Search</button>
    <h3>Definitions for {{ vocabularyName }}</h3>
    <ul v-if="wordDetails.n_results > 0">
      <li v-for="result in wordDetails.results">
        <p>Headword: {{ result[0].headword.text }}</p>
        <p>Part of Speech: {{ result[0].headword.pos }}</p>
        <ul>
          <li v-for="sense in result[0].senses">
            <p>Definition: {{ sense.definition }}</p>
          </li>
        </ul>
      </li>
    </ul>
    <p v-else>No results found</p>
  </div>
</template>
<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      selectedLanguage: "en",
      searchTerm: "",
      hasError: false,
      languageNames: {},
      error: "",
      vocabularyName: "",
      wordDetails: {
        n_results: 0,
        results: [
          {
            headword: {
              text: "",
              pos: "",
            },
          },
          {
            senses: [
              {
                definition: "",
              },
            ],
          },
        ],
      },
    };
  },

  created() {
    this.fetchAllLanguages();
  },
  methods: {
    async fetchAllLanguages() {
      const response = await axios.get(
        `${import.meta.env.VITE_DICTIONARY_URL}/languages`,
        {
          headers: {
            "X-RapidAPI-Host": `${import.meta.env.VITE_DICTIONARY_HOST}`,
            "X-RapidAPI-Key": `${import.meta.env.VITE_VOCABULARY_KEY}`,
          },
        }
      );
      this.languageNames = response.data.language_names;
    },
    async searchVocabulary() {
      await axios
        .get(`${import.meta.env.VITE_DICTIONARY_URL}/search`, {
          params: {
            text: this.searchTerm,
            language: this.selectedLanguage,
          },
          headers: {
            "X-RapidAPI-Host": `${import.meta.env.VITE_DICTIONARY_HOST}`,
            "X-RapidAPI-Key": `${import.meta.env.VITE_VOCABULARY_KEY}`,
          },
        })
        .then((response) => {
          this.wordDetails.n_results = response.data.n_results;
          this.wordDetails = response.data;
          this.hasError = false;
        })
        .catch((error) => {
          this.hasError = true;
          this.error = error;
        });
    },
  },
});
</script>

<style scoped>
h3 {
  margin-top: 20px;
}

ul {
  list-style: none;
  padding-left: 0;
}

li > ul {
  margin-left: 20px;
}
</style>
