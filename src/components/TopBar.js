import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {userActionTest} from '../actions/actions.js';

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
  return bindActionCreators({userActionTest}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps) (TopBar);
