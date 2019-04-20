import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    // tao tham chieu
    this.inputElement = React.createRef();
    this.inputElement2 = React.createRef();
    
    // --- dat breakpoint
    // debugger;
    // --- dat breakpoint
    //vi du
    // thuoc tinh current tro toi DOM, o day la input
    // this.inputElement.current.focus();
  }
  // Lifecycle
  // Mount: gan vao
  // dam bao khi DOM duoc tao roi moi xu ly
  componentDidMount(){
    this.inputElement.current.focus();
  }
 
  render() {
    // gan tham chieu vao element thong qua thuoc tinh ref
    return (
      <div className="App">
        <form ref = {this.inputElement2}>
          <input type = "text" ref = {this.inputElement}/>
          <input type = "button" onClick = {this.resetForm} value = "reset"/>
        </form>
      </div>
    );
  }
}

export default App;
