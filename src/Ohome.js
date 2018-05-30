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
It must be <a href="https://www.google.com/chrome/">Chrome</a> or <a href="https://brave.com/">Brave</a>, a browser from the creator of JavaScript, Brendan Eich.
</p><p>
Two, the <a href="http://current-coin.us-east-2.elasticbeanstalk.com">prototype</a> site.
</p><p>
Three, the browser extension we'll be using to work with Ethereum, <a href="https://metamask.io/">Metamask</a>.
</p><p>
This is where you'll store your Ether on your home computer. It's like holding cash, as you might in a box in your house.
</p><p>
It's also the connecting piece between your wallet and the Internet. So in that sense it's like your bank, too.
</p>
	    <p>The Ether you'll use to power the prototype is all testnet Ether and doesn't cost anything.</p>
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
2. Install <a href="https://metamask.io">Metamask</a>. You'll have to use either Chrome or the Brave browser for this.
</p><p>
All of the screenshots in this guide were taken from the <a href="https://brave.com/">Brave</a> browser. 
</p><p>
You may need to use Brave if Chrome doesn't work as intended with Metamask.
</p><p>
The failure step, if it does occur, is the notification step, under Step 5 (Suddenly the Metamask icon will have a little "1" next to it...). This is the most likely place for you to get stuck.
</p><p>
If there's no notification at that point, and Metamask isn't showing anything, you'll have to switch to Brave, or disable whatever it is in Chrome that's blocking.
</p><p>
After Metamask is installed, in Chrome or Brave, you'll see a little Fox face icon in your browser. 
</p>
<img src="metamask_browser_icon.png" alt="Create Account" />
<p>
This is important because, to get the prototype to work, it's not enough to just install it in your browser. You'll actually have to click on the Fox icon and interact with its own special Metamask menu.
</p><p>
You can't just stay in the browser the whole time and get the prototype to work from the sites you're visiting. This will get you about 90% of the way there, but 10% still has to be done from within the Metamask extension menu.
</p><p>
3. Log in to Metamask and click "Create account".
</p>
<img src="metamask_create_account.png" alt="Create Account" />
<p>
After this is done you should be able to work with this Ethereum address, with your Ropsten testnet Ether, to get the prototype to work. 
</p><p>
Copy the address of this new account to your clipboard. Use the option for this in Metamask, which you can find after clicking the three horizontal dots in the account menu.
</p>
<img src="metamask_copy_address_to_clipboard.png" alt="Copy Address" />
<p>
	    4. Get free Ether from a Ropsten testnet faucet, from <a href="http://faucet.ropsten.be:3001/">here</a> or any other one you can find on Google.
</p><p>
Ropsten is just like real Ether except it's not worth anything and the security around it is more lax, since it doesn't matter if it's stolen since it's free. Besides that it has the same functionality as regular Ether, so it's perfect for testing.
</p><p>
Send it to the Ethereum address you earlier copied to the clipboard.
	    </p><p>
	    Switch to the Ropsten test network in order to see this Ether within your account.
	    </p>
<img src="metamask_ropsten_test_network.png" alt="Ropsten" />
	    <p>	    
5. Visit the CurrentCoin <a href="http://current-coin.us-east-2.elasticbeanstalk.com/">prototype</a> site.
</p><p>
Select one of the two available templates. Customize it with the text you want.
</p><p>
Click the "Deploy" button in the upper right hand corner.
</p><p>
Suddenly the Metamask icon will have a little "1" next to it, meaning it wants to communicate with you (see screenshot). It's pretty subtle and easy to miss - you have to look right at the Metamask fox face icon in your browser to notice it. 
</p>
<img src="metamask_fox_icon_notification_you_have_a_message_to_approve.png" alt="Approve" />
<p>
So go back to Metamask and approve the transaction from their menu, by pressing "Submit".</p> 
<img src="metamask_confirm_txn.png" alt="Confirm" />
<p>
Wait for a little while, like 30 seconds to a minute. It might seem like it's not doing anything, but it's working.
</p><p>
You should then see a message saying it worked, that your site has been deployed and you can visit it in 10 to 30 seconds. 
</p>
<img src="metamask_message_token_transfer.png" alt="Transfer Success" />
<p>
6. Go to the test app. It will then show the things you preselected in the app it created on your behalf.
</p><p>
So that completes the process: you used a token to send coins to an address, and in return your customized website was created.
</p>
<p>
Congrats!
</p>
</div>
    );
  }
}
 
export default Home;
