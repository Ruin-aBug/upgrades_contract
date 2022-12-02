// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721URIStorageUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/utils/ERC721HolderUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/StringsUpgradeable.sol";

contract NewNFT_v5 is
    ERC721Upgradeable,
    ERC721EnumerableUpgradeable,
    ERC721URIStorageUpgradeable,
    ERC721HolderUpgradeable,
    OwnableUpgradeable
{
    using StringsUpgradeable for uint256;
    IERC721 public oldNFT;

    event UpdateNFT(address from, address to, uint256 tokenId);

    // constructor() initialize {
    // }

    function initialize(address _oldNFT) public initializer {
        require(_oldNFT != address(0), "Error: address is zero");
        oldNFT = IERC721(_oldNFT);
        __ERC721_init("New NFT", "NNFT");
        __Ownable_init();
    }

    function mint(address to, uint256 tokenId) public onlyOwner {
        require(to != address(0), "Error: address is zero");
        try oldNFT.ownerOf(tokenId) returns (address owner) {
            if (owner != address(0)) {
                revert("Error: NFT is exist");
            }
            _mint(to, tokenId);
        } catch {
            _mint(to, tokenId);
        }
    }

    function updateNFT(address to, uint256 tokenId) external {
        require(to != address(0), "Error: address is zero");
        address holder = oldNFT.ownerOf(tokenId);
        require(holder == msg.sender, "Error: You are not the holder");

        oldNFT.transferFrom(holder, address(this), tokenId);
        _mint(to, tokenId);
    }

    function _baseURI()
        internal
        view
        virtual
        override(ERC721Upgradeable)
        returns (string memory uri)
    {
        return
            "";
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override(ERC721Upgradeable, ERC721EnumerableUpgradeable) {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function _burn(
        uint256 tokenId
    ) internal override(ERC721Upgradeable, ERC721URIStorageUpgradeable) {
        super._burn(tokenId);
    }

    function tokenURI(
        uint256 tokenId
    )
        public
        view
        override(ERC721Upgradeable, ERC721URIStorageUpgradeable)
        returns (string memory)
    {
        _requireMinted(tokenId);

        string memory base = _baseURI();

        // If both are set, concatenate the baseURI and tokenURI (via abi.encodePacked).
        if (bytes(base).length > 0) {
            return string(abi.encodePacked(base, tokenId.toString(), ".json"));
        }

        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    )
        public
        view
        override(ERC721Upgradeable, ERC721EnumerableUpgradeable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
