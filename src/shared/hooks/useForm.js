import { useState } from 'react';

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });
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
      return { ...prevState, [name]: value };
    });
  };

  return { state, setState, handleSubmit, handleChange };
};

export default useForm;
