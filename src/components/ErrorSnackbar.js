import React from 'react';
import Snackbar from 'material-ui/Snackbar';

import { connect } from 'react-redux';
import {showNotification, hideNotification} from '../actions/actions.js';

class ErrorSnackbar extends React.Component{

  constructor(props){
    super(props);
    this.state = {

    };
  }

  handleSnackbarTrigger = (error) => {
      let message = 'Search error - ' + error.message;
      this.props.dispatch(showNotification(message));
  }

  handleRequestClose = () => {
      this.props.dispatch(hideNotification());
  }


  render(){
    console.log(this.props.notification);
    return <Snackbar
        open={this.props.notification}
        message={this.props.notification}
        autoHideDuration={4000}
        onRequestClose={this.handleRequestClose}
      />
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  }
}

export default connect(mapStateToProps) (ErrorSnackbar);
