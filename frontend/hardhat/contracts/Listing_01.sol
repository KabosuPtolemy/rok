// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Listing_01 {
  address payable[] funders;
  address payable owner;

  constructor() {
    owner = payable(msg.sender); //set first deployer as owner
  }

  //   receive() external payable {
  //     //require(msg.value == 0.1 ether, "Must send 0.1 ether amount");
  //     //funders.push(payable(msg.sender)); // add to funders array
  //   } //makes so that contract can receive funds

  function fund() public payable {
    require(msg.value == 0.01 ether, "Must send 0.01 ether amount");
    funders.push(payable(msg.sender)); // add to funders array
  }

  function withdraw(uint256 _amount) external {
    require(msg.sender == owner, "Only owner can withdraw");
    //owner.transfer(_amount);

    (bool sent, ) = msg.sender.call{value: _amount}("");
    require(sent, "Failed to send Ether");
  }

  function getBalance() public view returns (uint256) {
    return address(this).balance;
  }

  function getOwner() public view returns (address) {
    // contract owner
    return owner;
  }

  function getFunder(uint256 index) public view returns (address) {
    return funders[index];
  }
}
