module.exports = {
    deployerAccount: process.env.DEPLOYER_ACCOUNT || "",
    initialSupply: 1000000,
    discountRates: {
        activeMilitary: 20,
        formerMilitary: 10,
        family: {
            activeMilitary: 10,
            formerMilitary: 5,
        },
    },
    synergyBonus: {
        gasReduction: 5,
        stakingBonus: 10,
        rewardMultiplier: 3,
    },
    networks: {
        rinkeby: {
            url: process.env.RINKEBY_URL || "",
            accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
        },
        mainnet: {
            url: process.env.MAINNET_URL || "",
            accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
        },
    },
};
