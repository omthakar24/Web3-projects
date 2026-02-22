require("dotenv").config()
const express = require("express")
const cors = require("cors")
const path = require("path")
const { ethers } = require("ethers")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))

const URL = `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
const provider = new ethers.JsonRpcProvider(URL)

app.get("/balance/:address", async (req, res) => {
  try {
    const address = req.params.address

    if (!ethers.isAddress(address)) {
      return res.status(400).json({ error: "Invalid address" })
    }

    const balance = await provider.getBalance(address)
    const formatted = ethers.formatEther(balance)

    res.json({
      address,
      balance: formatted
    })

  } catch (err) {
    res.status(500).json({ error: "Server error" })
  }
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})