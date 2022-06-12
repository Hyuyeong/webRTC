import React from 'react';
//import styles from './App.module.css'

import { Typography, AppBar } from '@material-ui/core';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notification from './components/Notification';

const App = props => {
  return (
    <div>
      {/* <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center"> */}
      Video Chat
      {/* </Typography>
      </AppBar> */}
      <VideoPlayer />
      <Options>
        <Notification />
      </Options>
    </div>
  );
};
export default App;
