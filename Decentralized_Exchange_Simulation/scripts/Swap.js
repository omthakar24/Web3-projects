const { ethers } = require("hardhat");
const addresses = require("../addresses.js");

async function main() {

  const tokenA = await ethers.getContractAt("TokenA", addresses.tokenA);
  const pool = await ethers.getContractAt("LiquidityPool", addresses.pool);

  const amountIn = ethers.utils.parseEther("10");

  await tokenA.approve(pool.address, amountIn);
  await pool.swapAforB(amountIn);

  console.log("Swap complete");
}

main();