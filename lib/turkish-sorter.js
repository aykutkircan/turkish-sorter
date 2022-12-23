/**
 *
 * Sort records based on give alphabet list.
 */
"use strict";

import _ from "lodash";

export default function (records, sortField) {
  let alphabet =
    "0|1|2|3|4|5|6|7|8|9|A|B|C|Ç|D|E|F|G|Ğ|H|I|İ|J|K|L|M|N|O|Ö|P|Q|R|S|Ş|T|U|Ü|V|W|X|Y|Z";
  alphabet = alphabet.split("|");

  const sortedList = [];

  for (let character of alphabet) {
    for (let record of records) {
      const fieldValue = _.get(record, sortField);

      if (fieldValue && fieldValue[0]) {
        const recordInitial = fieldValue[0].toLocaleUpperCase();
        if (recordInitial === character) {
          sortedList.push(record);
        }
      }
    }
  }

  for (let record of records) {
    if (sortedList.indexOf(record) === -1) {
      sortedList.push(record);
    }
  }

  return sortedList;
}
