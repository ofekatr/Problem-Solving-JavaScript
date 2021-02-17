import { abSort } from "./a-b-sort";
import _ from "lodash";

const testArr = _.shuffle([-100, -50, -3, -90, 9, 12, 14, 13, 20, 21, 22, 23]);
const a = 8;
const b = 16;

abSort(testArr, a, b);

console.log(testArr);
