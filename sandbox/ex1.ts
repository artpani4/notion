import { extractFromBlock } from '../src/extractors.ts';
import { getBlockById, getBlocksByPage } from '../src/getters.ts';
import { urlToId } from '../src/helpers.ts';
// const blocks = await getBlocksByPage(
//   urlToId.page(
//     'https://artpani.notion.site/d1ecc246b8304e08a780b9a312548064?pvs=4',
//   ),
// );
// console.log(blocks);

// const pidori = [];
// blocks.forEach(async (block) => {
//   const info = await extractFromBlock({ id: block.id });
//   if (info === null) pidori.push(block.id);
//   else {
//     console.log(info);
//   }
// });

// setTimeout(async () => {
//   console.log('-------------');
//   console.log('А теперь пидоры:');
//   console.log(pidori);
//   for (let a of pidori) {
//     console.log(a.id);
//   }
// }, 4000);

console.log(
  await extractFromBlock({
    id: '3d851f26-1046-4385-a1de-85a1911a4f27',
  }),
);
