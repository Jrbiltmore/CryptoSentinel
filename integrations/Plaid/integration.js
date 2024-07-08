const plaid = require("plaid");

const client = new plaid.Client({
    clientID: process.env.PLAID_CLIENT_ID,
    secret: process.env.PLAID_SECRET,
    env: plaid.environments.sandbox,
});

async function createLinkToken(userID) {
    const response = await client.createLinkToken({
        user: {
            client_user_id: userID,
        },
        client_name: "US Military Crypto",
        products: ["auth", "transactions"],
        country_codes: ["US"],
        language: "en",
    });

    return response.link_token;
}

async function exchangePublicToken(publicToken) {
    const response = await client.exchangePublicToken(publicToken);
    return response.access_token;
}

async function getBalance(accessToken) {
    const response = await client.getBalance(accessToken);
    return response.accounts;
}

async function getTransactions(accessToken, startDate, endDate) {
    const response = await client.getTransactions(accessToken, startDate, endDate);
    return response.transactions;
}

module.exports = {
    createLinkToken,
    exchangePublicToken,
    getBalance,
    getTransactions,
};
