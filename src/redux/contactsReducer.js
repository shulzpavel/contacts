import { ADD_CONTACT, DELETE_CONTACT, SORT_CONTACTS } from './contactsActions';

const initialState = {
  contacts: [
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
    },
    {
      "имя": "Василий",
      "фамилия": "Васильев",
      "телефон": "+7 555-555-5556"
    },
    {
      "имя": "Дмитрий",
      "фамилия": "Дмитриев",
      "телефон": "+7 555-555-5565"
    },
    {
      "имя": "Гавриил",
      "фамилия": "Гавриилов",
      "телефон": "+7 555-555-5545"
    },
    {
      "имя": "Константин",
      "фамилия": "Констатнтинов",
      "телефон": "+7 555-555-5535"
    }
  ],
  sortedContacts: [],
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact !== action.payload),
      };
    case SORT_CONTACTS:
      const sortBy = action.payload;
      const sortedContacts = [...state.contacts].sort((a, b) =>
        a[sortBy].localeCompare(b[sortBy])
      );
      return {
        ...state,
        sortedContacts,
      };
    default:
      return state;
  }
};

export default contactsReducer;




