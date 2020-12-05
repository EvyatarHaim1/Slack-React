import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="app_body">
            <Sidebar />

            <Switch>
                <Route path="/room/:roomId">
                    <Chat />
                </Route>

                <Route path="/">
                </Route>

            </Switch> 
        </div>
      </Router>
    </div>
  );
}

export default App;
