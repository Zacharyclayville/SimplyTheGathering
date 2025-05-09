// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract AdminRegistry {
    address public owner;
    mapping(address => bool) public isAdmin;

    event AdminAdded(address newAdmin);
    event AdminRemoved(address removedAdmin);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can do this");
        _;
    }

    modifier onlyAdmin() {
        require(isAdmin[msg.sender], "Only admins can do this");
        _;
    }

    constructor() {
        owner = msg.sender;
        isAdmin[msg.sender] = true; // The deployer is the first admin
    }

    function addAdmin(address _admin) public onlyAdmin {
        isAdmin[_admin] = true;
        emit AdminAdded(_admin);
    }

    function removeAdmin(address _admin) public onlyOwner {
        isAdmin[_admin] = false;
        emit AdminRemoved(_admin);
    }

    function isVerified(address _user) public view returns (bool) {
        return isAdmin[_user];
    }
}
