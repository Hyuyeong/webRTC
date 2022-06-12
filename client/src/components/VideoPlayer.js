import { useContext } from 'react';
//import styles from './VideoPlayer.module.css'

import { SocketContext } from '../SocketContext';

const VideoPlayer = props => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <div>
      {stream && (
        <div>
          <div>{name || 'name'}</div>
          <video
            className="video"
            playsInline
            muted
            ref={myVideo}
            autoPlay
          ></video>
        </div>
      )}

      {callAccepted && !callEnded && (
        <div>
          <div>{call.name || 'name'}</div>
          <video className="video" playsInline muted ref={userVideo} autoPlay>
            VideoPlayer
          </video>
        </div>
      )}
    </div>
  );
};
export default VideoPlayer;
