const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    const Governance = await ethers.getContractAt("Governance", "GOVERNANCE_CONTRACT_ADDRESS");

    // Create a new proposal
    const proposalDescription = "Proposal to increase the staking rewards by 5%";
    await Governance.createProposal(proposalDescription);
    console.log("Created new proposal:", proposalDescription);

    // Vote on the proposal
    const proposalId = 0; // Example proposal ID
    await Governance.vote(proposalId);
    console.log("Voted on proposal ID:", proposalId);

    // Execute the proposal if it has enough votes
    const proposal = await Governance.getProposal(proposalId);
    if (proposal.voteCount > 3) { // Assuming 3 is the threshold for execution
        await Governance.executeProposal(proposalId);
        console.log("Executed proposal ID:", proposalId);
    } else {
        console.log("Proposal ID:", proposalId, "does not have enough votes for execution");
    }

    // Fetch all proposals
    const allProposals = await Governance.getAllProposals();
    console.log("All Proposals:", allProposals);
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
