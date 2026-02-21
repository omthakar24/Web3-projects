// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenA is ERC20{
    constructor() ERC20("TokenA","TKA"){}
    function mint(address to,uint amount)public{
        _mint(to,amount);
    }
}