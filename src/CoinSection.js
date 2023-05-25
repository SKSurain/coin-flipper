import React, { Component } from 'react'
import Coin from './Coin'


class CoinSection extends Component {

    static defaultProps = {
        coins: [
            {
                name: 'Head',
                imageSource: 'https://en.numista.com/catalogue/photos/malaisie/540-original.jpg'
            },
            {
                name: 'Tail',
                imageSource: 'https://thumbs.dreamstime.com/z/malaysian-sen-coin-reverse-isolated-white-background-122801953.jpg'
            }
        ]
    }

    constructor(props) {
        super(props);
        this.state = {
            nFlips: 0,
            nHeads: 0,
            nTails: 0,
            currentCoin: ''
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    generate() {
        this.setState(currentState => ({
            nFlips: currentState.nFlips + 1,
            nHeads: currentState.currentCoin.name === 'Head' ? currentState.nHeads + 1 : currentState.nHeads,
            nTails: currentState.currentCoin.name === 'Tail' ? currentState.nTails + 1 : currentState.nTails
        }))
    }

    randomFlip() {
        let randomFlipper = Math.floor(Math.random() * 2);
        this.setState(currentState => ({
            currentCoin: this.props.coins[randomFlipper]
        }))
        return 0
    }

    clickHandler() {
        this.randomFlip();
        this.generate();
    }

    render() {
        return (
            <div>
                <h2>COIN FLIPPER</h2>
                <Coin coin={this.state.currentCoin} />
                <div>Its been {this.state.nFlips} flips, {this.state.nHeads} heads, {this.state.nTails} tails so far.</div>
                <button onClick={this.clickHandler}>FLIP THE COIN</button>
            </div>
        )
    }
}

export default CoinSection; 