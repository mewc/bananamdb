import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {userActionTest} from '../actions/actions.js';

import { GridList, GridTile } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
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

const tilesData = [
  {
    poster: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'test',
    year: '1999',
  },
  {
    poster: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'test',
    year: '1999',
  },
  {
    poster: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'test',
    year: '1999',
  },
  {
    poster: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'test',
    year: '1999',
  },
  {
    poster: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'test',
    year: '1999',
  },
  {
    poster: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'test',
    year: '1999',
  },
  {
    poster: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'test',
    year: '1999',
  },
  {
    poster: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'test',
    year: '1999',
  },
  {
    poster: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'test',
    year: '1999',
  },

];

class MovieGrid extends React.Component {




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
             <Subheader>December</Subheader>
             {tilesData.map((tile) => (
               <GridTile
                 key={tile}
                 title={tile.title}
                 subtitle={<span>by <b>{tile.year}</b></span>}
                 actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
               >
                 <img src={tile.poster} />
               </GridTile>
             ))}
           </GridList>
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


export default connect(mapStateToProps, mapDispatchToProps) (MovieGrid);
