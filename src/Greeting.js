import { useState } from 'react';
import greetingStyles from './Greeting.module.css';

function Greeting() {
  const [username, setUsername] = useState('');
  const onChange = event => {
    setUsername(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    localStorage.setItem('username', username);
    setUsername('');
  };
  const usernameComponent = (
    <form onSubmit={onSubmit}>
      <div>What is your name?</div>
      <input
        type="text"
        value={username}
        className={greetingStyles.input}
        onChange={onChange}
      />
    </form>
  );
  const savedUsername = localStorage.getItem('username');
  return (
    <div className={greetingStyles.container}>
      {savedUsername ? `How are you? ${savedUsername}` : usernameComponent}
    </div>
  );
}

export default Greeting;
