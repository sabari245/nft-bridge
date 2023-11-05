// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "hardhat/console.sol";

contract CuteNFT is ERC721A, Ownable {
    mapping(uint256 => string) nftURI;
    mapping(uint256 => string) nftPrompt;

    constructor(
        string memory name,
        string memory symbol
    ) ERC721A(name, symbol) Ownable(msg.sender) {}

    function setURI(string memory uri, uint256 tokenId) public {
        if (!_exists(tokenId)) revert URIQueryForNonexistentToken();

        nftURI[tokenId] = uri;
    }

    function tokenURI(
        uint256 tokenId
    ) public view virtual override returns (string memory) {
        if (!_exists(tokenId)) revert URIQueryForNonexistentToken();

        return nftURI[tokenId];
    }

    function setPrompt(string memory prmpt, uint256 tokenId) public {
        if (!_exists(tokenId)) revert URIQueryForNonexistentToken();

        nftPrompt[tokenId] = prmpt;
    }

    function prompt(uint256 tokenId) public view returns (string memory) {
        if (!_exists(tokenId)) revert URIQueryForNonexistentToken();

        return nftPrompt[tokenId];
    }

    function mint(address to, uint256 quantity) public {
        _mint(to, quantity);
        console.log("successfully minted ", quantity, " nfts to ", to);
    }
}
