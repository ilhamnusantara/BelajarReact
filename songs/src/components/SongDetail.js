import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if(!song){
    return <div>Select a song</div>
  }
  return (
  <div>
    <h3>Detail for:</h3>
    <p>
      Title: {song.title}
      <br/>
      Duration: {song.duration}
    </p>
  </div>
  );
};

const mapStateProps = (state) => {
  return { song: state.selectedSong} //ngambil dari reducers
};

export default connect(mapStateProps)(SongDetail);