import { TestFeaturesStore } from '../modules/testFeatures/types';

export enum StoreKey {
  testFeatures = 'testFeatures',
}

export type RootStore = {
  [StoreKey.testFeatures]?: TestFeaturesStore;
};
