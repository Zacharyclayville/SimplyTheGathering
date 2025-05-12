const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AdminRegistry", function () {
  let adminRegistry, owner, addr1, addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    adminRegistry = await ethers.deployContract("AdminRegistry");
   
  });

  it("should deploy with the owner as the first admin", async function () {
    expect(await adminRegistry.owner()).to.equal(owner.address);
    expect(await adminRegistry.isVerified(owner.address)).to.be.true;
  });

  it("should allow an admin to add another admin", async function () {
    await adminRegistry.addAdmin(addr1.address);
    expect(await adminRegistry.isVerified(addr1.address)).to.be.true;
  });

  it("should allow the owner to remove an admin", async function () {
    await adminRegistry.addAdmin(addr1.address);
    await adminRegistry.removeAdmin(addr1.address);
    expect(await adminRegistry.isVerified(addr1.address)).to.be.false;
  });

  it("should fail if a non-admin tries to add another admin", async function () {
    await expect(
      adminRegistry.connect(addr1).addAdmin(addr2.address)
    ).to.be.revertedWith("Only admins can do this");
  });

  it("should fail if a non-owner tries to remove an admin", async function () {
    await adminRegistry.addAdmin(addr1.address);
    await expect(
      adminRegistry.connect(addr1).removeAdmin(owner.address)
    ).to.be.revertedWith("Only the contract owner can do this");
  });
});
