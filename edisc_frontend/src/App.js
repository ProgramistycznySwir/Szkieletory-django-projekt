import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home';
import LoginScreen from './components/login_screen/LoginScreen'
import MyFiles from './components/MyFiles';
import BottomBar from './components/bottom_bar/BottomBar';

function App() {
  return (
    <Router>
      <div className="App">
        <LoginScreen></LoginScreen>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route>
            <LoginScreen></LoginScreen>
          </Route>
          <Route>
            <MyFiles></MyFiles>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
