const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    const QuantumSafeModule = await ethers.getContractFactory("QuantumSafeModule");
    const quantumSafeInstance = await QuantumSafeModule.deploy();
    await quantumSafeInstance.deployed();

    console.log("QuantumSafeModule deployed to:", quantumSafeInstance.address);

    // Example usage of the quantum-safe functions
    const message = "Secure message";
    const encryptedMessage = await quantumSafeInstance.encrypt(message);
    console.log("Encrypted message:", encryptedMessage);

    const decryptedMessage = await quantumSafeInstance.decrypt(encryptedMessage);
    console.log("Decrypted message:", decryptedMessage);
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
