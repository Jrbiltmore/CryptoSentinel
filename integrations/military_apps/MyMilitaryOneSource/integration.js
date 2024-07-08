const ethers = require("ethers");

async function connectToMyMilitaryOneSource() {
    // Assuming MyMilitaryOneSource provides a similar interface to MetaMask or Coinbase Wallet
    if (window.myMilitaryOneSourceWalletProvider) {
        try {
            await window.myMilitaryOneSourceWalletProvider.enable();
            const provider = new ethers.providers.Web3Provider(window.myMilitaryOneSourceWalletProvider);
            const signer = provider.getSigner();
            console.log("Connected to MyMilitaryOneSource Wallet");
            return signer;
        } catch (error) {
            console.error("User rejected the request:", error);
        }
    } else {
        console.error("MyMilitaryOneSource Wallet not found. Please install MyMilitaryOneSource Wallet.");
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
    connectToMyMilitaryOneSource,
    getTokenBalance,
    transferTokens,
};
