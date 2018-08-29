import {FETCH_MOVIES_BEGIN,
   FETCH_MOVIES_FAILURE,
    FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_NO_RESULTS} from '../actions/actions.js';


let defaultState = {
  user: {
    name: 'testUser'
  },
  appName: 'bananamdb',
  omdbapikey: 'cb065dd4',
  testMovies: [
    {
      Poster: 'images/grid-list/00-52-29-429_640.jpg',
      Title: 'test',
      Year: '1999',
    },
    {
      Poster: 'images/grid-list/00-52-29-429_640.jpg',
      Title: 'test',
      Year: '1999',
    },
    {
      Poster: 'images/grid-list/00-52-29-429_640.jpg',
      Title: 'test',
      Year: '1999',
    },
    {
      Poster: 'images/grid-list/00-52-29-429_640.jpg',
      Title: 'test',
      Year: '1999',
    },
    {
      Poster: 'images/grid-list/00-52-29-429_640.jpg',
      Title: 'test',
      Year: '1999',
    },
    {
      Poster: 'images/grid-list/00-52-29-429_640.jpg',
      Title: 'test',
      Year: '1999',
    },
    {
      Poster: 'images/grid-list/00-52-29-429_640.jpg',
      Title: 'test',
      Year: '1999',
    },
    {
      Poster: 'images/grid-list/00-52-29-429_640.jpg',
      Title: 'test',
      Year: '1999',
    },
    {
      Poster: 'images/grid-list/00-52-29-429_640.jpg',
      Title: 'test',
      Year: '1999',
    },
  ],
  movies: [],
  loading: false,
  error: null,
  
};

export default function movieReducer(state = defaultState, action){
  switch(action.type){
    case FETCH_MOVIES_BEGIN:
    //mark state as loading
    //reset errors - start fresh
    return {
      ...state,
      loading: true,
      error: null
    };
    case FETCH_MOVIES_SUCCESS:
    //all done, set loading false
    // set iutems with ones returned
    return {
      ...state,
      loading: false,
      movies: action.payload.movies.Search
    };
    case FETCH_MOVIES_FAILURE:
    //save error to display somewhere
    ///request failed but did stop so not loading anymore
    return {
      ...state,
      loading: false,
      error: action.payload.error,
    };
    case FETCH_MOVIES_NO_RESULTS:
      //WHEN A SEARCH QUERY RETURNS NOTHING eg. asdflvbalhvbsad
    return {
      ...state,
      loading: false,
      error: action.payload.error,
    };
    default:
    return state;
  }
}
