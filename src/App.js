import './App.css';
import { useEffect, useState } from 'react';
import Users from './users/users';

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('');

  const toggleFunc = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    const setNewData = () => {
      setTimeout(() => {
        setData('Hello World2');
      }, 1000);
    };

    setNewData();

    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <div>
      {data && <div data-testid="toggle">check</div>}
      <h1>Hello World</h1>

      {value.length < 3 ? (
        <p data-testid="error">Too short</p>
      ) : (
        <h3 data-testid="h3">{value}</h3>
      )}
      <input
        type="text"
        placeholder="Type here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button onClick={toggleFunc}>Push me</button>
      {toggle && <div>true</div>}
      <Users />
    </div>
  );
}

export default App;
