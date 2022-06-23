import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Directory from './components/directory/Directory';
import PrivateRoute from './utils/PrivateRoute'
import LoginScreen from './components/login_screen/LoginScreen';
import User from './components/User';
import File from './components/directory/File';
import { AuthProvider } from './contexts/AuthContext'


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
              <PrivateRoute exact path="/directory/:id">
                <Directory></Directory>
              </PrivateRoute>
              <PrivateRoute exact path="/user">
                <User></User>
              </PrivateRoute>
              <PrivateRoute exact path="/file/:id">
                <File></File>
              </PrivateRoute>
              <PrivateRoute path="*">
                <Home></Home>
              </PrivateRoute>
            {/*</AuthProvider>*/}
          </Switch>
        </div>
    </Router>
  );
}

export default App;
