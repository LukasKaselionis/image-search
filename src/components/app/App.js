import React from 'react';
import SearchBar from '../searchBar/SearchBar'
import ImageList from '../imageList/ImageList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
          <SearchBar></SearchBar>
      </div>
      <div className="App-content">
          <ImageList></ImageList>
      </div>
    </div>
  );
}

export default App;
