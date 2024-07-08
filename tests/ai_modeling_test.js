const { expect } = require("chai");
const { predictTokenPerformance, fineTuneModel, getEmbeddings } = require("../scripts/ai_modeling");

describe("AI Modeling", function () {
    it("Should predict token performance", async function () {
        const tokenData = { token: "USMCoin", value: 100 };
        const prediction = await predictTokenPerformance(tokenData);
        expect(prediction).to.be.a("string");
    });

    it("Should fine-tune the AI model", async function () {
        const trainingData = "path/to/training/data.json";
        const fineTuneResponse = await fineTuneModel(trainingData);
        expect(fineTuneResponse).to.have.property("id");
    });

    it("Should get embeddings for text", async function () {
        const text = "US Military Crypto";
        const embeddings = await getEmbeddings(text);
        expect(embeddings).to.be.an("array");
    });
});
