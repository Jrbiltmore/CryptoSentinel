const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const ArmyToken = await ethers.getContractFactory("ArmyToken");
    const armyToken = await ArmyToken.deploy();
    await armyToken.deployed();
    console.log("ArmyToken deployed to:", armyToken.address);

    const NavyToken = await ethers.getContractFactory("NavyToken");
    const navyToken = await NavyToken.deploy();
    await navyToken.deployed();
    console.log("NavyToken deployed to:", navyToken.address);

    const AirForceToken = await ethers.getContractFactory("AirForceToken");
    const airForceToken = await AirForceToken.deploy();
    await airForceToken.deployed();
    console.log("AirForceToken deployed to:", airForceToken.address);

    const MarineCorpsToken = await ethers.getContractFactory("MarineCorpsToken");
    const marineCorpsToken = await MarineCorpsToken.deploy();
    await marineCorpsToken.deployed();
    console.log("MarineCorpsToken deployed to:", marineCorpsToken.address);

    const CoastGuardToken = await ethers.getContractFactory("CoastGuardToken");
    const coastGuardToken = await CoastGuardToken.deploy();
    await coastGuardToken.deployed();
    console.log("CoastGuardToken deployed to:", coastGuardToken.address);

    const SpaceForceToken = await ethers.getContractFactory("SpaceForceToken");
    const spaceForceToken = await SpaceForceToken.deploy();
    await spaceForceToken.deployed();
    console.log("SpaceForceToken deployed to:", spaceForceToken.address);

    const ReserveToken = await ethers.getContractFactory("ReserveToken");
    const reserveToken = await ReserveToken.deploy();
    await reserveToken.deployed();
    console.log("ReserveToken deployed to:", reserveToken.address);

    const TokenFactory = await ethers.getContractFactory("TokenFactory");
    const tokenFactory = await TokenFactory.deploy();
    await tokenFactory.deployed();
    console.log("TokenFactory deployed to:", tokenFactory.address);

    const DiscountModule = await ethers.getContractFactory("DiscountModule");
    const discountModule = await DiscountModule.deploy();
    await discountModule.deployed();
    console.log("DiscountModule deployed to:", discountModule.address);

    const SynergyModule = await ethers.getContractFactory("SynergyModule");
    const synergyModule = await SynergyModule.deploy();
    await synergyModule.deployed();
    console.log("SynergyModule deployed to:", synergyModule.address);

    const QuantumSafeLibrary = await ethers.getContractFactory("QuantumSafeLibrary");
    const quantumSafeLibrary = await QuantumSafeLibrary.deploy();
    await quantumSafeLibrary.deployed();
    console.log("QuantumSafeLibrary deployed to:", quantumSafeLibrary.address);

    const Governance = await ethers.getContractFactory("Governance");
    const governance = await Governance.deploy();
    await governance.deployed();
    console.log("Governance deployed to:", governance.address);
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
