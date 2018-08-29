import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchMovies}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps) (TopBar);
