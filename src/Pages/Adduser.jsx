import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AdduserData } from '../Redux/Action';

export const Adduser = () => {
  const [state, setState] = useState({
    username: '',
    Address: '',
    email: '',
    contact: '',
  });
  const [error, setError] = useState('');

  const states = useSelector((states) => states.reducer);
  console.log('states:', states);
  const dispatch = useDispatch();

  const handlechange = (e) => {
    let { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const formsubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !contact || !Address) {
      setError('Please Enter data');
    } else {
      dispatch(AdduserData(state));
      setState('');
    }
  };

  const { email, username, contact, Address } = state;

  return (
    <div>
      <Link to='/'>
        <Button>Goback</Button>
      </Link>
      <form action='' className='form' onSubmit={formsubmit}>
        <div>
          <label htmlFor='name'>name :</label>
          <input
            type='text'
            placeholder='name'
            name='username'
            value={username}
            onChange={handlechange}
          />
        </div>
        <div>
          <label htmlFor=''>Address : </label>
          <input
            type='text'
            placeholder='Address'
            name='Address'
            value={Address}
            onChange={handlechange}
          />
        </div>
        <div>
          <label htmlFor=''>Email : </label>
          <input
            type='text'
            name='email'
            placeholder='Email'
            value={email}
            onChange={handlechange}
          />
        </div>
        <div>
          <label htmlFor=''>Contact :</label>
          <input
            type='text'
            placeholder='Contact'
            name='contact'
            value={contact}
            onChange={handlechange}
          />
        </div>
        <Button bg={'teal'} type='submit' onChange={handlechange}>
          Addusers
        </Button>
      </form>
    </div>
  );
};

export default Adduser;
