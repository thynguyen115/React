import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { VideoJS } from './VideoJS.jsx'

export const App = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions = { // lookup the options in the docs for more options
    autoplay: true,
    controls: true,
    responsive: true,
    height: 300,
    width: 500,
    playbackRates: [0.5, 1, 1.5, 2],
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/424px-Big_buck_bunny_poster_big.jpg",
    sources: [{
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video/mp4'
    }]
  }

  const poster = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/424px-Big_buck_bunny_poster_big.jpg"

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };

  // const changePlayerOptions = () => {
  //   // you can update the player through the Video.js player instance
  //   if (!playerRef.current) {
  //     return;
  //   }
  //   // [update player through instance's api]
  //   playerRef.current.src([{src: 'http://ex.com/video.mp4', type: 'video/mp4'}]);
  //   playerRef.current.autoplay(false);
  // };

  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      <Hello/>
      <Info/>
      <h2>Player Testing</h2>
      <>
        <div>-------------------</div>

        <VideoJS options={videoJsOptions} onReady={handlePlayerReady}/>

        <div>-------------------</div>
      </>
      <h2>Video ends here</h2>
    </div>
  );
};
