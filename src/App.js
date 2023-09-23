import React, { useState, useEffect } from 'react';
import './App.css';

const contactsData = [
  {
    "имя": "Иван",
    "фамилия": "Иванов",
    "телефон": "+7 123-456-7890"
  },
  {
    "имя": "Екатерина",
    "фамилия": "Смирнова",
    "телефон": "+7 987-654-3210"
  },
  {
    "имя": "Алексей",
    "фамилия": "Петров",
    "телефон": "+7 555-555-5555"
  }
];

function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          <strong>{contact.имя} {contact.фамилия}</strong>: {contact.телефон}
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedContacts, setSortedContacts] = useState(contactsData);

  useEffect(() => {
    // Функция для фильтрации контактов по имени
    const filteredContacts = contactsData.filter(contact =>
      contact.имя.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Сортировка контактов по имени
    const sortedFilteredContacts = filteredContacts.sort((a, b) =>
      a.имя.localeCompare(b.имя)
    );

    setSortedContacts(sortedFilteredContacts);
  }, [searchTerm]);

  return (
    <div>
      <h1>Книжка контактов</h1>
      <input
        type="text"
        placeholder="Поиск по имени"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ContactList contacts={sortedContacts} />
    </div>
  );
}

export default App;

