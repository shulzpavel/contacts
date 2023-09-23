import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortContacts } from '../redux/contactsActions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    dispatch(sortContacts(e.target.value));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Поиск по имени"
        value={searchTerm}
        onChange={handleSearch}
      />
      <select onChange={handleSortChange}>
        <option value="имя">Сортировать по имени</option>
        <option value="фамилия">Сортировать по фамилии</option>
      </select>
    </div>
  );
};

export default SearchBar;