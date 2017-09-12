import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor (){
        super();
        this.state = {
          userSelection:'',
        };
 }
    handleLanguageSelection = (event) => {
      this.setState ({
      userSelection: event.target.value
      });
    }
    handleSubmit = () => {
      // remember when copying state you have to copy the object
      const copyState = Object.assign({} , this.state);
      // string
      // copyState.commentList.push(this.state.commentBox);
      // object
    const initState = {
        words: [
          { "en": "cat", "de": "Katz", "fr": "chat", "sp": "gato" },
          { "en": "dog", "de": "Hund", "fr": "chien", "sp": "perro" },
          { "en": "man", "de": "Mann", "fr": "homme", "sp": "hombre" },
          { "en": "woman", "de": "Frau", "fr": "femme", "sp": "mujer" },
          { "en": "boy", "de": "Junge", "fr": "garcon", "sp": "chico" },
          { "en": "girl", "de": "Madchen", "fr": "fille", "sp": "niña" },
          { "en": "house", "de": "Haus", "fr": "maison", "sp": "casa" },
          { "en": "car", "de": "Auto", "fr": "voiture", "sp": "coche" },
          { "en": "plane", "de": "Fleugzug", "fr": "avion", "sp": "avión" },
          { "en": "butterfly", "de": "Schmetterling", "fr": "papillon", "sp": "mariposa" },
        ]
      };

      copyState.translation.push(initState);
      copyState.userSelection = '';
      this.setState(copyState);
    }

}
