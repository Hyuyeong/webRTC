import { useState, useContext } from 'react';
//import styles from './Notification.module.css'

import { SocketContext } from '../SocketContext';

const Notification = props => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div>
          <h1>{call.name}is calling:</h1>
          <button onClick={answerCall}>Answer</button>
        </div>
      )}
    </>
  );
};
export default Notification;
