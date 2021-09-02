
import styles from './css/main.module.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chat from './components/Chat';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Chat />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
