import { Block } from './blockInterfaces.ts';
import { childrenListError } from './errors/mod.ts';
import { maybeClient } from './helpers.ts';
import { Client } from './mod.ts';

export async function getBlocksByPage(
  pageId: string,
  client?: Client,
) {
  const cl = await maybeClient(client);
  try {
    const response = await cl.blocks.children.list({
      block_id: pageId,
    });
    return response.results as Block[];
  } catch (e) {
    throw new childrenListError();
  }
}

export async function getBlockById(
  blockId: string,
  client?: Client | undefined,
): Promise<Block> {
  return await (await maybeClient(client)).blocks.retrieve({
    block_id: blockId,
  }) as unknown as Block;
}
