import logo from './logo.svg';
import './App.css';
import UserAuth from './Context/UserAuth';
import Login from './Components/Login';
import UserActivity from './Context/UserActivity';
import UserInput from './Components/UserInput';

function App() {
  return (
    <UserAuth >
      <UserActivity>

      <Login/>
      <UserInput/>
      </UserActivity>
  
    </UserAuth>
  );
}

export default App;
