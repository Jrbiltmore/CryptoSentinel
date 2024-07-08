const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    const SynergyModule = await ethers.getContractAt("SynergyModule", "SYNERGY_MODULE_CONTRACT_ADDRESS");

    const beneficiaries = [
        { address: "0xAbc123...", gasReduction: 10, stakingBonus: 15, rewardMultiplier: 5 },
        { address: "0xDef456...", gasReduction: 5, stakingBonus: 10, rewardMultiplier: 3 },
        { address: "0xGhi789...", gasReduction: 8, stakingBonus: 12, rewardMultiplier: 4 }
    ];

    for (const beneficiary of beneficiaries) {
        await SynergyModule.grantSynergy(beneficiary.address, beneficiary.gasReduction, beneficiary.stakingBonus, beneficiary.rewardMultiplier);
        console.log(`Granted synergy to ${beneficiary.address} with gas reduction ${beneficiary.gasReduction}%, staking bonus ${beneficiary.stakingBonus}%, reward multiplier ${beneficiary.rewardMultiplier}%`);
    }

    const synergyAddresses = await SynergyModule.getSynergyAddressList();
    console.log("Synergy Addresses:", synergyAddresses);
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
