import React from 'react';

import { AppBar } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/svg-icons/action/stars';


class TopBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }

  }

  render() {
    return (

        <AppBar title={'bananamdb'}
        iconElementRight={<IconButton><Icon /></IconButton>}
          iconElementLeft={<IconButton><Icon /></IconButton>} 
        />

    );
  }
}



export default(TopBar);
