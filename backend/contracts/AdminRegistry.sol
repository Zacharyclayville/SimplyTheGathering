// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract AdminRegistry {
    address public owner;
    mapping(address => bool) public admins;
    address[] private adminList;

    constructor() {
        owner = msg.sender;
    }

    function addAdmin(address _admin) external {
        require(msg.sender == owner, "Only owner can add");
        if (!admins[_admin]) {
            admins[_admin] = true;
            adminList.push(_admin);
        }
    }

    function removeAdmin(address _admin) external {
        require(msg.sender == owner, "Only owner can remove");
        admins[_admin] = false;
    }

    function isVerified(address _user) public view returns (bool) {
        return admins[_user];
    }

    function getAdmins() public view returns (address[] memory) {
        return adminList;
    }
}
