import {takeLatest} from 'redux-saga/effects';
import * as constants from './constants';


import { upcomingMovieRequest,movieDetailRequest } from './movie/action'

export function* watchActions () {
  yield takeLatest(constants.UPCOMING_MOVIE_REQUEST, upcomingMovieRequest);
  yield takeLatest(constants.MOVIE_DETAIL_REQUEST, movieDetailRequest);
  

}

export default function* rootSaga () {
  yield [
    watchActions()
  ];
}
