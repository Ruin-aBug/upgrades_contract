import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers, upgrades } from "hardhat";
import { NewNFT_v1, NewNFT_v2, OldNFT } from "../types/contracts";
import { BigNumber } from "ethers";

describe("OldNFT and X-Mask NFT", function () {

	async function deployOldNFTAndXMaskNFT() {

		const [owner, otherAccount] = await ethers.getSigners();
		const OldNFT = await ethers.getContractFactory("OldNFT");
		const oldNFT = await OldNFT.deploy() as OldNFT;
		// for (let i = 1; i < 11; i++) {
		// 	await oldNFT.mint(otherAccount.address, i);
		// }

		const NewNFT_v1 = await ethers.getContractFactory("NewNFT_v1");
		const newNFT_v1 = await upgrades.deployProxy(NewNFT_v1, [oldNFT.address], { initializer: "initialize" }) as NewNFT_v1;
		return { oldNFT, newNFT_v1, owner, otherAccount };
	}

	describe("upgrades Mask NFT contract", () => {
		it("upgrades", async () => {
			const { oldNFT, newNFT_v1, otherAccount, owner } = await loadFixture(deployOldNFTAndXMaskNFT);
			const NewNFT_v2 = await ethers.getContractFactory("NewNFT_v2");
			const newNFT_v2 = await upgrades.upgradeProxy(newNFT_v1.address, NewNFT_v2) as NewNFT_v2;
			expect(newNFT_v2.address).to.be.equal(newNFT_v1.address);
		})

		it("upgrades and updateNFT", async () => {
			const { oldNFT, newNFT_v1, otherAccount, owner } = await loadFixture(deployOldNFTAndXMaskNFT);
			const NewNFT_v2 = await ethers.getContractFactory("NewNFT_v2");
			const newNFT_v2 = await upgrades.upgradeProxy(newNFT_v1.address, NewNFT_v2) as NewNFT_v2;
			const tx = await newNFT_v2.mint(owner.address, 100);

			expect(await newNFT_v2.tokenURI(100)).to.be.equal(
				"https://ipfs.io/ipfs/QmSrvCtiskohvBToPzbFKVHDdysNovzJPxiRSEhNuhSaMu"
			)
		})
	})

});
