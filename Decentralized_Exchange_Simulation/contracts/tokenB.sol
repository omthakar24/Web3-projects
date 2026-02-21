//SPDX-License-Identifier:MDT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenB is ERC20{
    constructor() ERC20("TokenB","TKB"){}
    function mint(address to,uint amount) public{
        _mint(to,amount);
    }
}