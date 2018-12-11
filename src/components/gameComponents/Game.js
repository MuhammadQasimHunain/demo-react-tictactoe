import React from 'react'
import { MovesHistory } from './functionalComponents'
import { Board } from './board'


// in the main React component class manage the state of the pplication
export class Game extends React.Component {
    constructor(props) {
        super(props);
        // STATE
        // Initilaize array state
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            xNext: true,
            index: 0
        }
    }

    // Handle click on tile
    handleClick(i) {
        //  get array of objects
        const history = this.state.history.slice(0, this.state.index + 1);
        // get current object
        const current = history[this.state.index];
        // Appending array
        const squares = [...current.squares];
        // Check game status
        if (this.declareWinner(squares) || squares[i]) {
            return;
        }
        // alter the value of the respective button including an X or O value
        squares[i] = (this.state.xNext) ? 'X' : 'O';
        // Toggeling between two states
        this.setState({
            history: [...history, { squares }],
            xNext: !this.state.xNext,
            index: history.length
        });
    }

    // create a function to jump to a specific turn
    jumpTo(index) {
        //GO to specfic state
        this.setState({
            index,
            xNext: (index % 2) === 0
        })
    }

    render() {
        // retrieve the history array and the last item
        const history = this.state.history;
        const current = history[this.state.index];

        // describe a message based on whether the current array of squares has a winner
        // detail also a circumstance in which all squares have been played and no winner is present
        const winner = this.declareWinner(current.squares);
        let status;
        if (winner) {
            status = `Player #: ${winner}! Wins`
        } else {
            status = `Player turn: ${(this.state.xNext) ? 'X' : 'O'}`;
        }
        if (this.state.index === 9 && !winner) {
            status = 'Game draw';
        }

        // for the time traveling feature
        // create multiple list items nesting button elements with the jumpTo function
        const moves = history.map((squares, index) => {
            // Restart Game and Move history
            const description = index ? `Move #${index}` : `Restart`;
            return (
                <li key={index}>
                    <button onClick={() => this.jumpTo(index)}>{description}</button>
                </li>
            );
        });

        return (
            <div className="Game">
                <h1>Demo TicTacToe</h1>
                <p>{status}</p>
                {/* in the board pass the method to update the state as well as the last array of values */}
                <Board
                    handleClick={(i) => this.handleClick(i)}
                    squares={current.squares}
                />
                {/* in the time travel component pass the series of list items */}
                <MovesHistory moves={moves} />
            </div>
        );
    }


    // create a function to establish a winner
    // accepting as argument an array of 9 values describing the board
    declareWinner = (squares) => {
        //Winning states
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        // loop through the array of winning combinations
        for (let i = 0; i < lines.length; i += 1) {
            // destructure the indexes from the array of winning combinations
            const [a, b, c] = lines[i];
            // if the values in the squares array are the same (and not null) return the winner, else return null
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

}