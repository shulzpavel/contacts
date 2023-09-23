import React from 'react';
import './App.css';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <h1>Книжка контактов</h1>
      <SearchBar />
      
      <ContactList />
    </div>
  );
}

export default App;