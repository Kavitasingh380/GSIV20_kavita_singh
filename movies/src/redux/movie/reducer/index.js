import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../../constants';

let initialState = {
  upcomingMovie: {
    data: {},
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
  },
  movieDetail: {
    data: {},
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
  }
};

const upcomingMovieRequest = (state, action) => update(state, {
  upcomingMovie: {
    isLoading: { $set: true },
    isError: { $set: false },
    isSuccess: { $set: false },
    message: { $set: '' }
  }
});
const upcomingMovieSuccess = (state, action) => update(state, {
  upcomingMovie: {
    data: { $set: action.payload },
    isLoading: { $set: false },
    isError: { $set: false },
    isSuccess: { $set: true },
    message: { $set: 'upcomingMovie success' }
  }
});
const upcomingMovieError = (state, action) => update(state, {
  upcomingMovie: {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: action.payload }
  }
});
const upcomingMovieClear = (state, action) => update(state, {
  upcomingMovie: {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: false },
    message: { $set: '' }
  }
});

const movieDetailRequest = (state, action) => update(state, {
  movieDetail: {
    isLoading: { $set: true },
    isError: { $set: false },
    isSuccess: { $set: false },
    message: { $set: '' }
  }
});
const movieDetailSuccess = (state, action) => update(state, {
  movieDetail: {
    data: { $set: action.payload },
    isLoading: { $set: false },
    isError: { $set: false },
    isSuccess: { $set: true },
    message: { $set: 'movieDetail success' }
  }
});
const movieDetailError = (state, action) => update(state, {
  movieDetail: {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: action.payload }
  }
});
const movieDetailClear = (state, action) => update(state, {
  movieDetail: {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: false },
    message: { $set: '' }
  }
});

export default handleActions({
  [constants.UPCOMING_MOVIE_REQUEST]: upcomingMovieRequest,
  [constants.UPCOMING_MOVIE_SUCCESS]: upcomingMovieSuccess,
  [constants.UPCOMING_MOVIE_ERROR]: upcomingMovieError,
  [constants.UPCOMING_MOVIE_CLEAR]: upcomingMovieClear,

  [constants.MOVIE_DETAIL_REQUEST]: movieDetailRequest,
  [constants.MOVIE_DETAIL_SUCCESS]: movieDetailSuccess,
  [constants.MOVIE_DETAIL_ERROR]: movieDetailError,
  [constants.MOVIE_DETAIL_CLEAR]: movieDetailClear,



}, initialState);
