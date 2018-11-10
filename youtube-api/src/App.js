import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      apiKey :'AIzaSyAtqU_m_lRYnxm8-fp-YUabzq9HLDhPgg0',
      videos : []

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
       },()=>{

        console.log(this.state.videos);
       });
    })
}


  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
