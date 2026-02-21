const { ethers } = require("ethers");
require("dotenv").config();

const url = process.env.RPC_URL;
const provider = new ethers.JsonRpcProvider(url);

async function main(){
    const private_key = process.env.PRIVATE_KEY;
    const wallet =  new ethers.Wallet(private_key,provider);
    const address = wallet.getAddress();
    console.log(address);
    const balance = await provider.getBalance(address);
    console.log("Wallet has "+ethers.formatUnits(balance,18)+" ETH")

    const receiver = "0x93864B240b89A05296779569B4DA4eB5f0b9F165"
    const receiver_balance = await provider.getBalance(receiver);
    console.log("Receiver Balance before TXN:"+ethers.formatUnits(receiver_balance,18))

  /* const tx = await wallet.sendTransaction({
    to: receiver,
    value: ethers.parseUnits("0.01",18)    
})
const receipt = await tx.wait()
console.log(tx)
console.log(receipt)*/

console.log("Wallet has "+ethers.formatUnits(balance,18)+" ETH")
console.log("Receiver Balance after TXN:"+ethers.formatUnits(receiver_balance,18))
}
main()
