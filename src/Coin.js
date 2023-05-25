import React, { Component } from 'react'
import './Coin.css'

class Coin extends Component {
    constructor(props) {
        super(props)
    }
    static defaultProps = {
        coin: {
            name: 'Head',
            imageSource: 'https://en.numista.com/catalogue/photos/malaisie/540-original.jpg'
        }
    }
    render() {
        return (
            <div>
                <img className='Coin-image' src={this.props.coin.imageSource} alt={this.props.coin.name} />
                <div>{this.props.coin.name}</div>
            </div>
        )
    }
}

export default Coin; 