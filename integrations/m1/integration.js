const ethers = require("ethers");

async function connectToM1() {
    // Assuming M1 provides a similar interface to MetaMask or Coinbase Wallet
    if (window.m1WalletProvider) {
        try {
            await window.m1WalletProvider.enable();
            const provider = new ethers.providers.Web3Provider(window.m1WalletProvider);
            const signer = provider.getSigner();
            console.log("Connected to M1 Wallet");
            return signer;
        } catch (error) {
            console.error("User rejected the request:", error);
        }
    } else {
        console.error("M1 Wallet not found. Please install M1 Wallet.");
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
    connectToM1,
    getTokenBalance,
    transferTokens,
};
