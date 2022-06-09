import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import MyFiles from './components/MyFiles';
import PrivateRoute from './utils/PrivateRoute'
import LoginScreen from './components/login_screen/LoginScreen';
import { AuthProvider } from './contexts/AuthContext'


function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
            <AuthProvider>
              <Route exact path="/login">
                <LoginScreen></LoginScreen>
              </Route>
              <PrivateRoute exact path="/">
                <Home></Home>
              </PrivateRoute>
              <PrivateRoute exact path="/my_files">
                <MyFiles></MyFiles>
              </PrivateRoute>
            </AuthProvider>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
