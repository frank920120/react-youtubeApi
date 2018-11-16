import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import SearchBar from './components/search-bar';
import css from './index.css';
import _ from 'lodash';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      apiKey :'AIzaSyAtqU_m_lRYnxm8-fp-YUabzq9HLDhPgg0',
      videos : [],
      selectedVideo : null,
     
    }
    this.videoSearch("KDA");
  }

  videoSearch(term){
    YTSearch({
        key:this.state.apiKey,
        term:term
    },(videos)=>{
        
       this.setState({
        videos,
        selectedVideo:videos[0]
       },()=>{

        console.log(this.state.videos);
       });
    })
}


  render() {
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)},600);

    return (
      <div>
        <SearchBar onSearchInputChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
        onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
        videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
