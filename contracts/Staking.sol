pragma solidity ^0.8.0;

contract Staking {
    mapping(address => uint256) public stakes;
    mapping(address => uint256) public rewards;

    uint256 public totalStaked;
    uint256 public rewardRate = 100; // Example reward rate

    event Staked(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
    event RewardPaid(address indexed user, uint256 reward);

    function stake(uint256 amount) public {
        require(amount > 0, "Cannot stake 0");
        stakes[msg.sender] += amount;
        totalStaked += amount;
        emit Staked(msg.sender, amount);
    }

    function withdraw(uint256 amount) public {
        require(stakes[msg.sender] >= amount, "Insufficient stake");
        stakes[msg.sender] -= amount;
        totalStaked -= amount;
        emit Withdrawn(msg.sender, amount);
    }

    function claimReward() public {
        uint256 reward = stakes[msg.sender] * rewardRate / 1000;
        rewards[msg.sender] += reward;
        emit RewardPaid(msg.sender, reward);
    }
}
