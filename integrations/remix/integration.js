const ethers = require("ethers");

async function connectToRemix() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    console.log("Connected to Remix");
    return signer;
}

async function deployContract(contractABI, contractBytecode, signer, ...args) {
    const factory = new ethers.ContractFactory(contractABI, contractBytecode, signer);
    const contract = await factory.deploy(...args);
    await contract.deployed();
    console.log("Contract deployed at:", contract.address);
    return contract;
}

async function callContractFunction(contractAddress, abi, signer, functionName, ...args) {
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const tx = await contract[functionName](...args);
    await tx.wait();
    console.log(`Called function ${functionName} with args ${args}`);
    return tx;
}

module.exports = {
    connectToRemix,
    deployContract,
    callContractFunction,
};
