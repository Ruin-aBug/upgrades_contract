import * as dotenv from "dotenv";
import { HardhatUserConfig, task } from "hardhat/config";
import "hardhat-gas-reporter";
import "hardhat-deploy";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "solidity-coverage";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";

dotenv.config();

// set proxy
// 在国内需要通过hardhat-etherscan在etherscan上验证合约时，需要设置代理
const proxyUrl = "http://192.168.2.104:7890"; // change to yours, With the global proxy enabled, change the proxyUrl to your own proxy link. The port may be different for each client.
import { ProxyAgent, setGlobalDispatcher } from "undici";
const proxyAgent = new ProxyAgent(proxyUrl);
setGlobalDispatcher(proxyAgent);

const goerli_url = process.env.GOERLI_RPC_URL || "";
const bsc_test_url = process.env.BSC_TEST_RPC_URL || "";
const bsc_url = process.env.BSC_RPC_URL || "";
const mumbai_url = process.env.POLYGON_TEST_RPC_URL || "";
const accounts = process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [];
const etherscan_key = process.env.ETHERSCAN_API_KEY || "";
const bscscan_key = process.env.BSCSCAN_API_KEY || "";
const polygonscan_key = process.env.POLYGONSCAN_API_KEY || "";
const coinmarket_api_key = process.env.COINMARKETCAP_API_KEY || "";

const MNEMONIC = process.env.MNEMONIC || "test test test test test test test test test test test junk";

// 使用方法yarn hardhat block-number --network networkName
task("block-number", "prints the current block number").setAction(async (taskArgs, hre) => {
	const blockNumber = await hre.ethers.provider.getBlockNumber();
	console.log(`current block number:${blockNumber}`);
});

const config: HardhatUserConfig = {
	namedAccounts: {
		deployer: 0,
		proxyAdmin: 1,
	},
	typechain: {
		outDir: "types",
		target: "ethers-v5",
	},
	paths: {
		sources: "contracts",
	},
	solidity: {
		compilers: [
			{
				version: "0.8.17",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				},
			},
		],
	},
	defaultNetwork: "hardhat",
	networks: {
		hardhat: {
			chainId: 31337,
			saveDeployments: true,
			live: true,
			// forking: {
			// 	url: bsc_test_url,
			// 	blockNumber: 25090550,
			// 	enabled: true,
			// },
			// accounts: accounts
		},
		goerli: {
			url: goerli_url,
			accounts: { mnemonic: MNEMONIC },
			chainId: 5,
			live: true,
			saveDeployments: true,
		},
		bsctest: {
			url: bsc_test_url,
			accounts: { mnemonic: MNEMONIC },
			chainId: 97,
			live: true,
			saveDeployments: true,
		},
		bsc: {
			url: bsc_url,
			accounts: { mnemonic: MNEMONIC },
			chainId: 56,
			live: true,
			saveDeployments: true,
		},
		mumbai: {
			url: mumbai_url,
			accounts: { mnemonic: MNEMONIC },
			chainId: 80001,
			live: true,
			saveDeployments: true,
		},
	},
	etherscan: {
		//hardhat-etherscan
		// apiKey: etherscan_key,
		apiKey: {
			goerli: etherscan_key,
			bsctest: bscscan_key,
			mumbai: polygonscan_key,
		},
		//如果是主网则不需要配置customChains
		customChains: [
			{
				network: "goerli",
				chainId: 5,
				urls: {
					apiURL: "https://api-goerli.etherscan.io/api",
					browserURL: "https://goerli.etherscan.io/",
				},
			},
			{
				network: "bsctest",
				chainId: 97,
				urls: {
					apiURL: "https://api-testnet.bscscan.com/api",
					browserURL: "https://testnet.bscscan.com/",
				},
			},
			{
				network: "mumbai",
				chainId: 80001,
				urls: {
					apiURL: "https://api-testnet.polygonscan.com/api",
					browserURL: "https://mumbai.polygonscan.com/",
				},
			},
		],
	},
	gasReporter: {
		enabled: false,
		outputFile: "gas-reporter.txt",
		noColors: true,
		currency: "USD",
		coinmarketcap: coinmarket_api_key,
		token: "ETH",
	},
};

export default config;
