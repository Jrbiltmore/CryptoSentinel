const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    const DiscountModule = await ethers.getContractAt("DiscountModule", "DISCOUNT_MODULE_CONTRACT_ADDRESS");

    const beneficiaries = [
        { address: "0xAbc123...", rate: 20 },
        { address: "0xDef456...", rate: 10 },
        { address: "0xGhi789...", rate: 15 }
    ];

    for (const beneficiary of beneficiaries) {
        await DiscountModule.grantDiscount(beneficiary.address, beneficiary.rate);
        console.log(`Granted ${beneficiary.rate}% discount to ${beneficiary.address}`);
    }

    const discountedAddresses = await DiscountModule.getDiscountedAddressList();
    console.log("Discounted Addresses:", discountedAddresses);
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
