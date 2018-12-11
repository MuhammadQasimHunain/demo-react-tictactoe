import React from 'react'

export const MovesHistory = ({ moves }) => {
  return (
    <div className="MovesHistory">
      <details>
        <ul>
          {moves}
        </ul>
        <summary>MovesHistory</summary>
      </details>
    </div>
  );
};


// with a functional component render a button, detailing the value and method from the props object
// destructure the value retrieved from props in the argument of the function
export const Square = ({ value, handleClick }) => {
  return (
    <button
      className="Square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

