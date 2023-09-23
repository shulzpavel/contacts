import React from 'react';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);

  return (
    <div className="contact-list">
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <div>{contact.имя} {contact.фамилия}</div>
            <div>{contact.телефон}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;