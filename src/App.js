import Greeting from './Greeting';
import Clock from './Clock';
import image from './img/index';
import appStyles from './App.module.css';
import Quote from './Quote';

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
      }}
    >
      <div className={appStyles.container}>
        <Clock />
        <Greeting />
      </div>
      <Quote />
    </div>
  );
}

export default App;
