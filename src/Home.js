import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Overview</h2>
	    <p>
To see the <a href="https://www.currentcoin.io">CurrentCoin</a> blockchain app in action, you'll need the following items.
</p><p>
One, a browser.
</p><p>
Two, the <a href="http://current-coin.us-east-2.elasticbeanstalk.com">prototype</a> site.
</p><p>
Three, testnet tokens, which you can obtain on the prototype site.
</p>
	    <p>The Ether you'll use to power the prototype is all from a testnet and doesn't cost anything.</p>
<p>
	    Four, the actually deployed website, which you'll see once you've successfully completed all these steps.
	    </p>
<h2>Instructions</h2>
<p>
1. Start with a <a href="https://www.youtube.com/watch?time_continue=81&v=j23HnORQXvs">YouTube introduction</a> to Ethereum.
</p><p>
Ethereum is the name of the network (basically, the whole thing).
</p><p>
Ether is the name of the associated cryptocurrency which you can buy in exchanges.
</p><p>
<a href="https://www.currentcoin.io">CurrentCoin</a> is an Ethereum-based token (specifically, an <a href="https://blockgeeks.com/guides/ethereum-token/">ERC-20</a> token).
</p><p>
2. Visit the CurrentCoin <a href="http://current-coin.us-east-2.elasticbeanstalk.com/">prototype</a> site.
</p><p>
Select one of the two available templates. Customize it with the text you want.
</p><p>
Click the "Deploy" button in the upper right hand corner.
</p><p>
You should see a message saying it worked; your site has been deployed and you can visit it in 10 to 30 seconds. 
</p>
<img src="metamask_message_token_transfer.png" alt="Transfer Success" />
<p>
3. Go to the test app. It will then show the things you preselected in the app it created on your behalf.
</p><p>
So that completes the process: you used a token to send coins to an address, and in return your customized website was created.
</p>
<p>
Congratulations!
</p>
</div>
    );
  }
}
 
export default Home;
