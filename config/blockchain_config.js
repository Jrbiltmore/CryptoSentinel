module.exports = {
    blockchain: {
        networks: {
            hardhat: {
                chainId: 1337,
            },
            rinkeby: {
                url: process.env.RINKEBY_URL || "",
                accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
            },
            mainnet: {
                url: process.env.MAINNET_URL || "",
                accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
            },
            goerli: {
                url: process.env.GOERLI_URL || "",
                accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
            },
        },
        gas: {
            price: 20000000000, // 20 Gwei
            limit: 8000000, // 8 million
        },
        etherscan: {
            apiKey: process.env.ETHERSCAN_API_KEY || "your-etherscan-api-key",
        },
    },
};
