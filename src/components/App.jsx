// import { Component } from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactsList from './ContactsList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactItem from './ContactsList/ContactItem/ContactItem';

// import contacts from './contacts';
// import { save, load } from '../utilis/localStorage';

import css from './App.module.css';

const styleApp = {
  // height: '100vh',
  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'center',
  // alignItems: 'center',
  fontSize: 32,
  color: '#010101',
};

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem('my-contacts'));
    return contacts ? contacts : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('my-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const dublicate = name => {
    const normalisedName = name.toLocaleLowerCase();
    const dublContact = contacts.find(
      ({ name }) => name.toLowerCase() === normalisedName
    );
    return Boolean(dublContact);
  };

  const addContact = ({ name, number }) => {
    if (dublicate(name)) {
      return alert('Такой пользователь уже есть');
    }
    setContacts(prevContacts => {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return [newContact, ...prevContacts];
    });
  };

  const removeContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const handlefilterChange = ({ target }) => setFilter(target.value);

  const getFilterContact = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
    return result;
  };

  const filterContacts = getFilterContact();

  return (
    <div style={styleApp} className={css.app}>
      <div className={css.container}>
        <div className={css.phonebook}>
          <h2>Phonebook</h2>

          <ContactsForm onSubmit={addContact} />
        </div>
      </div>
      <div className={css.container}>
        <div className={css.contacts}>
          <h2>Contacts</h2>
          <ContactFilter
            handlefilterChange={handlefilterChange}
            filter={filter}
          />
          <ContactsList>
            <ContactItem items={filterContacts} removeContact={removeContact} />
          </ContactsList>
        </div>
      </div>
    </div>
  );
};

export default App;

/* class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    // const contacts = JSON.parse(localStorage.getItem('my-contacts'));
    const contacts = load('my-contacts');
    if (contacts?.length) {
      // contacts && contacts.length
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts.length !== contacts.length) {
      save('my-contacts', contacts);
    }
    // localStorage.setItem('my-contacts', JSON.stringify(contacts));
  }

  handlefilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  dublicate(name) {
    const { contacts } = this.state;
    const normalisedName = name.toLocaleLowerCase();
    const dublContact = contacts.find(
      ({ name }) => name.toLowerCase() === normalisedName
    );
    return Boolean(dublContact);
  }

  addContact = ({ name, number }) => {
    if (this.dublicate(name)) {
      return alert('Такой пользователь уже есть');
    }
    this.setState(prevState => {
      const { contacts } = prevState;

      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return { contacts: [newContact, ...contacts] };
    });
  };

  getFilterContact = () => {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
    return result;
  };

  removeContact = id => {
    console.log(id);
    this.setState(({ contacts }) => {
      const newContact = contacts.filter(contact => contact.id !== id);
      return { contacts: newContact };
    });
  };
  render() {
    console.log('render');
    const { removeContact, handlefilterChange, addContact, getFilterContact } =
      this;
    const filterContacts = getFilterContact();
    const { filter } = this.state;

    return (
      <div style={styleApp} className={css.app}>
        <div className={css.container}>
          <div className={css.phonebook}>
            <h2>Phonebook</h2>

            <ContactsForm onSubmit={addContact} />
          </div>
        </div>
        <div className={css.container}>
          <div className={css.contacts}>
            <h2>Contacts</h2>
            <ContactFilter
              handlefilterChange={handlefilterChange}
              filter={filter}
            />
            <ContactsList>
              <ContactItem
                items={filterContacts}
                removeContact={removeContact}
              />
            </ContactsList>
          </div>
        </div>
      </div>

 
    );
  }
}

export default App; */
