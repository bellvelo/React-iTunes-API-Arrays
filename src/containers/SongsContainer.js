import React from 'react';
import SongsList from '../components/SongsList';

class SongsContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount(){ // once app launches, this will fetch the API info //
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(data => this.setState({songs: data.feed.entry})) // important pathway to get to array.
  }

  render(){
    return (
      <div className="Top 20 iTunes">
      <h1 className="header"> Top 20 iTunes Bangers!!</h1>
      <SongsList songs={this.state.songs}/>
      </div>
    );
  }
}

export default SongsContainer
