import React from 'react';

import {fetchMovies} from '../actions/actions.js';

import { AppBar } from 'material-ui';

class TopBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }

  }

  render() {
    return (

        <AppBar title={'bananamdb'} />

    );
  }
}



export default(TopBar);
