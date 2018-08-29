export const FETCH_MOVIES_BEGIN = 'FETCH_MOVIES_BEGIN';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

const apiEndpoint = "http://www.omdbapi.com/?s="
const apiKeyToAppend = "&apikey=cb065dd4";
export function fetchMovies(titleQuery){
  let fullEndpoint = apiEndpoint + titleQuery + apiKeyToAppend;

  return dispatch => {
    dispatch(fetchMoviesBegin());
    console.log(fullEndpoint);
    return fetch(fullEndpoint)
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      dispatch(fetchMoviesSuccess(json));
      return json;
    })
    .catch(error => dispatch(fetchMoviesFailure))
  }
}

function handleErrors(response){
  if(!response.ok){
    throw Error(response.statusText);
  }
  return response;
}

export const fetchMoviesBegin = () => ({
  type: FETCH_MOVIES_BEGIN
});

export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: {movies}
});

export const fetchMoviesFailure = error => ({
  type: FETCH_MOVIES_FAILURE,
  payload: {error}
});
