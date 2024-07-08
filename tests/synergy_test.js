const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SynergyModule Contract", function () {
    let deployer, beneficiary1, beneficiary2;
    let SynergyModule;

    beforeEach(async function () {
        [deployer, beneficiary1, beneficiary2] = await ethers.getSigners();

        const SynergyModuleContract = await ethers.getContractFactory("SynergyModule");
        SynergyModule = await SynergyModuleContract.deploy();
        await SynergyModule.deployed();
    });

    it("Should grant and revoke synergies correctly", async function () {
        await SynergyModule.grantSynergy(beneficiary1.address, 10, 15, 5);
        await SynergyModule.grantSynergy(beneficiary2.address, 5, 10, 3);

        const synergy1 = await SynergyModule.getSynergyDetails(beneficiary1.address);
        expect(synergy1.gasReduction).to.equal(10);
        expect(synergy1.stakingBonus).to.equal(15);
        expect(synergy1.rewardMultiplier).to.equal(5);

        const synergy2 = await SynergyModule.getSynergyDetails(beneficiary2.address);
        expect(synergy2.gasReduction).to.equal(5);
        expect(synergy2.stakingBonus).to.equal(10);
        expect(synergy2.rewardMultiplier).to.equal(3);

        await SynergyModule.revokeSynergy(beneficiary1.address);

        const revokedSynergy = await SynergyModule.getSynergyDetails(beneficiary1.address);
        expect(revokedSynergy.gasReduction).to.equal(0);
        expect(revokedSynergy.stakingBonus).to.equal(0);
        expect(revokedSynergy.rewardMultiplier).to.equal(0);
    });

    it("Should return the correct list of synergy addresses", async function () {
        await SynergyModule.grantSynergy(beneficiary1.address, 10, 15, 5);
        await SynergyModule.grantSynergy(beneficiary2.address, 5, 10, 3);

        const synergyAddresses = await SynergyModule.getSynergyAddressList();
        expect(synergyAddresses).to.include(beneficiary1.address);
        expect(synergyAddresses).to.include(beneficiary2.address);
    });

    it("Should correctly identify if an address has synergy", async function () {
        await SynergyModule.grantSynergy(beneficiary1.address, 10, 15, 5);

        expect(await SynergyModule.hasSynergy(beneficiary1.address)).to.be.true;
        expect(await SynergyModule.hasSynergy(beneficiary2.address)).to.be.false;
    });
});
