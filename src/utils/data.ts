const languages = ["English", "French", "German", "Italian", "Spanish"];

// export const languageData: Record<string, Record<string, string>> = {};
// languages.forEach((language1: string) => {
//   languageData[language1] = {};
//   languages.forEach((language2: string) => {
//     if (language1 !== language2) {
//       languageData[language1][language2] = "";
//     }
//   });
// });
export const languageData: Record<string, Record<string, string>> = {
  English: {
    apple: "pomme",
    pomme: "apfel",
    manzana: "apfel",
  },
  French: {
    pomme: "apple",
    apfel: "pomme",
    manzana: "pomme",
  },
  German: {
    apfel: "apple",
    pomme: "apfel",
    manzana: "apfel",
  },
  Spanish: {
    manzana: "apple",
    pomme: "manzana",
    apfel: "manzana",
  },
};
