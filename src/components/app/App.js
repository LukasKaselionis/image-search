import React from 'react';
import SearchBar from '../searchBar/SearchBar'
import ImageList from '../imageList/ImageList';
import SearchButton from '../searchButton/SearchButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
          <SearchBar></SearchBar>
          <SearchButton></SearchButton>
      </div>
      <div className="App-content">
          <ImageList></ImageList>
      </div>
    </div>
  );
}

export default App;
