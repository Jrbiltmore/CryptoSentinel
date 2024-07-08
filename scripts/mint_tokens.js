const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    
    const ArmyToken = await ethers.getContractAt("ArmyToken", "ARMY_TOKEN_CONTRACT_ADDRESS");
    const NavyToken = await ethers.getContractAt("NavyToken", "NAVY_TOKEN_CONTRACT_ADDRESS");
    const AirForceToken = await ethers.getContractAt("AirForceToken", "AIR_FORCE_TOKEN_CONTRACT_ADDRESS");
    const MarineCorpsToken = await ethers.getContractAt("MarineCorpsToken", "MARINE_CORPS_TOKEN_CONTRACT_ADDRESS");
    const CoastGuardToken = await ethers.getContractAt("CoastGuardToken", "COAST_GUARD_TOKEN_CONTRACT_ADDRESS");
    const SpaceForceToken = await ethers.getContractAt("SpaceForceToken", "SPACE_FORCE_TOKEN_CONTRACT_ADDRESS");
    const ReserveToken = await ethers.getContractAt("ReserveToken", "RESERVE_TOKEN_CONTRACT_ADDRESS");

    const amount = ethers.utils.parseUnits("1000", 18);

    await ArmyToken.mint(deployer.address, amount);
    console.log("Minted ArmyToken");

    await NavyToken.mint(deployer.address, amount);
    console.log("Minted NavyToken");

    await AirForceToken.mint(deployer.address, amount);
    console.log("Minted AirForceToken");

    await MarineCorpsToken.mint(deployer.address, amount);
    console.log("Minted MarineCorpsToken");

    await CoastGuardToken.mint(deployer.address, amount);
    console.log("Minted CoastGuardToken");

    await SpaceForceToken.mint(deployer.address, amount);
    console.log("Minted SpaceForceToken");

    await ReserveToken.mint(deployer.address, amount);
    console.log("Minted ReserveToken");
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
