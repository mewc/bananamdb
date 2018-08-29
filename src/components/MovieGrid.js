import React from 'react';
import { connect } from 'react-redux';
import { GridList, GridTile } from 'material-ui';
import ErrorSnackbar from './ErrorSnackbar';
import ImgPlaceholder from '../notfound.png';

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
    return (
      <div style={styles.root}>
            <GridList
                 cellHeight={180}
                 style={styles.gridList}
               >
             {(this.props.movies !== undefined)?
               this.props.movies.map((item, index) => (
               <GridTile
                 key={index}
                 title={item.Title}
                 subtitle={<span>by <b>{item.Year}</b></span>}
               >
                 <img src={item.Poster}
                  alt={item.Title + ' movie poster'}
                  onError={i => i.target.src=ImgPlaceholder}
                  />
               </GridTile>
             ))
             :<div></div>
            }
           </GridList>
           <ErrorSnackbar/>
       </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    testMovies: state.testMovies,
    movies: state.movies,
    loading: state.loading,
    error: state.error,
  }
}

export default connect(mapStateToProps) (MovieGrid);
