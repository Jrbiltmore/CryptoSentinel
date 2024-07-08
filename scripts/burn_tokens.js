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

    const amount = ethers.utils.parseUnits("500", 18);

    await ArmyToken.burn(amount);
    console.log("Burned ArmyToken");

    await NavyToken.burn(amount);
    console.log("Burned NavyToken");

    await AirForceToken.burn(amount);
    console.log("Burned AirForceToken");

    await MarineCorpsToken.burn(amount);
    console.log("Burned MarineCorpsToken");

    await CoastGuardToken.burn(amount);
    console.log("Burned CoastGuardToken");

    await SpaceForceToken.burn(amount);
    console.log("Burned SpaceForceToken");

    await ReserveToken.burn(amount);
    console.log("Burned ReserveToken");
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
