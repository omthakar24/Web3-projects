const { ethers } = require("hardhat");

async function main() {

  const [signer] = await ethers.getSigners();

  const tokenA = await ethers.getContractAt("TokenA", "0x327807C6c3455C676efA9F3203f7333A0B9f5B0D");
  const tokenB = await ethers.getContractAt("TokenB", "0x9b5b4aA66633c5725c0CBE31EdEbb242b101d213");

  await tokenA.mint(signer.address, ethers.utils.parseEther("1000"));
  await tokenB.mint(signer.address, ethers.utils.parseEther("1000"));

  console.log("Minted tokens");
}

main();