import React, { Component } from "react";
 
class Background extends Component {
  render() {
    return (
      <div>
        <h2>CurrentCoin</h2>
            <p>
	    CurrentCoin is an ERC-20 coin based on Ethereum.
	    </p>
	    <p>
	    Our goals are as follows:
	</p>
        <ol>
            <li>Fast software deployment</li>
          <li>Ease of use</li>
          <li>Transparency</li>
          <li>Simplicity</li>
          <li>User-friendliness</li>
            </ol>
	    <p>You can <a href="https://www.currentcoin.io">read more</a> about CurrentCoin on our main page, or <a href="/#/contact">contact us</a> for more information.</p>
      </div>
    );
  }
}
 
export default Background;
