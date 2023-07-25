import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListEmployee from './components/ListEmployee';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateEmployee from './components/CreateEmployee';
import EditEmployee from './components/EditEmployee';
import ViewEmployee from './components/ViewEmployee';
import ListDepartments from './components/ListDepartment';
import Home from './components/Home'; 

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/employees" component={ListEmployee}></Route>
            <Route path="/add-employee/:empNo" component={CreateEmployee}></Route>
            <Route path="/view-employee/:empNo" component={ViewEmployee}></Route>
            <Route path="/edit-employee/:empNo" component={EditEmployee}></Route>
            <Route path="/departments" component={ListDepartments}></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
