import React from 'react';

import { connect } from 'react-redux';

import {fetchMovies} from '../actions/actions.js';

import { GridList, GridTile } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 'auto',
    overflowY: 'auto',
  },
};




class MovieGrid extends React.Component {


  componentDidMount(){
    this.props.dispatch(fetchMovies("test"))
  }

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {

    const {movies, loading, error} = this.props;

    if(error){
      return <div>Error {error.message}</div>
    }
    if(loading){
      return <div>Loading</div>
    }
    console.log(movies);

    return (
      <div style={styles.root}>
            <GridList
                 cellHeight={180}
                 style={styles.gridList}
               >
             {movies.map((item, index) => (
               <GridTile
                 key={index}
                 title={item.Title}
                 subtitle={<span>by <b>{item.Year}</b></span>}
                 actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
               >
                 <img src={item.Poster} alt={item.Title + ' movie poster'}/>
               </GridTile>
             ))}
           </GridList>
       </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    testMovies: state.testMovies,
    movies: state.movies,
    loading: state.loading,
    error: state.error,
  }
}

export default connect(mapStateToProps) (MovieGrid);
