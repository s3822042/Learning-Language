<template>
  <h3>Currently supported English only</h3>
  <div>
    <select v-model="selectedLanguage">
      <option value="en">English</option>
      <option value="fr">French</option>
      <option value="de">German</option>
    </select>
    <input type="text" v-model="searchTerm" />
    <button @click="searchVocabulary">Search</button>
    <div v-if="!hasError && results.length">
      <h3>Definitions:</h3>
      <ul v-for="result in results">
        <li v-for="meaning in result.meanings">
          <strong>{{ meaning.partOfSpeech }}:</strong>
          <ul>
            <li v-for="definition in meaning.definitions">
              {{ definition.definition }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div v-else-if="hasError">{{ error }}</div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      selectedLanguage: "en",
      searchTerm: "",
      hasError: false,
      error: "",
      results: [
        {
          meanings: [],
          partOfSpeech: "",
        },
      ],
    };
  },
  methods: {
    async searchVocabulary() {
      await axios
        .get(
          `https://api.dictionaryapi.dev/api/v2/entries/${this.selectedLanguage}/${this.searchTerm}`
        )
        .then((response) => {
          this.results = response.data;
          this.meanings = this.results.meanings;
          this.hasError = false;
        })
        .catch((e) => {
          if (e.response.status === 404) {
            this.hasError = true;
            this.error = e.response.data.title;
          }
        });
    },
  },
};
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
