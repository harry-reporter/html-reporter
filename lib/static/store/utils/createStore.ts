import { createStore as _createStore, applyMiddleware, compose, Store, StoreEnhancer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootStore } from '../types/store';

export function createStore(reducer) {
  const middleware = [];

  const store: Store<RootStore> = _createStore(
    reducer,
    composeWithDevTools(
      compose(
        applyMiddleware(...middleware),
      ) as StoreEnhancer<{}>,
    ),
  );

  return store;
}
