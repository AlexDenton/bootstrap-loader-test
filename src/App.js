import React, { Component} from "react";
// import "./App.css";
import "./App.scss";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <button 
          type="button"
          className={`btn btn-primary btn-sm`}>
            Select
        </button>
      </div>
    );
  }
}

export default App;