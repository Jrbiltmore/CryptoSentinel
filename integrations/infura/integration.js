const ethers = require("ethers");

async function connectToInfura(projectId) {
    const provider = new ethers.providers.InfuraProvider("homestead", projectId);
    console.log("Connected to Infura");
    return provider;
}

async function getTokenBalance(contractAddress, abi, provider, walletAddress) {
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const balance = await contract.balanceOf(walletAddress);
    return ethers.utils.formatUnits(balance, 18);
}

async function transferTokens(contractAddress, abi, provider, walletAddress, privateKey, recipient, amount) {
    const wallet = new ethers.Wallet(privateKey, provider);
    const contract = new ethers.Contract(contractAddress, abi, wallet);
    const tx = await contract.transfer(recipient, ethers.utils.parseUnits(amount, 18));
    await tx.wait();
    console.log(`Transferred ${amount} tokens to ${recipient}`);
}

module.exports = {
    connectToInfura,
    getTokenBalance,
    transferTokens,
};
