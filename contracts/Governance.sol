pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Governance is Ownable {
    struct Proposal {
        uint256 id;
        string description;
        uint256 voteCount;
        bool executed;
    }

    mapping(uint256 => Proposal) private proposals;
    mapping(address => mapping(uint256 => bool)) private votes;
    uint256 private nextProposalId;
    address[] private voters;

    event ProposalCreated(uint256 id, string description);
    event Voted(address indexed voter, uint256 proposalId);
    event ProposalExecuted(uint256 id);

    modifier onlyVoter() {
        require(isVoter(msg.sender), "Only approved voters can participate");
        _;
    }

    function addVoter(address voter) external onlyOwner {
        voters.push(voter);
    }

    function removeVoter(address voter) external onlyOwner {
        for (uint256 i = 0; i < voters.length; i++) {
            if (voters[i] == voter) {
                voters[i] = voters[voters.length - 1];
                voters.pop();
                break;
            }
        }
    }

    function isVoter(address account) public view returns (bool) {
        for (uint256 i = 0; i < voters.length; i++) {
            if (voters[i] == account) {
                return true;
            }
        }
        return false;
    }

    function createProposal(string calldata description) external onlyVoter {
        uint256 proposalId = nextProposalId++;
        proposals[proposalId] = Proposal({
            id: proposalId,
            description: description,
            voteCount: 0,
            executed: false
        });
        emit ProposalCreated(proposalId, description);
    }

    function vote(uint256 proposalId) external onlyVoter {
        require(!votes[msg.sender][proposalId], "You have already voted on this proposal");
        require(!proposals[proposalId].executed, "Proposal has already been executed");

        proposals[proposalId].voteCount++;
        votes[msg.sender][proposalId] = true;
        emit Voted(msg.sender, proposalId);
    }

    function executeProposal(uint256 proposalId) external onlyOwner {
        Proposal storage proposal = proposals[proposalId];
        require(proposal.voteCount > (voters.length / 2), "Not enough votes to execute");
        require(!proposal.executed, "Proposal already executed");

        proposal.executed = true;
        // Implement proposal execution logic here
        emit ProposalExecuted(proposalId);
    }

    function getProposal(uint256 proposalId) external view returns (Proposal memory) {
        return proposals[proposalId];
    }

    function getAllProposals() external view returns (Proposal[] memory) {
        Proposal[] memory allProposals = new Proposal[](nextProposalId);
        for (uint256 i = 0; i < nextProposalId; i++) {
            allProposals[i] = proposals[i];
        }
        return allProposals;
    }
}
