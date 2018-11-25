import { ExampleStore } from '../modules/example/types';

export enum StoreKey {
  example = 'example',
}

export type RootStore = {
  [StoreKey.example]: ExampleStore;
};
