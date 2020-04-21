import {call, put} from 'redux-saga/effects';
import * as actions from '../../actions';
import fireAjax from '../../../services/index';
import {CONFIG} from '../../../config/index';

export function* upcomingMovieRequest(action) {
  try {
    let pageNo = action.payload.pageNo
    const response = yield call(fireAjax, 'GET', `${CONFIG.BASE_URL}${CONFIG.UPCOMING}&page=${pageNo}`, {
  
    });
    if (response && (response.status === 200 || response.status === 304) ) {
      yield put(actions.upcomingMovieSuccess(response.data));
    } else if (response && response.error === 1) {
      yield put(actions.upcomingMovieError('Invalid ...'));
    }
  } catch (e) {
    yield put(actions.upcomingMovieError('Error Occurs !!'));
    console.warn('Some error found in "upcomingMovieRequest" action\n', e);
  }
}


export function* movieDetailRequest(action) {
  try {
    let movieId = action.payload.movieId
    const response = yield call(fireAjax, 'GET', `${CONFIG.BASE_URL}${movieId}${CONFIG.DETAIL}`, {
  
    });
    if (response && (response.status === 200 || response.status === 304) ) {
      yield put(actions.movieDetailSuccess(response.data));
    } else if (response && response.error === 1) {
      yield put(actions.movieDetailError('Invalid ...'));
    }
  } catch (e) {
    yield put(actions.movieDetailError('Error Occurs !!'));
    console.warn('Some error found in "movieDetailRequest" action\n', e);
  }
}