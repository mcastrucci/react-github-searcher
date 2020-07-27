import React from 'react';
import './App.css';
import Form from './components/Form';
import CardList from './components/CardList';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [ userList, setUserList ] = useState([]);
  const [ username, setUsername ] = useState('');

  const onChangeListener = username => {
    setUsername(username);
  }

  const submitListener = async () => {
    try{
      const response = await axios.get(`https://api.github.com/users/${username}`);
      if(response.data)
        addNewUser(response.data)
      else
        throw("not found");
    }catch(ex){
      console.log(ex);
    } finally {
      setUsername('');
    }
  }

  const addNewUser = (data) => {
    setUserList([...userList, data])
  }

  return (
    <div className="App">
          <h1 
          className='pt-10 text-center mt-6 text-3xl leading-9 font-extrabold text-gray-900'>
            Search a GitHub User
          </h1>
          <Form
            username={username}
            submitListener={submitListener}
            changeEvent={onChangeListener}
          />
          <CardList userList={userList}/>
    </div>
  );
}

export default App;
