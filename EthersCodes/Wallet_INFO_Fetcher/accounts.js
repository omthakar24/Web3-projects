require("dotenv").config()
const {ethers} = require("ethers");

const URL = `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
const provider = new ethers.JsonRpcProvider(URL)
const ADDRESS = "0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97"
async function main(){
 const balance = await provider.getBalance(ADDRESS)
 console.log(ADDRESS+" has "+ethers.formatEther(balance)+" ETH")
}
main()