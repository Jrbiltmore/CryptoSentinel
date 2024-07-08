const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TokenFactory Contract", function () {
    let deployer;
    let TokenFactory;
    let ArmyToken, NavyToken, AirForceToken, MarineCorpsToken, CoastGuardToken, SpaceForceToken, ReserveToken;

    beforeEach(async function () {
        [deployer] = await ethers.getSigners();

        const TokenFactoryContract = await ethers.getContractFactory("TokenFactory");
        TokenFactory = await TokenFactoryContract.deploy();
        await TokenFactory.deployed();
    });

    it("Should create and deploy ArmyToken", async function () {
        await TokenFactory.createToken(0); // TokenType.Army

        const ArmyTokenAddress = await TokenFactory.getTokenAddress(0);
        expect(ArmyTokenAddress).to.not.equal(ethers.constants.AddressZero);

        ArmyToken = await ethers.getContractAt("ArmyToken", ArmyTokenAddress);
        expect(await ArmyToken.name()).to.equal("ArmyToken");
    });

    it("Should create and deploy NavyToken", async function () {
        await TokenFactory.createToken(1); // TokenType.Navy

        const NavyTokenAddress = await TokenFactory.getTokenAddress(1);
        expect(NavyTokenAddress).to.not.equal(ethers.constants.AddressZero);

        NavyToken = await ethers.getContractAt("NavyToken", NavyTokenAddress);
        expect(await NavyToken.name()).to.equal("NavyToken");
    });

    it("Should create and deploy AirForceToken", async function () {
        await TokenFactory.createToken(2); // TokenType.AirForce

        const AirForceTokenAddress = await TokenFactory.getTokenAddress(2);
        expect(AirForceTokenAddress).to.not.equal(ethers.constants.AddressZero);

        AirForceToken = await ethers.getContractAt("AirForceToken", AirForceTokenAddress);
        expect(await AirForceToken.name()).to.equal("AirForceToken");
    });

    it("Should create and deploy MarineCorpsToken", async function () {
        await TokenFactory.createToken(3); // TokenType.MarineCorps

        const MarineCorpsTokenAddress = await TokenFactory.getTokenAddress(3);
        expect(MarineCorpsTokenAddress).to.not.equal(ethers.constants.AddressZero);

        MarineCorpsToken = await ethers.getContractAt("MarineCorpsToken", MarineCorpsTokenAddress);
        expect(await MarineCorpsToken.name()).to.equal("MarineCorpsToken");
    });

    it("Should create and deploy CoastGuardToken", async function () {
        await TokenFactory.createToken(4); // TokenType.CoastGuard

        const CoastGuardTokenAddress = await TokenFactory.getTokenAddress(4);
        expect(CoastGuardTokenAddress).to.not.equal(ethers.constants.AddressZero);

        CoastGuardToken = await ethers.getContractAt("CoastGuardToken", CoastGuardTokenAddress);
        expect(await CoastGuardToken.name()).to.equal("CoastGuardToken");
    });

    it("Should create and deploy SpaceForceToken", async function () {
        await TokenFactory.createToken(5); // TokenType.SpaceForce

        const SpaceForceTokenAddress = await TokenFactory.getTokenAddress(5);
        expect(SpaceForceTokenAddress).to.not.equal(ethers.constants.AddressZero);

        SpaceForceToken = await ethers.getContractAt("SpaceForceToken", SpaceForceTokenAddress);
        expect(await SpaceForceToken.name()).to.equal("SpaceForceToken");
    });

    it("Should create and deploy ReserveToken", async function () {
        await TokenFactory.createToken(6); // TokenType.Reserve

        const ReserveTokenAddress = await TokenFactory.getTokenAddress(6);
        expect(ReserveTokenAddress).to.not.equal(ethers.constants.AddressZero);

        ReserveToken = await ethers.getContractAt("ReserveToken", ReserveTokenAddress);
        expect(await ReserveToken.name()).to.equal("ReserveToken");
    });
});
