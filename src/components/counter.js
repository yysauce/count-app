import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
    }

    incrementIfOdd() {
        if(this.props.value % 2 != 0){
            this.props.onIncr()
        }
    }

    incrementAsync() {
        setTimeout(this.props.onIncr, 1000)
    }

    render() {
        const {value, onIncr, onDecr} = this.props
        return (
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={onIncr}>
                    +
                </button>
                {' '}
                <button onClick={onDecr}>
                    -
                </button>
                {' '}
                <button onClick={this.incrementIfOdd}>
                    Incr if odd
                </button>
                {' '}
                <button onClick={this.incrementAsync}>
                    incr async
                </button>
            </p>
        )
    }
}

export default Counter