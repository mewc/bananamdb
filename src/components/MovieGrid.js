import React from 'react';
import { connect } from 'react-redux';
import { GridList, GridTile } from 'material-ui';

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
    // this.props.dispatch(fetchMovies("test"))
  }

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {

    const {movies} = this.props;

    return (
      <div style={styles.root}>
            <GridList
                 cellHeight={180}
                 style={styles.gridList}
               >
             {(movies !== undefined)?
               movies.map((item, index) => (
               <GridTile
                 key={index}
                 title={item.Title}
                 subtitle={<span>by <b>{item.Year}</b></span>}
               >
                 <img src={item.Poster} alt={item.Title + ' movie poster'}/>
               </GridTile>
             ))
             :<div></div>
            }
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
