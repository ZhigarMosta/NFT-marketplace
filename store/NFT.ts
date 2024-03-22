import { createStore, createEffect } from "effector";

import { nft } from "@/data/marketplace/json";
import { collections } from "@/data/marketplace/json";

export const $NFTs = createStore([]);
export const $Collections = createStore([]);

export const getNFTFx = createEffect(async () => {
  try {
    const response = await nft;
    return response;
  } catch (error) {
    throw error;
  }
});
export const getCollectionsFx = createEffect(async () => {
  try {
    const response = await collections;
    return response;
  } catch (error) {
    throw error;
  }
});

$NFTs.on(getNFTFx.doneData, (state, data) => data);
$Collections.on(getCollectionsFx.doneData, (state, data) => data);

getNFTFx();
getCollectionsFx();
