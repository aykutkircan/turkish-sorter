import TurkishSorter from "./lib/turkish-sorter.js";

import sampleData from "./seed/sample-data.js";
import Shuffle from "./lib/shuffle.js";

const shuffledArray = Shuffle(sampleData);

// sort by name field
const sortedArray = TurkishSorter(shuffledArray, "name");

console.log("shuffle data", shuffledArray);
console.log("sort data", sortedArray);
