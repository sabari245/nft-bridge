// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CuteNFT is ERC721A, Ownable {
    string private _baseImageURI;

    constructor(
        string memory name,
        string memory symbol,
        string memory baseURI
    ) ERC721A(name, symbol) {
        _baseImageURI = baseURI;
    }

    function _baseURI() internal view virtual returns (string memory) {
        return _baseImageURI;
    }

    function batchMintNFTs(address[] calldata to, uint256[] calldata tokenIds)
}
