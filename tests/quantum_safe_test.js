const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("QuantumSafeModule Contract", function () {
    let deployer;
    let QuantumSafeModule, quantumSafeInstance;

    beforeEach(async function () {
        [deployer] = await ethers.getSigners();

        const QuantumSafeModuleFactory = await ethers.getContractFactory("QuantumSafeModule");
        quantumSafeInstance = await QuantumSafeModuleFactory.deploy();
        await quantumSafeInstance.deployed();
    });

    it("Should encrypt and decrypt messages correctly", async function () {
        const message = "Secure message";
        const encryptedMessage = await quantumSafeInstance.encrypt(message);
        const decryptedMessage = await quantumSafeInstance.decrypt(encryptedMessage);

        expect(decryptedMessage).to.equal(message);
    });

    it("Should return different encrypted values for the same message", async function () {
        const message = "Secure message";
        const encryptedMessage1 = await quantumSafeInstance.encrypt(message);
        const encryptedMessage2 = await quantumSafeInstance.encrypt(message);

        expect(encryptedMessage1).to.not.equal(encryptedMessage2);
    });

    it("Should fail to decrypt with incorrect keys", async function () {
        const message = "Secure message";
        const encryptedMessage = await quantumSafeInstance.encrypt(message);
        
        // Assuming we can manipulate the key for testing purposes
        const incorrectKey = await quantumSafeInstance.generateKey();
        await quantumSafeInstance.setKey(incorrectKey);
        
        await expect(quantumSafeInstance.decrypt(encryptedMessage)).to.be.revertedWith("Decryption failed");
    });
});
