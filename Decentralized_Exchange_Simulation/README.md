In this project, I built a basic decentralized exchange from scratch to understand how Automated Market Makers work under the hood.

I implemented:

Two mintable ERC20 tokens

A constant product liquidity pool

Liquidity provisioning

Token swaps with a 0.3 percent fee

Deployment and interaction scripts using Hardhat

I manually deployed the contracts, minted tokens, added liquidity, and executed swaps to verify that reserves and balances updated correctly.

The swap pricing follows the classic AMM formula:

reserveA × reserveB = k

This project helped me understand:

ERC20 approval and transferFrom mechanics

How liquidity pools determine prices

How swap fees are applied

How to deploy and interact with contracts programmatically

This is a learning-focused implementation and not production-ready.