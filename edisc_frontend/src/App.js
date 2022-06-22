import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Directory from './components/Directory';
import PrivateRoute from './utils/PrivateRoute'
import LoginScreen from './components/login_screen/LoginScreen';
import User from './components/User';
import { AuthProvider } from './contexts/AuthContext'
import Add_new from './components/add_new/Add_new'


function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
            {/* <AuthProvider>*/}
              <Route exact path="/login">
                <LoginScreen></LoginScreen>
              </Route>
              <PrivateRoute exact path="/">
                <Home></Home>
              </PrivateRoute>
              {/*<PrivateRoute exact path="/directory/:id">
                <Directory></Directory>
              </PrivateRoute>*/}
              <PrivateRoute exact path="/user">
                <User></User>
              </PrivateRoute>
              <PrivateRoute exact path="/file/:id">
                <User></User>
              </PrivateRoute>
            {/*</AuthProvider>*/}
          </Switch>
        </div>
    </Router>
  );
}

export default App;
