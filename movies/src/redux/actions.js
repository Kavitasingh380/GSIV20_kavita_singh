import {createAction} from 'redux-actions';
import * as constants from './constants';

export const upcomingMovieRequest = createAction(constants.UPCOMING_MOVIE_REQUEST);
export const upcomingMovieSuccess = createAction(constants.UPCOMING_MOVIE_SUCCESS);
export const upcomingMovieError = createAction(constants.UPCOMING_MOVIE_ERROR);
export const upcomingMovieClear = createAction(constants.UPCOMING_MOVIE_CLEAR);


export const movieDetailRequest = createAction(constants.MOVIE_DETAIL_REQUEST);
export const movieDetailSuccess = createAction(constants.MOVIE_DETAIL_SUCCESS);
export const movieDetailError = createAction(constants.MOVIE_DETAIL_ERROR);
export const movieDetailClear = createAction(constants.MOVIE_DETAIL_CLEAR)

