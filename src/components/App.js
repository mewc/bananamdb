import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {userActionTest} from '../actions/actions.js';

import TopBar from './TopBar.js';
import MovieGrid from './MovieGrid.js';
import Search from './Search.js';

import MTP from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from 'material-ui/styles/baseThemes/lightBaseTheme';





class App extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <MTP muiTheme={getMuiTheme(theme)}>
          <div >
            <TopBar />
            
            <Search />
            <MovieGrid />
          </div>
        </MTP>
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
