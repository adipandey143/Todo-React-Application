import React, { Component } from 'react';
import './Counter.css';
export default class Counter extends Component
{
  constructor(){
    super();
    this.state={
      counter: 0
    }
    this.increment=this.increment.bind(this);
  }
  //render= () => { this arrow method prevents us to explicit bind the function with this 
    render() {
    return (
    <div className="SecondComponent">
      <button onClick={this.increment}>Counter</button>
     <span className="count" 
     style={{fontSize : "50px"}}>  
       {this.state.counter}</span>
    </div>
    //inline javascript styling
    );
  }
  increment() {
    //console.log('Increment');
   // this.state.counter++;  //Bad practice, should not set state directly.
    this.setState({ //whatever value to you pass in the setState,it will set it in the exisiting state
      counter: this.state.counter + 1
    });
}
  }
 
