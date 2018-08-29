import React from 'react';
import Snackbar from 'material-ui/Snackbar';

import { connect } from 'react-redux';

class ErrorSnackbar extends React.Component{

  constructor(props){
    super(props);
    this.state = {

    };
  }

  handleSnackbarTrigger = (error) => {
      let message = 'Search error - ' + error.message;

  }

  handleRequestClose = () => {

  }


  render(){
    return <Snackbar
        open={this.state.isOpen}
        message={this.state.message}
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
