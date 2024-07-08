const ethers = require("ethers");

async function connectToMilitaryMobile() {
    // Assuming MilitaryMobile provides a similar interface to MetaMask or Coinbase Wallet
    if (window.militaryMobileWalletProvider) {
        try {
            await window.militaryMobileWalletProvider.enable();
            const provider = new ethers.providers.Web3Provider(window.militaryMobileWalletProvider);
            const signer = provider.getSigner();
            console.log("Connected to MilitaryMobile Wallet");
            return signer;
        } catch (error) {
            console.error("User rejected the request:", error);
        }
    } else {
        console.error("MilitaryMobile Wallet not found. Please install MilitaryMobile Wallet.");
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
    connectToMilitaryMobile,
    getTokenBalance,
    transferTokens,
};
