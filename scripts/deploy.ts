import { ethers } from "hardhat";

async function main() {
  
  const AAVE = await ethers.getContractFactory("AAVE");
  const aAVE = await AAVE.deploy();
  await aAVE.deployed();

  const APE = await ethers.getContractFactory("APE");
  const aPE = await APE.deploy();
  await aPE.deployed();

  const CRO = await ethers.getContractFactory("CRO");
  const cRO = await CRO.deploy();
  await cRO.deployed();

  const LINK = await ethers.getContractFactory("LINK");
  const lINK = await LINK.deploy();
  await lINK.deployed();

  const MANA = await ethers.getContractFactory("MANA");
  const mANA = await MANA.deploy();
  await mANA.deployed();

  const MATIC = await ethers.getContractFactory("MATIC");
  const mATIC = await MATIC.deploy();
  await mATIC.deployed();

  const MKR = await ethers.getContractFactory("MKR");
  const mKR = await MKR.deploy();
  await mKR.deployed();

  const SAND = await ethers.getContractFactory("SAND");
  const sAND = await SAND.deploy();
  await sAND.deployed();

  const SHIB = await ethers.getContractFactory("SHIB");
  const sHIB = await SHIB.deploy();
  await sHIB.deployed();

  const UNI = await ethers.getContractFactory("UNI");
  const uNI = await UNI.deploy();
  await uNI.deployed();

  const USDC = await ethers.getContractFactory("USDC");
  const uSDC = await USDC.deploy();
  await uSDC.deployed();

  const USDT = await ethers.getContractFactory("USDT");
  const uSDT = await USDT.deploy();
  await uSDT.deployed();

  console.log(`contract deployed to 
  AAVE: ${aAVE.address}
  APE: ${aPE.address}
  CRO: ${cRO.address}
  LINK: ${lINK.address}
  MANA: ${mANA.address}
  MATIC: ${mATIC.address}
  MKR: ${mKR.address}
  SAND: ${sAND.address}
  SHIB: ${sHIB.address}
  UNI: ${uNI.address}
  USDC: ${uSDC.address}
  USDT: ${uSDT.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
