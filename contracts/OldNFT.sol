// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract OldNFT is
    ERC721,
    ERC721Enumerable,
    ERC721URIStorage,
    ERC721Holder,
    Ownable
{
    using Strings for uint256;

    uint256 public currentTokenId;

    event UpdateNFT(address from, address to, uint256 tokenId);

    constructor() ERC721("X-MASK NFT", "XMNFT") {
        _mint(msg.sender,1);
    }

    function safeMint(
        address to,
        uint256 tokenId,
        string memory uri
    ) public onlyOwner {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    function mint(address to, uint256 tokenId) public onlyOwner {
        require(to != address(0), "Error: address is zero");
        _mint(to, tokenId);
    }

    function _baseURI()
        internal
        view
        virtual
        override(ERC721)
        returns (string memory uri)
    {
        return
            "https://ipfs.x-mask.com/ipfs/QmSMgMATpGivXNvaSZtpWBBte1DFHmoAXHZvyXqJTmJQRe/";
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function _burn(
        uint256 tokenId
    ) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
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
    ) public view override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
