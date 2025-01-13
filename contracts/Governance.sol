pragma solidity ^0.8.0;

contract Governance {
    struct Proposal {
        string description;
        uint256 votesFor;
        uint256 votesAgainst;
        bool executed;
    }

    Proposal[] public proposals;
    mapping(address => bool) public voters;

    event ProposalCreated(uint256 indexed id, string description);
    event Voted(uint256 indexed proposalId, bool vote, address indexed voter);
    event ProposalExecuted(uint256 indexed proposalId);

    function createProposal(string memory description) public {
        proposals.push(Proposal({
            description: description,
            votesFor: 0,
            votesAgainst: 0,
            executed: false
        }));
        emit ProposalCreated(proposals.length - 1, description);
    }

    function vote(uint256 proposalId, bool support) public {
        require(!voters[msg.sender], "Already voted");
        Proposal storage proposal = proposals[proposalId];
        if (support) {
            proposal.votesFor++;
        } else {
            proposal.votesAgainst++;
        }
        voters[msg.sender] = true;
        emit Voted(proposalId, support, msg.sender);
    }

    function executeProposal(uint256 proposalId) public {
        Proposal storage proposal = proposals[proposalId];
        require(!proposal.executed, "Already executed");
        require(proposal.votesFor > proposal.votesAgainst, "Proposal rejected");
        proposal.executed = true;
        emit ProposalExecuted(proposalId);
    }
}
