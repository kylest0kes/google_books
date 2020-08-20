import React from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import BookCard from './components/BookCard'

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <BookCard />
    </div>
  );
}

export default App;
