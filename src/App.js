import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import About from './Containers/About/About';
import ContactMe from './Containers/ContactMe/ContactMe'
import Cv from './Containers/CV/CV';
import LandingPage from './Containers/LandingPage/LandingPage';
import MasterThesis from './Containers/Work/MasterThesis';
import Website from './Containers/Work/Website';
import Work from './Containers/Work/Work';

class App extends Component {

render(){
  return(
    <div>
      <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
    <Switch>
      <Route path = "/" exact component = {LandingPage}/>
      <Route path = "/about" component  ={About}/>
      <Route path = "/work" component = {Work}/>
      <Route path = "/thesis" component = {MasterThesis}/>
      <Route path = "/website" component = {Website}/>
      <Route path = "/CV" component = {Cv}/>
      <Route path = "/ContactMe" component = {ContactMe}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

}
export default App;
