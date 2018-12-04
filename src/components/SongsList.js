import React from 'react';
import Song from './Song';

const SongsList = ({songs}) => {
  if(!songs) return null;
  const songNodes = songs.map((song, index) => {
    return(
    <Song
    key={index}
    position={index+1}
    title={song["im:name"].label}
    artist={song["im:artist"].label}
    image={song["im:image"][0].label} // only worked when index was hard coded??
    />
    // [""] required to gain access to API due to : in path.
  )
  })
  return (
    <div className="song-list">
    {songNodes}
    </div>
  )
}


export default SongsList
