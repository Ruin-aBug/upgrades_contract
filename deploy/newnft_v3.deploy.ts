import { ethers, upgrades } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { deployments, getNamedAccounts, getChainId } = hre;
	const { deploy, get } = deployments;
	const { deployer } = await getNamedAccounts();
	const old = await get("OldNFT");

	const newNFT = await deploy("NewNFT", {
		contract: "NewNFT_v3",
		from: deployer,
		log: true,
		args: [],
		proxy: {
			proxyContract: "OpenZeppelinTransparentProxy",
		}
	});

	console.log("newNFT proxy address:", newNFT.address);
	const chainId = await getChainId();
	if (chainId !== "31337") {
		// 在etherscan上验证合约
		// 需先在hardhat.config.ts中配置hardhat-etherscan
		await hre.run("verify:verify", {
			address: newNFT.implementation,
			contract: "contracts/NewNFT_v3.sol:NewNFT_v3",
			constructorArguments: []
		});
	}

}

export default func;
func.tags = ["nftv3"];