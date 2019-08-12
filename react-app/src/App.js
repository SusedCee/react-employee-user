import React, { Component } from 'react';
import './App.css';
import EmployeeContainer from './EmployeeContainer';
// import { Route, Switch } from 'react-router-dom';
// import Register from './Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EmployeeContainer/>
        
      </div>
    );
  }
}



// Will have to change code to this at end of project-------------------
// const My404 = () => {
//   return (
//     <div>
//       You are lost buddy
//       </div>
//       )
// };

// function App() {
//   return (
//     <main>
//         <Switch>
//           <Route exact path='/' component={Register} />
//           <Route exact path='/employees' component={ EmployeeContainer} />
//           <Route component={My404}/>
//         </Switch>
//     </main>
//   );
// }

export default App;
