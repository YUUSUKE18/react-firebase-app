import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Dashboard from './components/dashboard/DashBoard'
import ProjectDetail from './components/project/ProjectDetail'
import SingedIn from './components/auth/SingedIn'
import SingUp from './components/auth/SignUp'




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetail} />
          <Route path='/signedin' component={SingedIn} />
          <Route path='/signup' component={SingUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
