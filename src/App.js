import React, { Component } from 'react';
//import logo from './logo.svg';
import './firstComponent.css';
 import SecondComponent  from './learning-react/FirstComponent';
 import ThirdComponent from './learning-react/ThirdComponent';
 import App  from './learning-react/App';
 import Counter from './Counter/counter';


//Class Component
class firstComponent extends Component
{
  render() {
    return (
    // <div className="firstComponent">
    //   <button>Counter</button>
      <Counter>0</Counter>
    // </div>
    );
  }
}

class Elearning extends Component
{
  render() {
    return (
    <div className="Elearning">

      <App></App>
      FirstComponent!!
      <SecondComponent></SecondComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>

     
    </div>
    );
  }
}
//export default App;
export default firstComponent;