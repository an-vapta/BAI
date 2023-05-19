import React, { Component } from 'react';
import './Product.css';

export default class Product extends Component {
  
  /****************************
  Wrong
  this.state.comment = 'Hello';
  Instead, use setState():
  
   Correct
  this.setState({ comment: 'Hello' });
  ****************************/
 
  state = {
    cart: [],
    total: 0
  }

  currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }

  add() {
    this.setState({
      cart: ["MY"],
      total: this.state.total + 1
    })
  }

  getTotal() {
    return this.state.total.toLocaleString(undefined, this.currencyOptions)
  }

  render() {
    return (
      <div className="wrapper">
        <div>
          Shopping Cart: {this.state.cart.length} total items.
        </div>
        <div>Total {this.getTotal()}</div>

        <div className="product"><span role="img" aria-label="ice cream">🍦</span></div>
        <button onClick={(e) => { this.add() }}>Add</button> <button>Remove</button>
      </div>
    )
  }
}