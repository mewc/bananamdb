import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {fetchMovies} from 'actions/actions.js';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('returns results from server', () => {
  this.props.dispatch(fetchMovies('test'));

});
