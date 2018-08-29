import React from 'react';
import TextField from 'material-ui/TextField';


const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center'
  }
};
export const Search = () => (
  <div>
  <div style={styles.root}>
    <h1>BANANAMDB MOVIE SEARCHER</h1>
  </div>
  <div style={styles.root}>
    <TextField
        hintText="eg. Sharknado, The Room"
        floatingLabelText="Search for a movie"
    />
  </div>
  </div>
);

export default Search;
