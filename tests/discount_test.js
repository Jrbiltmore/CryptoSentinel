const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DiscountModule Contract", function () {
    let deployer, beneficiary1, beneficiary2;
    let DiscountModule;

    beforeEach(async function () {
        [deployer, beneficiary1, beneficiary2] = await ethers.getSigners();

        const DiscountModuleContract = await ethers.getContractFactory("DiscountModule");
        DiscountModule = await DiscountModuleContract.deploy();
        await DiscountModule.deployed();
    });

    it("Should grant and revoke discounts correctly", async function () {
        await DiscountModule.grantDiscount(beneficiary1.address, 20);
        await DiscountModule.grantDiscount(beneficiary2.address, 10);

        expect(await DiscountModule.getDiscountRate(beneficiary1.address)).to.equal(20);
        expect(await DiscountModule.getDiscountRate(beneficiary2.address)).to.equal(10);

        await DiscountModule.revokeDiscount(beneficiary1.address);

        expect(await DiscountModule.getDiscountRate(beneficiary1.address)).to.equal(0);
    });

    it("Should return the correct list of discounted addresses", async function () {
        await DiscountModule.grantDiscount(beneficiary1.address, 20);
        await DiscountModule.grantDiscount(beneficiary2.address, 10);

        const discountedAddresses = await DiscountModule.getDiscountedAddressList();
        expect(discountedAddresses).to.include(beneficiary1.address);
        expect(discountedAddresses).to.include(beneficiary2.address);
    });

    it("Should correctly identify if an address has a discount", async function () {
        await DiscountModule.grantDiscount(beneficiary1.address, 20);

        expect(await DiscountModule.isDiscounted(beneficiary1.address)).to.be.true;
        expect(await DiscountModule.isDiscounted(beneficiary2.address)).to.be.false;
    });
});
