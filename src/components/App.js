import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {userActionTest} from '../actions/actions.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to bananamdb</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
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


export default connect(mapStateToProps, mapDispatchToProps) (App);
