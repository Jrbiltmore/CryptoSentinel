const ethers = require("ethers");

async function connectToMilitaryPay() {
    // Assuming MilitaryPay provides a similar interface to MetaMask or Coinbase Wallet
    if (window.militaryPayWalletProvider) {
        try {
            await window.militaryPayWalletProvider.enable();
            const provider = new ethers.providers.Web3Provider(window.militaryPayWalletProvider);
            const signer = provider.getSigner();
            console.log("Connected to MilitaryPay Wallet");
            return signer;
        } catch (error) {
            console.error("User rejected the request:", error);
        }
    } else {
        console.error("MilitaryPay Wallet not found. Please install MilitaryPay Wallet.");
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
    connectToMilitaryPay,
    getTokenBalance,
    transferTokens,
};
