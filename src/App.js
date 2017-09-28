import React, { Component } from 'react';
import logo from './Teis.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={{
          width: "100%", 
          height: "160px",
          minHeight: "120px",  
          backgroundColor: "#132135", 
          backgroundImage: `url(${logo})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: "center",
          backgroundSize: "280px 280px",
          marginTop: 30
        }}>
        </header>
        <div className="Content">
        <div className="BoxOne"> 
          <p className="p1">
            Teis is a proprietary cryptocurrency trading firm.
          </p>
          <p className="p2">
            We focus on medium/high-frequency statistical arbitrage, exchange-traded derivatives and algorithmic market-making.
          </p>
        </div>
        <div className="BoxTwo">
          <p className="contact">
            info@teis.capital
          </p>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
