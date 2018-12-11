import React from 'react';
import { Square } from './functionalComponents'
export class Board extends React.Component {

  render() {
    // map through the array and create nine squares with the specified value and onClick method
    const squares = this.props.squares.map((square, index) => {
      return (
        <Square
          value={square}
          key={index}
          handleClick={() => this.props.handleClick(index)}
        />
      );
    })
    // render a container in which the nine squares are wrapped
    return (
      <div className="Board">
        {squares}
      </div>
    );
  }

 


}