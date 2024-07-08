const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    const contractAddresses = {
        ArmyToken: "ARMY_TOKEN_CONTRACT_ADDRESS",
        NavyToken: "NAVY_TOKEN_CONTRACT_ADDRESS",
        AirForceToken: "AIR_FORCE_TOKEN_CONTRACT_ADDRESS",
        MarineCorpsToken: "MARINE_CORPS_TOKEN_CONTRACT_ADDRESS",
        CoastGuardToken: "COAST_GUARD_TOKEN_CONTRACT_ADDRESS",
        SpaceForceToken: "SPACE_FORCE_TOKEN_CONTRACT_ADDRESS",
        ReserveToken: "RESERVE_TOKEN_CONTRACT_ADDRESS",
        TokenFactory: "TOKEN_FACTORY_CONTRACT_ADDRESS",
        DiscountModule: "DISCOUNT_MODULE_CONTRACT_ADDRESS",
        SynergyModule: "SYNERGY_MODULE_CONTRACT_ADDRESS",
        QuantumSafeLibrary: "QUANTUM_SAFE_LIBRARY_CONTRACT_ADDRESS",
        Governance: "GOVERNANCE_CONTRACT_ADDRESS"
    };

    const upgradeableContracts = [
        { name: "ArmyToken", contractFactory: "ArmyToken", address: contractAddresses.ArmyToken },
        { name: "NavyToken", contractFactory: "NavyToken", address: contractAddresses.NavyToken },
        { name: "AirForceToken", contractFactory: "AirForceToken", address: contractAddresses.AirForceToken },
        { name: "MarineCorpsToken", contractFactory: "MarineCorpsToken", address: contractAddresses.MarineCorpsToken },
        { name: "CoastGuardToken", contractFactory: "CoastGuardToken", address: contractAddresses.CoastGuardToken },
        { name: "SpaceForceToken", contractFactory: "SpaceForceToken", address: contractAddresses.SpaceForceToken },
        { name: "ReserveToken", contractFactory: "ReserveToken", address: contractAddresses.ReserveToken },
        { name: "TokenFactory", contractFactory: "TokenFactory", address: contractAddresses.TokenFactory },
        { name: "DiscountModule", contractFactory: "DiscountModule", address: contractAddresses.DiscountModule },
        { name: "SynergyModule", contractFactory: "SynergyModule", address: contractAddresses.SynergyModule },
        { name: "QuantumSafeLibrary", contractFactory: "QuantumSafeLibrary", address: contractAddresses.QuantumSafeLibrary },
        { name: "Governance", contractFactory: "Governance", address: contractAddresses.Governance }
    ];

    for (const contract of upgradeableContracts) {
        const ContractFactory = await ethers.getContractFactory(contract.contractFactory);
        const upgradedContract = await ContractFactory.deploy();
        await upgradedContract.deployed();
        console.log(`Upgraded ${contract.name} to new address:`, upgradedContract.address);
    }
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
