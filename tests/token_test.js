const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token Contracts", function () {
    let deployer;
    let ArmyToken, NavyToken, AirForceToken, MarineCorpsToken, CoastGuardToken, SpaceForceToken, ReserveToken;

    beforeEach(async function () {
        [deployer] = await ethers.getSigners();

        const ArmyTokenFactory = await ethers.getContractFactory("ArmyToken");
        ArmyToken = await ArmyTokenFactory.deploy();
        await ArmyToken.deployed();

        const NavyTokenFactory = await ethers.getContractFactory("NavyToken");
        NavyToken = await NavyTokenFactory.deploy();
        await NavyToken.deployed();

        const AirForceTokenFactory = await ethers.getContractFactory("AirForceToken");
        AirForceToken = await AirForceTokenFactory.deploy();
        await AirForceToken.deployed();

        const MarineCorpsTokenFactory = await ethers.getContractFactory("MarineCorpsToken");
        MarineCorpsToken = await MarineCorpsTokenFactory.deploy();
        await MarineCorpsToken.deployed();

        const CoastGuardTokenFactory = await ethers.getContractFactory("CoastGuardToken");
        CoastGuardToken = await CoastGuardTokenFactory.deploy();
        await CoastGuardToken.deployed();

        const SpaceForceTokenFactory = await ethers.getContractFactory("SpaceForceToken");
        SpaceForceToken = await SpaceForceTokenFactory.deploy();
        await SpaceForceToken.deployed();

        const ReserveTokenFactory = await ethers.getContractFactory("ReserveToken");
        ReserveToken = await ReserveTokenFactory.deploy();
        await ReserveToken.deployed();
    });

    it("Should mint the correct initial supply for each token", async function () {
        const initialSupply = ethers.utils.parseUnits("1000000", 18);

        expect(await ArmyToken.totalSupply()).to.equal(initialSupply);
        expect(await NavyToken.totalSupply()).to.equal(initialSupply);
        expect(await AirForceToken.totalSupply()).to.equal(initialSupply);
        expect(await MarineCorpsToken.totalSupply()).to.equal(initialSupply);
        expect(await CoastGuardToken.totalSupply()).to.equal(initialSupply);
        expect(await SpaceForceToken.totalSupply()).to.equal(initialSupply);
        expect(await ReserveToken.totalSupply()).to.equal(initialSupply);
    });

    it("Should allow transfer of tokens with discount applied", async function () {
        const transferAmount = ethers.utils.parseUnits("100", 18);
        const discountRate = 20;

        await ArmyToken.grantDiscount(deployer.address, discountRate);

        await ArmyToken.transfer(deployer.address, transferAmount);

        const discount = transferAmount.mul(discountRate).div(100);
        const expectedAmount = transferAmount.sub(discount);

        expect(await ArmyToken.balanceOf(deployer.address)).to.equal(
            ethers.utils.parseUnits("1000000", 18).sub(transferAmount).add(expectedAmount)
        );
    });

    it("Should burn tokens correctly", async function () {
        const burnAmount = ethers.utils.parseUnits("500", 18);

        await ArmyToken.burn(burnAmount);

        expect(await ArmyToken.totalSupply()).to.equal(ethers.utils.parseUnits("999500", 18));
    });
});
