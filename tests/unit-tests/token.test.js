const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Token Contract', function () {
  let Token, token, owner, addr1, addr2;

  beforeEach(async function () {
    Token = await ethers.getContractFactory('Token');
    [owner, addr1, addr2] = await ethers.getSigners();
    token = await Token.deploy();
    await token.deployed();
  });

  it('Should assign the total supply to the owner', async function () {
    const ownerBalance = await token.balanceOf(owner.address);
    expect(await token.totalSupply()).to.equal(ownerBalance);
  });

  it('Should transfer tokens between accounts', async function () {
    await token.transfer(addr1.address, 50);
    expect(await token.balanceOf(addr1.address)).to.equal(50);

    await token.connect(addr1).transfer(addr2.address, 50);
    expect(await token.balanceOf(addr2.address)).to.equal(50);
  });

  it('Should fail if sender doesn’t have enough tokens', async function () {
    await expect(token.connect(addr1).transfer(addr2.address, 50))
      .to.be.revertedWith('Insufficient balance');
  });
});
