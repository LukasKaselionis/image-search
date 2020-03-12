import React from 'react';
import axios from 'axios';
import SearchBar from '../searchBar/SearchBar';
import ImageList from '../imageList/ImageList';
import QueryList from '../queryList/QueryList';
import ProgressBar from '../progressBar/ProgressBar';
import './App.css';

class App extends React.Component {
  state = { images: [], isLoading: false, query: ''}

  onSearchSubmit = async (term) => {
    this.setState({isLoading: true});
    await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID PTeA9_qH8lOMT6q5Z82XhBXTSNZ-m00PVu5HlM44p1w'
      },
    }).then(res => {
      setTimeout(() => {
        this.setState({images: res.data.results, isLoading: false, query: res.config.params.query})
      }, 2000)
    }).catch(err => {
      if(err.response) {
        console.log(err.response)
      }
    })
  }

    render() {
      return (
        <div className="App">
          {this.state.isLoading ? <ProgressBar></ProgressBar> : ''}
        <div className="App-header">
            <SearchBar userSubmit={this.onSearchSubmit}></SearchBar>
        </div>
        <div className="wrapper">
              <ImageList foundImages={this.state.images} query={this.state.query}></ImageList>
              <QueryList></QueryList>
        </div>
      </div>
    );
  }
}

export default App;
