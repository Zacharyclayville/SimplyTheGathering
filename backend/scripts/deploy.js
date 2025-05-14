import hardhat from "hardhat";
const { ethers } = hardhat;

async function main() {
  const AdminRegistry = await ethers.getContractFactory("AdminRegistry");
  const adminRegistry = await AdminRegistry.deploy();
  await adminRegistry.waitForDeployment();

  console.log(`✅ AdminRegistry deployed to: ${adminRegistry.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
