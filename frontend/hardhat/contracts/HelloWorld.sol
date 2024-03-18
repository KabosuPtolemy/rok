// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Hello {
  uint256 number;

  function store(uint256 _number) public {
    number = _number;
  }

  function retrieve() public view returns (uint256) {
    return number;
  }

  function nameToString() public view returns (string memory) {
    if (number == 1) {
      return "input number is 1";
    } else if (number == 2) {
      return "input number is 2";
    } else return "input number is greater than 2";
  }
}
