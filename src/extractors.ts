import { boolean } from 'https://deno.land/x/zod@v3.21.4/types.ts';
import {
  BLItemBlock,
  CalloutBlock,
  CodeBlock,
  H1Block,
  H2Block,
  H3Block,
  NLIBlock,
  ParagraphBlock,
  QuoteBlock,
  RichText,
  ToDoBlock,
  ToggleTextBlock,
} from './blockInterfaces.ts';
import { urlToId } from './helpers.ts';
import { missingURLorID } from './errors/mod.ts';

function complieRichText(rc: RichText[]) {
  return rc.map((item) => item.text.content).join(' ');
}

export const extractFrom = {
  paragraphBlock: (block: ParagraphBlock) =>
    complieRichText(block.paragraph.text),
  todoBlock: (block: ToDoBlock) => {
    return {
      checked: block.to_do.checked,
      text: complieRichText(block.to_do.rich_text),
    };
  },
  h1Block: (block: H1Block) =>
    complieRichText(block.heading_1.rich_text),
  h2Block: (block: H2Block) =>
    complieRichText(block.heading_2.rich_text),
  h3Block: (block: H3Block) =>
    complieRichText(block.heading_3.rich_text),
  BLItemBlock: (block: BLItemBlock) =>
    complieRichText(block.bulleted_list_item.rich_text),
  NLIBlock: (block: NLIBlock) =>
    complieRichText(block.numbered_list_item.rich_text),
  toggleTextBlock: (block: ToggleTextBlock) =>
    complieRichText(block.toggle.rich_text),
  codeBlock: (block: CodeBlock) => {
    return {
      caption: complieRichText(block.code.caption),
      code: complieRichText(block.code.rich_text),
      language: block.code.language,
    };
  },

  quoteBlock: (block: QuoteBlock) =>
    complieRichText(block.quote.rich_text),
  calloutBlock: (block: CalloutBlock) => {
    return {
      text: complieRichText(block.callout.rich_text),
      icon: block.callout.icon.type === 'emoji'
        ? block.callout.icon.emoji
        : block.callout.icon.external!.url,
    };
  },
};

export function extractFromBlock(url?: string, id?: string) {
  const blockId = id ? id : url ? urlToId.block(url) : undefined;
  if (blockId === undefined) throw new missingURLorID();
}
