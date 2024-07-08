const ethers = require("ethers");

async function connectToDigitalGarrison() {
    // Assuming DigitalGarrison provides a similar interface to MetaMask or Coinbase Wallet
    if (window.digitalGarrisonWalletProvider) {
        try {
            await window.digitalGarrisonWalletProvider.enable();
            const provider = new ethers.providers.Web3Provider(window.digitalGarrisonWalletProvider);
            const signer = provider.getSigner();
            console.log("Connected to DigitalGarrison Wallet");
            return signer;
        } catch (error) {
            console.error("User rejected the request:", error);
        }
    } else {
        console.error("DigitalGarrison Wallet not found. Please install DigitalGarrison Wallet.");
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
    connectToDigitalGarrison,
    getTokenBalance,
    transferTokens,
};
