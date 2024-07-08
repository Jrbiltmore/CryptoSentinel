const ethers = require("ethers");

async function connectToStripe() {
    // Assuming Stripe provides a similar interface to MetaMask or Coinbase Wallet
    if (window.stripeWalletProvider) {
        try {
            await window.stripeWalletProvider.enable();
            const provider = new ethers.providers.Web3Provider(window.stripeWalletProvider);
            const signer = provider.getSigner();
            console.log("Connected to Stripe Wallet");
            return signer;
        } catch (error) {
            console.error("User rejected the request:", error);
        }
    } else {
        console.error("Stripe Wallet not found. Please install Stripe Wallet.");
    }
}

async function getTokenBalance(contractAddress, abi, signer) {
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const balance = await contract.balanceOf(signer.getAddress());
    return ethers.utils.formatUnits(balance, 18);
}

async function transferTokens(contractAddress, abi, signer, recipient, amount) {
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const tx = await contract.transfer(recipient, ethers.utils.parseUnits(amount, 18));
    await tx.wait();
    console.log(`Transferred ${amount} tokens to ${recipient}`);
}

module.exports = {
    connectToStripe,
    getTokenBalance,
    transferTokens,
};
