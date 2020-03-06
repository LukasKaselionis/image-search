import React from 'react';
import axios from 'axios';
import SearchBar from '../searchBar/SearchBar';
import ImageList from '../imageList/ImageList';
import './App.css';

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID PTeA9_qH8lOMT6q5Z82XhBXTSNZ-m00PVu5HlM44p1w'
      }
    })

    console.log(Response);
  }

    render() {
      return (
        <div className="App">
        <div className="App-header">
            <SearchBar userSubmit={this.onSearchSubmit}></SearchBar>
        </div>
        <div className="App-content">
            <ImageList></ImageList>
        </div>
      </div>
    );
  }
}

export default App;
