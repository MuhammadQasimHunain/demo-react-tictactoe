import React, { Component } from 'react';
import { Game } from './components/gameComponents/Game';
import './App.css';

class App extends Component {

   constructor(props) {
      super(props);
      this.state = { Counter: 1 };
      this.state = {
         data:
            [
               {
                  "id": 1,
                  "name": "Foo",
                  "age": "20"
               },
               {
                  "id": 2,
                  "name": "Bar",
                  "age": "30"
               },
               {
                  "id": 3,
                  "name": "Baz",
                  "age": "40"
               }
            ]
      }
   }

   render() {
      return (
         <div>
            <Game></Game>
         </div>
      );
   }
}


export default App;
