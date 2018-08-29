import React from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import Snackbar from 'material-ui/Snackbar';


import { connect } from 'react-redux';
import {fetchMovies} from '../actions/actions.js';


const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center'
  }
};

// const searchRegex = "^\w{2,}$";


class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      errorText: '',
      searchValue: '',
      searchDisabled: true,
      snackbar: {
        isOpen: false,
        message: '',
      }
    }
  }

  handleSnackbarTrigger = (error) => {
      let message = 'Search error - ' + error.message;
      this.setState({
        snackbar:{
          isOpen: true,
          message: message,
        }
      });
  }

  handleSearchClick = () => {
    this.props.dispatch(fetchMovies(this.state.searchValue))
  }

  handleRequestClose = () => {
    this.setState({
      snackbar:{
        isOpen: false,
        message: '',
      }
    });
  };

  onInputChange(event) {
      if (event.target.value.length >= 2) {
        this.setState({ errorText: '', searchDisabled: false, searchValue: event.target.value});
      } else {
        this.setState({ errorText: 'Search must be 2 or more characters', searchDisabled: true, searchValue: event.target.value});
      }
  }

  render(){
    const {loading, error} = this.props;

    if(error){
      return this.handleSnackbarTrigger(error);
    }
    if(loading){
      return <div>Loading</div> //TODO update to real loading thing
    }
    return (

    <div>
      <div style={styles.root}>
        <h1>BANANAMDB MOVIE SEARCHER</h1>
      </div>
      <div style={styles.root}>
        <TextField
            hintText="eg. Sharknado, The Room"
            floatingLabelText="Search for a movie"
            errorText={this.state.errorText}
            onChange={this.onInputChange.bind(this)}
        />
        <IconButton disabled={this.state.searchDisabled}>
            <SearchIcon onClick={this.handleSearchClick}/>
        </IconButton>
      </div>
      <Snackbar
          open={this.state.snackbar.isOpen}
          message={this.state.snackbar.message}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

    loading: state.loading,
    error: state.error,
  }
}

export default connect(mapStateToProps) (Search);
