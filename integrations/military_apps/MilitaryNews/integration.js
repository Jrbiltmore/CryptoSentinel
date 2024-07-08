const ethers = require("ethers");

async function connectToMilitaryNews() {
    // Assuming MilitaryNews provides a similar interface to MetaMask or Coinbase Wallet
    if (window.militaryNewsWalletProvider) {
        try {
            await window.militaryNewsWalletProvider.enable();
            const provider = new ethers.providers.Web3Provider(window.militaryNewsWalletProvider);
            const signer = provider.getSigner();
            console.log("Connected to MilitaryNews Wallet");
            return signer;
        } catch (error) {
            console.error("User rejected the request:", error);
        }
    } else {
        console.error("MilitaryNews Wallet not found. Please install MilitaryNews Wallet.");
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
    connectToMilitaryNews,
    getTokenBalance,
    transferTokens,
};
