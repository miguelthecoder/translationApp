import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor (){
        super();
        this.state = {
          userSelection:'',
          selection:[],
          userInput:'',
          translation:[]
        };
  };
  handleChange = (event) => {
    this.setState ({
      userInput: event.target.value.toString().toLowerCase()
    });
  }
  handleUserLanChange = (event) => {
    this.setState ({
      userSelection: event.target.value
    });
  }
  handleTranslationSubmit = () => {
    /// if the input is empty return or stop from executing.
    if (this.state.userInput === "") {
      return;
    }
    // remember when copying state you have to copy the object
    const copyState = Object.assign({} , this.state);
    // string
    // object
    const word ={
    word: this.state.userInput,
    translation:[],
    userInput:''
  };
    copyState.translation.push(word);
    copyState.userInput = '';
    this.setState(copyState);
  }


  render() {
      const translation = this.state.translation.map((input, i) => {
        return (

          ///shows up on console.
        <div className="translation"key={i}>
          <span>{input.input}</span>
        </div>
      )
      })
    return (
      <div className="App">
        <div className="App-header">
          <h2>R2H Translate</h2>
        </div>
        <div className="App-intro">
        <p>Please Select a language</p>
        <select>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
          <option value="sp">Spanish</option>
        </select>
        <button>Select</button>
        <div className="translate">
          <p>Enter the translation</p>
        <input value={this.state.userInput} placeholder="Translate"onChange={this.handleChange} />
          <button onClick={this.handleTranslationSubmit}>Submit</button>
        </div>
      <div className="input">
        {translation.userInput}
      </div>
        </div>
      </div>
    );
  }
}

export default App;
