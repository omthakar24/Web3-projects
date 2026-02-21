const { ethers } = require("hardhat");

async function main() {

  const TokenA = await ethers.getContractFactory("TokenA");
  const tokenA = await TokenA.deploy();
  await tokenA.deployed();

  console.log("TokenA deployed at:", tokenA.address);

  const TokenB = await ethers.getContractFactory("TokenB");
  const tokenB = await TokenB.deploy();
  await tokenB.deployed();

  console.log("TokenB deployed at:", tokenB.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});