import { ethers, upgrades } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { deployments, getNamedAccounts, getChainId } = hre;
	const { deploy } = deployments;
	const { deployer } = await getNamedAccounts();

	const oldNFT = await deploy("OldNFT", {
		contract: "OldNFT",
		from: deployer,
		log: true,
	});

	console.log("oldNFT proxy address:", oldNFT.address);
	const chainId = await getChainId();
	if (chainId !== "31337") {
		// 在etherscan上验证合约
		// 需先在hardhat.config.ts中配置hardhat-etherscan
		await hre.run("verify:verify", {
			address: oldNFT.address,
		});
	}

}

export default func;
func.tags = ["oldnft"];