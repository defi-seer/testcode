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
   
