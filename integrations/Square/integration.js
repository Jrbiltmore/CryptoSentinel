const ethers = require("ethers");

async function connectToSquare() {
    // Assuming Square provides a similar interface to MetaMask or Coinbase Wallet
    if (window.squareWalletProvider) {
        try {
            await window.squareWalletProvider.enable();
            const provider = new ethers.providers.Web3Provider(window.squareWalletProvider);
            const signer = provider.getSigner();
            console.log("Connected to Square Wallet");
            return signer;
        } catch (error) {
            console.error("User rejected the request:", error);
        }
    } else {
        console.error("Square Wallet not found. Please install Square Wallet.");
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
    connectToSquare,
    getTokenBalance,
    transferTokens,
};
