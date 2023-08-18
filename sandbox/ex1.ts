import { getBlockById, getBlocksByPage } from '../src/getters.ts';
import { urlToId } from '../src/helpers.ts';
// https://www.notion.so/artpani/d1ecc246b8304e08a780b9a312548064?pvs=4#59c51198b7b440009020de9c24684324
const a = await getBlockById(
  'e459bc4d-c09d-401a-9a31-41892458cd9a',
);

console.log(a);
