// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  const AdminRegistry = await hre.ethers.getContractFactory("AdminRegistry");
  const registry = await AdminRegistry.deploy();
  await registry.waitForDeployment();

  console.log("✅ AdminRegistry deployed at:", await registry.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
