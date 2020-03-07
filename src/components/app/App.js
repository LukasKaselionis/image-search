import React from 'react';
import axios from 'axios';
import SearchBar from '../searchBar/SearchBar';
import ImageList from '../imageList/ImageList';
import QueryList from '../queryList/QueryList';
import './App.css';

class App extends React.Component {
  state = { images: []}

  onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID PTeA9_qH8lOMT6q5Z82XhBXTSNZ-m00PVu5HlM44p1w'
      }
    })
    this.setState({images: response.data.results})
  }

    render() {
      return (
        <div className="App">
        <div className="App-header">
            <SearchBar userSubmit={this.onSearchSubmit}></SearchBar>
        </div>
        <div className="wrapper">
              <ImageList foundImages={this.state.images}></ImageList>
              <QueryList></QueryList>
        </div>
      </div>
    );
  }
}

export default App;
