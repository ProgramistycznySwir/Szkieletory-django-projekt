import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import MyFiles from './components/MyFiles';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
           <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/my_files">
            <MyFiles></MyFiles>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
