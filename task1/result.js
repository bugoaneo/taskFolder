import { encoded, translations } from "./data.js";

const untachible = ["groupId", "service", "formatSize", "ca"];
const coded = encoded.map((item) => {
  for (let key in item) {
    if (!untachible.includes(key) && key.toLocaleLowerCase().endsWith("id")) {
      if (!item[key]) {
        item[key] = null;
      } else {
        item[key] = translations[item[key]];
      }
    }
  }
  return item;
});
// for (let key in encoded[0]) {
//   if (!untachible.includes(key) && key.toLocaleLowerCase().endsWith("id")) {
//     encoded[0][key] = translations[encoded[0][key]];
//   }
// }
console.log(coded);
