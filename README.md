## Installation

Using npm:

```shell
$ npm i turkish-sorter
```

## Initialize

```js
// import
import TurkishSorter from "turkish-sorter";
```

## Usage

```js
const sampleData = [
  { _id: 4, name: "i", surname: "j", city: "k" },
  { _id: 2, name: "d", surname: "e", city: "f" },
  { _id: 1, name: "a", surname: "b", city: "c" },
];

const sortedByName = TurkishSorter(sampleData, "name");
const sortedById = TurkishSorter(sampleData, "_id_");
const sortedBySurname = TurkishSorter(sampleData, "surname");
```
