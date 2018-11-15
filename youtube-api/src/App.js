import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      apiKey :'AIzaSyAtqU_m_lRYnxm8-fp-YUabzq9HLDhPgg0',
      videos : [],
      selectedVideo : null

    }
    this.videoSearch('KDA');
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
    return (
      <div>
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
