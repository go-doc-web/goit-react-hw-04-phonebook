import PropTypes from 'prop-types';
// import { Component } from 'react';
// import { useState } from 'react';

import initialState from './initialState';
import useForm from '../../shared/hooks/useForm';

import css from './ContactsForm.module.css';

const ContactsForm = ({ onSubmit }) => {
  const { state, handleSubmit, handleChange } = useForm({
    initialState,
    onSubmit,
  });

  /*   const [state, setState] = useState({ ...initialState });
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  function reset() {
    setState({ ...initialState });
  }

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return {...prevState, [name]:value}
    });
  }; */

  const { name, number } = state;

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.titleInputForm}>
        <span>Name</span>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          placeholder="Fedor Fedorov"
        />
      </label>
      <label className={css.titleInputForm}>
        <span>Number</span>
        <input
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="227-91-26"
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactsForm;

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

/*class ContactsForm extends Component {
  state = { ...initialState };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  reset() {
    this.setState({ ...initialState });
  }

  render() {
    const { handleChange, handleSubmit } = this;
    const { name, number } = this.state;

    return (
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.titleInputForm}>
          <span>Name</span>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            placeholder="Fedor Fedorov"
          />
        </label>
        <label className={css.titleInputForm}>
          <span>Number</span>
          <input
            onChange={handleChange}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="227-91-26"
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
 }*/

// export default ContactsForm;

// ContactsForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
