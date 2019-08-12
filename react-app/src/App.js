import React from 'react';
import './App.css';
import EmployeeContainer from './EmployeeContainer';
import Register from './Register';
import Header from './Header';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import Login from './Login' 

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <EmployeeContainer/>  
//       </div>
//     );
//   }
// }



// Will have to change code to this at end of project-------------------
const My404 = () => {
  return (
    <div>
      You're lost buddy
    </div>
    )
};

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Header />
          <Switch>
            <Route exact path='/Register' component={ Register } />
            <Route exact path='/' component={ Login } />
            <Route exact path='/employees' component={ EmployeeContainer } />
            <Route component={My404}/>
          </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
