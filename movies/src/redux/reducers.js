import {combineReducers} from 'redux';


import movie from './movie/reducer/index';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    movie: movie,
   
    ...asyncReducers,
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
