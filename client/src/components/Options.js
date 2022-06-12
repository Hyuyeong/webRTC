import { useState, useContext } from 'react';
//import styles from './Options.module.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { SocketContext } from '../SocketContext';

const Options = props => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const idToCallHandler = e => {
    setIdToCall();
  };

  return (
    <div>
      <form autoComplete="off">
        <div>account info</div>
        <input
          placeholder="name"
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
        />
        <CopyToClipboard text={me}>
          <button>Copy Your ID </button>
        </CopyToClipboard>
        <div>make a call</div>
        <input
          placeholder="ID to Call"
          value={idToCall}
          onChange={e => setIdToCall(e.target.value)}
          type="text"
        />
        {callAccepted && !callEnded ? (
          <button onClick={leaveCall}>Hang up</button>
        ) : (
          <button onClick={() => callUser(idToCall)}>Call</button>
        )}
      </form>
      {props.children}
    </div>
  );
};
export default Options;
