import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
<h2>Instructions</h2>
<p>
Welcome to CurrentCoin! We're excited to share our vision of website deployment in 2018, using the full power of a distributed ledger.

Imagine creating a your own pool of value, stored as CurrentCoin, renewed on your personal schedule.

Create your own website for your business powered by a continuous stream of cryptocurrency.

Decide for yourself the time you need to deploy based on your personal needs and without scheduled monthly renewal deadlines.

Visit the CurrentCoin <a href="http://current-coin.us-east-2.elasticbeanstalk.com/">prototype</a> site.
</p><p>
	    You are automatically given demonstration CurrentCoin to use the prototype. This CurrentCoin has no value, since this is a demo on a test network.
</p>
<p>	    <img src="balance.png" alt="Available templates" /></p>
<h2>Steps</h2>
<p>
Select one of the available templates.
</p>
<img src="select_template.png" alt="Available templates" />
<p>
Customize it with the text you want.
</p>
<img src="custom_text.png" alt="Customize text" />
<p>
Click the "Deploy Service" button in the upper right hand corner.
</p>
<img src="deploy.png" alt="Deploy button" />
<p>
You should see a message saying it worked; your site will be available in 1 to 2 minutes.
</p>
<img src="service_available.png" alt="Service available" />
<p>
You will also see the progress in the lower left hand corner.
	</p>
	    <p>
	    <img src="transferring.png" alt="Transferring" /></p><p>
	    Once the coins are confirmed as transferred, your deployment will begin.</p><p>
<img src="transferred.png" alt="Transfered" /></p>
<p>
When both checkmarks appear, your site will be available at the link provided.
</p><p>
This completes the process: you used a token to send coins to an address, and in return your customized website was created.
</p>
<p>
Congratulations!
	</p>
<h2> Context </h2>
<p>
If you are new to Ethereum and would like to learn more, start with this <a href="https://www.youtube.com/watch?v=j23HnORQXvs">YouTube introduction</a> to Ethereum.
</p><p>
<a href="https://www.currentcoin.io">CurrentCoin</a> is an Ethereum-based token (specifically, an <a href="https://blockgeeks.com/guides/ethereum-token/">ERC-20</a> token).
</p>
</div>
    );
  }
}

export default Home;
