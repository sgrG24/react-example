import logo from './logo.svg';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput'
import {useState} from 'react'

function App() {
  const [username, setUsername] = useState("sagar")

  const usernameStateChangeHandler = (name) => {
    setUsername(name)
  }
  return (
    <div className="App">
      <UserInput handler={usernameStateChangeHandler} username={username}/>
      <UserOutput username={username} setUsername={setUsername}/>
      <UserOutput />
    </div>
  );
}

export default App;
