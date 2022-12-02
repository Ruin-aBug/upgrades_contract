/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { NewNFT_v1, NewNFT_v1Interface } from "../../contracts/NewNFT_v1";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "UpdateNFT",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentTokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_oldNFT",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oldNFT",
    outputs: [
      {
        internalType: "contract IERC721",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "updateNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506121d2806100206000396000f3fe608060405234801561001057600080fd5b50600436106101725760003560e01c80636352211e116100de578063a22cb46511610097578063c87b56dd11610071578063c87b56dd14610334578063d1fc747f14610347578063e985e9c51461035a578063f2fde38b1461039657600080fd5b8063a22cb465146102fb578063b88d4fde1461030e578063c4d66de81461032157600080fd5b80636352211e1461029f57806370a08231146102b2578063715018a6146102c557806373cbca9e146102cd5780638da5cb5b146102e157806395d89b41146102f357600080fd5b806318160ddd1161013057806318160ddd1461023857806323b872dd146102405780632f745c591461025357806340c10f191461026657806342842e0e146102795780634f6ccce71461028c57600080fd5b80629a9b7b1461017757806301ffc9a71461019457806306fdde03146101b7578063081812fc146101cc578063095ea7b3146101f7578063150b7a021461020c575b600080fd5b6101816101605481565b6040519081526020015b60405180910390f35b6101a76101a2366004611b0e565b6103a9565b604051901515815260200161018b565b6101bf6103ba565b60405161018b9190611b7b565b6101df6101da366004611b8e565b61044c565b6040516001600160a01b03909116815260200161018b565b61020a610205366004611bbc565b610473565b005b61021f61021a366004611bfe565b61058d565b6040516001600160e01b0319909116815260200161018b565b609954610181565b61020a61024e366004611cde565b61059e565b610181610261366004611bbc565b6105cf565b61020a610274366004611bbc565b610665565b61020a610287366004611cde565b6106a1565b61018161029a366004611b8e565b6106bc565b6101df6102ad366004611b8e565b61074f565b6101816102c0366004611d1f565b6107af565b61020a610835565b61015f546101df906001600160a01b031681565b61012d546001600160a01b03166101df565b6101bf610849565b61020a610309366004611d3c565b610858565b61020a61031c366004611bfe565b610863565b61020a61032f366004611d1f565b61089b565b6101bf610342366004611b8e565b610a30565b61020a610355366004611bbc565b610a9e565b6101a7610368366004611d7a565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b61020a6103a4366004611d1f565b610c04565b60006103b482610c7d565b92915050565b6060606580546103c990611da8565b80601f01602080910402602001604051908101604052809291908181526020018280546103f590611da8565b80156104425780601f1061041757610100808354040283529160200191610442565b820191906000526020600020905b81548152906001019060200180831161042557829003601f168201915b5050505050905090565b600061045782610ca2565b506000908152606960205260409020546001600160a01b031690565b600061047e8261074f565b9050806001600160a01b0316836001600160a01b0316036104f05760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061050c575061050c8133610368565b61057e5760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c00000060648201526084016104e7565b6105888383610d01565b505050565b630a85bd0160e11b5b949350505050565b6105a83382610d6f565b6105c45760405162461bcd60e51b81526004016104e790611de2565b610588838383610ded565b60006105da836107af565b821061063c5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b60648201526084016104e7565b506001600160a01b03919091166000908152609760209081526040808320938352929052205490565b61066d610f5e565b6001600160a01b0382166106935760405162461bcd60e51b81526004016104e790611e2f565b61069d8282610fb9565b5050565b61058883838360405180602001604052806000815250610863565b60006106c760995490565b821061072a5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b60648201526084016104e7565b6099828154811061073d5761073d611e5f565b90600052602060002001549050919050565b6000818152606760205260408120546001600160a01b0316806103b45760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016104e7565b60006001600160a01b0382166108195760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b60648201526084016104e7565b506001600160a01b031660009081526068602052604090205490565b61083d610f5e565b6108476000611152565b565b6060606680546103c990611da8565b61069d3383836111a5565b61086d3383610d6f565b6108895760405162461bcd60e51b81526004016104e790611de2565b61089584848484611273565b50505050565b600054610100900460ff16158080156108bb5750600054600160ff909116105b806108d55750303b1580156108d5575060005460ff166001145b6109385760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016104e7565b6000805460ff19166001179055801561095b576000805461ff0019166101001790555b6001600160a01b0382166109815760405162461bcd60e51b81526004016104e790611e2f565b61015f80546001600160a01b0319166001600160a01b0384161790556040805180820182526007815266139155c813919560ca1b602080830191909152825180840190935260048352631393919560e21b908301526109df916112a6565b6109e76112d7565b801561069d576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b6060610a3b82610ca2565b6000610a5260408051602081019091526000815290565b805190915015610a8e5780610a6684611306565b604051602001610a77929190611e75565b604051602081830303815290604052915050919050565b610a9783611399565b9392505050565b6001600160a01b038216610ac45760405162461bcd60e51b81526004016104e790611e2f565b61015f546040516331a9108f60e11b8152600481018390526000916001600160a01b031690636352211e90602401602060405180830381865afa158015610b0f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b339190611eb4565b90506001600160a01b0381163314610b8d5760405162461bcd60e51b815260206004820152601d60248201527f4572726f723a20596f7520617265206e6f742074686520686f6c64657200000060448201526064016104e7565b61015f546040516323b872dd60e01b81526001600160a01b03838116600483015230602483015260448201859052909116906323b872dd90606401600060405180830381600087803b158015610be257600080fd5b505af1158015610bf6573d6000803e3d6000fd5b505050506105888383610fb9565b610c0c610f5e565b6001600160a01b038116610c715760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104e7565b610c7a81611152565b50565b60006001600160e01b0319821663780e9d6360e01b14806103b457506103b4826114a1565b6000818152606760205260409020546001600160a01b0316610c7a5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016104e7565b600081815260696020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610d368261074f565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610d7b8361074f565b9050806001600160a01b0316846001600160a01b03161480610dc257506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff165b806105965750836001600160a01b0316610ddb8461044c565b6001600160a01b031614949350505050565b826001600160a01b0316610e008261074f565b6001600160a01b031614610e265760405162461bcd60e51b81526004016104e790611ed1565b6001600160a01b038216610e885760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016104e7565b610e9583838360016114f1565b826001600160a01b0316610ea88261074f565b6001600160a01b031614610ece5760405162461bcd60e51b81526004016104e790611ed1565b600081815260696020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260688552838620805460001901905590871680865283862080546001019055868652606790945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b61012d546001600160a01b031633146108475760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104e7565b6001600160a01b03821661100f5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016104e7565b6000818152606760205260409020546001600160a01b0316156110745760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016104e7565b6110826000838360016114f1565b6000818152606760205260409020546001600160a01b0316156110e75760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016104e7565b6001600160a01b038216600081815260686020908152604080832080546001019055848352606790915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b61012d80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b0316036112065760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016104e7565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b61127e848484610ded565b61128a848484846114fd565b6108955760405162461bcd60e51b81526004016104e790611f16565b600054610100900460ff166112cd5760405162461bcd60e51b81526004016104e790611f68565b61069d82826115fb565b600054610100900460ff166112fe5760405162461bcd60e51b81526004016104e790611f68565b61084761163b565b606060006113138361166b565b600101905060008167ffffffffffffffff81111561133357611333611be8565b6040519080825280601f01601f19166020018201604052801561135d576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461136757509392505050565b60606113a482610ca2565b600082815260c96020526040812080546113bd90611da8565b80601f01602080910402602001604051908101604052809291908181526020018280546113e990611da8565b80156114365780601f1061140b57610100808354040283529160200191611436565b820191906000526020600020905b81548152906001019060200180831161141957829003601f168201915b50505050509050600061145460408051602081019091526000815290565b90508051600003611466575092915050565b815115611498578082604051602001611480929190611fb3565b60405160208183030381529060405292505050919050565b61059684611743565b60006001600160e01b031982166380ac58cd60e01b14806114d257506001600160e01b03198216635b5e139f60e01b145b806103b457506301ffc9a760e01b6001600160e01b03198316146103b4565b610895848484846117a0565b60006001600160a01b0384163b156115f357604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611541903390899088908890600401611fe2565b6020604051808303816000875af192505050801561157c575060408051601f3d908101601f191682019092526115799181019061201f565b60015b6115d9573d8080156115aa576040519150601f19603f3d011682016040523d82523d6000602084013e6115af565b606091505b5080516000036115d15760405162461bcd60e51b81526004016104e790611f16565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610596565b506001610596565b600054610100900460ff166116225760405162461bcd60e51b81526004016104e790611f68565b606561162e838261208a565b506066610588828261208a565b600054610100900460ff166116625760405162461bcd60e51b81526004016104e790611f68565b61084733611152565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106116aa5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106116d6576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106116f457662386f26fc10000830492506010015b6305f5e100831061170c576305f5e100830492506008015b612710831061172057612710830492506004015b60648310611732576064830492506002015b600a83106103b45760010192915050565b606061174e82610ca2565b600061176560408051602081019091526000815290565b905060008151116117855760405180602001604052806000815250610a97565b8061178f84611306565b604051602001610a77929190611fb3565b6117ac848484846118e0565b600181111561181b5760405162461bcd60e51b815260206004820152603560248201527f455243373231456e756d657261626c653a20636f6e7365637574697665207472604482015274185b9cd9995c9cc81b9bdd081cdd5c1c1bdc9d1959605a1b60648201526084016104e7565b816001600160a01b0385166118775761187281609980546000838152609a60205260408120829055600182018355919091527f72a152ddfb8e864297c917af52ea6c1c68aead0fee1a62673fcc7e0c94979d000155565b61189a565b836001600160a01b0316856001600160a01b03161461189a5761189a8582611968565b6001600160a01b0384166118b6576118b181611a05565b6118d9565b846001600160a01b0316846001600160a01b0316146118d9576118d98482611ab4565b5050505050565b6001811115610895576001600160a01b03841615611926576001600160a01b03841660009081526068602052604081208054839290611920908490612160565b90915550505b6001600160a01b03831615610895576001600160a01b0383166000908152606860205260408120805483929061195d908490612173565b909155505050505050565b60006001611975846107af565b61197f9190612160565b6000838152609860205260409020549091508082146119d2576001600160a01b03841660009081526097602090815260408083208584528252808320548484528184208190558352609890915290208190555b5060009182526098602090815260408084208490556001600160a01b039094168352609781528383209183525290812055565b609954600090611a1790600190612160565b6000838152609a602052604081205460998054939450909284908110611a3f57611a3f611e5f565b906000526020600020015490508060998381548110611a6057611a60611e5f565b6000918252602080832090910192909255828152609a90915260408082208490558582528120556099805480611a9857611a98612186565b6001900381819060005260206000200160009055905550505050565b6000611abf836107af565b6001600160a01b039093166000908152609760209081526040808320868452825280832085905593825260989052919091209190915550565b6001600160e01b031981168114610c7a57600080fd5b600060208284031215611b2057600080fd5b8135610a9781611af8565b60005b83811015611b46578181015183820152602001611b2e565b50506000910152565b60008151808452611b67816020860160208601611b2b565b601f01601f19169290920160200192915050565b602081526000610a976020830184611b4f565b600060208284031215611ba057600080fd5b5035919050565b6001600160a01b0381168114610c7a57600080fd5b60008060408385031215611bcf57600080fd5b8235611bda81611ba7565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215611c1457600080fd5b8435611c1f81611ba7565b93506020850135611c2f81611ba7565b925060408501359150606085013567ffffffffffffffff80821115611c5357600080fd5b818701915087601f830112611c6757600080fd5b813581811115611c7957611c79611be8565b604051601f8201601f19908116603f01168101908382118183101715611ca157611ca1611be8565b816040528281528a6020848701011115611cba57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080600060608486031215611cf357600080fd5b8335611cfe81611ba7565b92506020840135611d0e81611ba7565b929592945050506040919091013590565b600060208284031215611d3157600080fd5b8135610a9781611ba7565b60008060408385031215611d4f57600080fd5b8235611d5a81611ba7565b915060208301358015158114611d6f57600080fd5b809150509250929050565b60008060408385031215611d8d57600080fd5b8235611d9881611ba7565b91506020830135611d6f81611ba7565b600181811c90821680611dbc57607f821691505b602082108103611ddc57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b6020808252601690820152754572726f723a2061646472657373206973207a65726f60501b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b60008351611e87818460208801611b2b565b835190830190611e9b818360208801611b2b565b64173539b7b760d91b9101908152600501949350505050565b600060208284031215611ec657600080fd5b8151610a9781611ba7565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60008351611fc5818460208801611b2b565b835190830190611fd9818360208801611b2b565b01949350505050565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061201590830184611b4f565b9695505050505050565b60006020828403121561203157600080fd5b8151610a9781611af8565b601f82111561058857600081815260208120601f850160051c810160208610156120635750805b601f850160051c820191505b818110156120825782815560010161206f565b505050505050565b815167ffffffffffffffff8111156120a4576120a4611be8565b6120b8816120b28454611da8565b8461203c565b602080601f8311600181146120ed57600084156120d55750858301515b600019600386901b1c1916600185901b178555612082565b600085815260208120601f198616915b8281101561211c578886015182559484019460019091019084016120fd565b508582101561213a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b818103818111156103b4576103b461214a565b808201808211156103b4576103b461214a565b634e487b7160e01b600052603160045260246000fdfea26469706673582212201a3f707f66d71a7924e7d197f1c12c5cff6b28d7ff66912c120103760507d14864736f6c63430008110033";

type NewNFT_v1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NewNFT_v1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NewNFT_v1__factory extends ContractFactory {
  constructor(...args: NewNFT_v1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NewNFT_v1> {
    return super.deploy(overrides || {}) as Promise<NewNFT_v1>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NewNFT_v1 {
    return super.attach(address) as NewNFT_v1;
  }
  override connect(signer: Signer): NewNFT_v1__factory {
    return super.connect(signer) as NewNFT_v1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NewNFT_v1Interface {
    return new utils.Interface(_abi) as NewNFT_v1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NewNFT_v1 {
    return new Contract(address, _abi, signerOrProvider) as NewNFT_v1;
  }
}
