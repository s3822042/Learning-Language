<template>
  <h3>Functionality to check if word between language is matched</h3>
  <div class="container" v-for="(input, index) in pairInput" :key="index">
    <div class="select-groups">
      <select v-model="pairInput[index].language">
        <option v-for="language in languages" :value="language">
          {{ language }}
        </option>
      </select>
    </div>
    <div class="input-groups">
      <input type="text" v-model="pairInput[index].value" />
    </div>
  </div>
  <div class="match-message">
    <p v-if="isStarted && matchCount > 0">{{ matchCount }} matches</p>
    <p v-else-if="isStarted && matchCount === 0">No match</p>
  </div>
  <div class="button-group">
    <button @click="addInput">Add</button>
    <button @click="startMatch">Start</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { languageData } from "@/utils/data";

export default defineComponent({
  data() {
    return {
      matchCount: 0,
      isStarted: false,
      pairInput: [
        { value: "", language: "English" },
        { value: "", language: "French" },
      ] as any[],
      defaultFirstLanguage: "English",
      defaultSecondLanguage: "French",
      languages: ["English", "French", "German", "Spanish"],
    };
  },
  watch: {},
  methods: {
    addInput: function () {
      this.isStarted = false;
      this.pairInput.push(
        { value: "", language: this.defaultFirstLanguage },
        { value: "", language: this.defaultSecondLanguage }
      );
    },

    startMatch: function () {
      if (this.pairInput[0].value === "" || this.pairInput[1].value === "") {
        alert("Please enter a value for both inputs");
        return;
      }

      if (this.pairInput[0].language === this.pairInput[1].language) {
        alert("Please select different languages for both inputs");
        return;
      }

      this.matchCount = 0;
      for (let i = 0; i < this.pairInput.length - 1; i++) {
        for (let j = i + 1; j < this.pairInput.length; j++) {
          const firstValue = this.pairInput[i].value;
          const secondValue = this.pairInput[j].value;
          const firstLanguage = this.pairInput[i].language;
          const secondLanguage = this.pairInput[j].language;

          if (
            firstValue in languageData[firstLanguage] &&
            secondValue in languageData[secondLanguage]
          ) {
            const translatedFirstValue =
              languageData[firstLanguage][firstValue];
            const translatedSecondValue =
              languageData[secondLanguage][secondValue];
            if (
              languageData[secondLanguage][translatedFirstValue] ===
                firstValue &&
              languageData[firstLanguage][translatedSecondValue] === secondValue
            ) {
              this.matchCount++;
            }
          } else {
            alert(
              "Sorry, the provided value is not existing in our database yet"
            );
            return;
          }
        }
      }

      this.isStarted = true;
    },
  },
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  width: 400px;
}

.select-groups,
.input-groups {
  display: flex;
}

.select-groups {
  flex: 0 0 auto;
}

.input-groups {
  flex-grow: 1;
}

select,
input {
  width: 100px;
  height: 30px;
  margin-right: 20px;
  margin-bottom: 20px;
}

.match-message {
  font-size: 20px;
  margin-bottom: 20px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-top: 20px;
}

button {
  width: 150px;
  height: 40px;
  font-size: 16px;
}
</style>
