async function main() {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);
  console.log('Account balance:', (await deployer.getBalance()).toString());

  // Deploy Token contract
  const Token = await ethers.getContractFactory('Token');
  const token = await Token.deploy();
  console.log('Token deployed to:', token.address);

  // Deploy Staking contract
  const Staking = await ethers.getContractFactory('Staking');
  const staking = await Staking.deploy();
  console.log('Staking deployed to:', staking.address);

  // Deploy Governance contract
  const Governance = await ethers.getContractFactory('Governance');
  const governance = await Governance.deploy();
  console.log('Governance deployed to:', governance.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
