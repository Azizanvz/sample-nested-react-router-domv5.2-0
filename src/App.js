import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Main from './Main.js';
import AdminMain from './AdminMain';

function App() {
  return(<>
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={Main} />
      <Redirect from="/" exact to="/home" />
      <Route path="/admin-panel" component={AdminMain} />
    </Switch>
  </BrowserRouter>
  </>)
}


export default App;
