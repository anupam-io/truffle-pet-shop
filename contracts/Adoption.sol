// SPDX-License-Identifier: Unlicensed
pragma solidity >=0.8.0;

contract Adoption {
    mapping(uint=>bool) public isTaken;
    mapping(address=>uint) public adoptersNo;
    address[] public adopters;


    // Adopting a pet
    function adopt(uint petId) public returns (uint) {
        require(petId<100 && adoptersNo[msg.sender]==0);
        adoptersNo[msg.sender] = petId;
        adopters.push(msg.sender);
        return petId;
    }

    // Retrieving the adopters
    function getAdopters() public view returns (address[] memory) {
        return adopters;
    }
}