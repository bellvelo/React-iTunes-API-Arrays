import React from 'react';
import './component.css'

const Song = (song) =>{
  if(!song) return null;
  return(
    <div className="song-details">
    <h3 className="position">Chart Position: {song.position}</h3>
    <h2 className="title">Title: {song.title}</h2>
    <h3 className="artist">Artist: {song.artist}</h3>
    <img className="image" src={song.image} alt="artist"/>
    </div>
  )

}

export default Song
