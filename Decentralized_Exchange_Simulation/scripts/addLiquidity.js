const { ethers } = require("hardhat");

async function main() {

  const tokenA = await ethers.getContractAt("TokenA", "0x327807C6c3455C676efA9F3203f7333A0B9f5B0D");
  const tokenB = await ethers.getContractAt("TokenB", "0x9b5b4aA66633c5725c0CBE31EdEbb242b101d213");
  const pool = await ethers.getContractAt("LiquidityPool", "0xB7C953B32A095110C68D729570Bb4f6e9E515d11");

  await tokenA.approve(pool.address, ethers.utils.parseEther("100"));
  await tokenB.approve(pool.address, ethers.utils.parseEther("100"));

  await pool.addLiquidity(
    ethers.utils.parseEther("100"),
    ethers.utils.parseEther("100")
  );

  console.log("Liquidity added");
}

main();