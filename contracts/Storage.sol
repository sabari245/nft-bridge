// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Storage {
    uint storedNumber;

    function writeNum(uint _num) public {
        storedNumber = _num;
        console.log("received %s", _num);
    }

    function readNum() public view returns (uint) {
        return storedNumber;
    }
}
