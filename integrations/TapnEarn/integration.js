const ethers = require("ethers");

async function connectToTapnEarn() {
    // Assuming TapnEarn provides a similar interface to MetaMask or Coinbase Wallet
    if (window.tapnEarnWalletProvider) {
        try {
            await window.tapnEarnWalletProvider.enable();
            const provider = new ethers.providers.Web3Provider(window.tapnEarnWalletProvider);
            const signer = provider.getSigner();
            console.log("Connected to TapnEarn Wallet");
            return signer;
        } catch (error) {
            console.error("User rejected the request:", error);
        }
    } else {
        console.error("TapnEarn Wallet not found. Please install TapnEarn Wallet.");
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
    connectToTapnEarn,
    getTokenBalance,
    transferTokens,
};
