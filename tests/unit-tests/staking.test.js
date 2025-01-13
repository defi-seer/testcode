const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Staking Contract', function () {
  let Staking, staking, owner, addr1;

  beforeEach(async function () {
    Staking = await ethers.getContractFactory('Staking');
    [owner, addr1] = await ethers.getSigners();
    staking = await Staking.deploy();
    await staking.deployed();
  });

  it('Should allow users to stake tokens', async function () {
    await staking.stake(100);
    expect(await staking.stakes(owner.address)).to.equal(100);
  });

  it('Should allow users to withdraw staked tokens', async function () {
    await staking.stake(100);
    await staking.withdraw(50);
    expect(await staking.stakes(owner.address)).to.equal(50);
  });

  it('Should calculate rewards correctly', async function () {
    await staking.stake(100);
    await staking.claimReward();
    expect(await staking.rewards(owner.address)).to.be.above(0);
  });
});
