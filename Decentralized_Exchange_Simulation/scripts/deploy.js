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

const Pool = await ethers.getContractFactory("LiquidityPool");
const pool = await Pool.deploy("0x327807C6c3455C676efA9F3203f7333A0B9f5B0D","0x9b5b4aA66633c5725c0CBE31EdEbb242b101d213");
await pool.deployed();

console.log("Pool:", pool.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});