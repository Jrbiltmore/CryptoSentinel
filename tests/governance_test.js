const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Governance Contract", function () {
    let deployer, voter1, voter2, voter3, voter4;
    let Governance;

    beforeEach(async function () {
        [deployer, voter1, voter2, voter3, voter4] = await ethers.getSigners();

        const GovernanceContract = await ethers.getContractFactory("Governance");
        Governance = await GovernanceContract.deploy();
        await Governance.deployed();

        await Governance.addVoter(voter1.address);
        await Governance.addVoter(voter2.address);
        await Governance.addVoter(voter3.address);
        await Governance.addVoter(voter4.address);
    });

    it("Should create and execute a proposal correctly", async function () {
        const proposalDescription = "Proposal to increase staking rewards by 5%";
        await Governance.connect(voter1).createProposal(proposalDescription);
        const proposalId = 0; // Assuming first proposal has ID 0

        expect((await Governance.getProposal(proposalId)).description).to.equal(proposalDescription);

        await Governance.connect(voter1).vote(proposalId);
        await Governance.connect(voter2).vote(proposalId);
        await Governance.connect(voter3).vote(proposalId);
        await Governance.connect(voter4).vote(proposalId);

        const proposal = await Governance.getProposal(proposalId);
        expect(proposal.voteCount).to.equal(4);

        await Governance.executeProposal(proposalId);
        expect((await Governance.getProposal(proposalId)).executed).to.be.true;
    });

    it("Should not allow non-voters to create or vote on proposals", async function () {
        await expect(Governance.createProposal("Invalid proposal")).to.be.revertedWith("Only approved voters can participate");

        await Governance.connect(voter1).createProposal("Valid proposal");
        const proposalId = 0; // Assuming first proposal has ID 0

        await expect(Governance.vote(proposalId)).to.be.revertedWith("Only approved voters can participate");
    });

    it("Should return the correct list of all proposals", async function () {
        await Governance.connect(voter1).createProposal("Proposal 1");
        await Governance.connect(voter2).createProposal("Proposal 2");

        const allProposals = await Governance.getAllProposals();
        expect(allProposals.length).to.equal(2);
        expect(allProposals[0].description).to.equal("Proposal 1");
        expect(allProposals[1].description).to.equal("Proposal 2");
    });

    it("Should add and remove voters correctly", async function () {
        await Governance.removeVoter(voter4.address);
        await expect(Governance.connect(voter4).createProposal("Proposal 3")).to.be.revertedWith("Only approved voters can participate");

        await Governance.addVoter(voter4.address);
        await Governance.connect(voter4).createProposal("Proposal 4");
        expect((await Governance.getProposal(0)).description).to.equal("Proposal 4");
    });
});
