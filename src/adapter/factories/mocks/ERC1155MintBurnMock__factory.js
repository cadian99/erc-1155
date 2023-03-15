/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { utils, Contract, ContractFactory } from "ethers";
const _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
            {
                internalType: "string",
                name: "_baseURI",
                type: "string",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "_approved",
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
                indexed: true,
                internalType: "address",
                name: "_operator",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "_ids",
                type: "uint256[]",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "_amounts",
                type: "uint256[]",
            },
        ],
        name: "TransferBatch",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_operator",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "TransferSingle",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "_uri",
                type: "string",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
        ],
        name: "URI",
        type: "event",
    },
    {
        stateMutability: "nonpayable",
        type: "fallback",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256",
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
        inputs: [
            {
                internalType: "address[]",
                name: "_owners",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "_ids",
                type: "uint256[]",
            },
        ],
        name: "balanceOfBatch",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "baseURI",
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
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "_ids",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "_values",
                type: "uint256[]",
            },
        ],
        name: "batchBurnMock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "_ids",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "_values",
                type: "uint256[]",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "batchMintMock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_value",
                type: "uint256",
            },
        ],
        name: "burnMock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "_operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "isOperator",
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
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_value",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "mintMock",
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
        inputs: [
            {
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "_ids",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "_amounts",
                type: "uint256[]",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "safeBatchTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
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
                name: "_operator",
                type: "address",
            },
            {
                internalType: "bool",
                name: "_approved",
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
                name: "_interfaceID",
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
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
        ],
        name: "uri",
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
];
const _bytecode = "0x60806040523480156200001157600080fd5b50604051620025a3380380620025a3833981016040819052620000349162000142565b818160036200004483826200023c565b5060026200005382826200023c565b505050505062000363565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200008657600080fd5b815167ffffffffffffffff80821115620000a457620000a46200005e565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715620000ed57620000ed6200005e565b816040528381526020925086838588010111156200010a57600080fd5b600091505b838210156200012e57858201830151818301840152908201906200010f565b600093810190920192909252949350505050565b600080604083850312156200015657600080fd5b825167ffffffffffffffff808211156200016f57600080fd5b6200017d8683870162000074565b935060208501519150808211156200019457600080fd5b50620001a38582860162000074565b9150509250929050565b600181811c90821680620001c257607f821691505b602082108103620001e357634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200023757600081815260208120601f850160051c81016020861015620002125750805b601f850160051c820191505b8181101562000233578281556001016200021e565b5050505b505050565b815167ffffffffffffffff8111156200025957620002596200005e565b62000271816200026a8454620001ad565b84620001e9565b602080601f831160018114620002c75760008415620002905750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b17855562000233565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b828110156200031657888601518255948401946001909101908401620002f5565b50858210156200035357878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b61223080620003736000396000f3fe608060405234801561001057600080fd5b50600436106100e95760003560e01c80636c0360eb1161008c578063bd7a6c4111610066578063bd7a6c411461025d578063d7a0ad9014610270578063e985e9c514610283578063f242432a146102cc576100e9565b80636c0360eb1461022f578063a22cb46514610237578063a3f091f51461024a576100e9565b80630e89341c116100c85780630e89341c146101d45780632eb2c2d6146101e7578063437ecbe9146101fc5780634e1273f41461020f576100e9565b8062fdd58e1461017657806301ffc9a71461019c57806306fdde03146101bf575b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f455243313135354d696e744275726e4d6f636b3a20494e56414c49445f4d455460448201527f484f44000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61018961018436600461178c565b6102df565b6040519081526020015b60405180910390f35b6101af6101aa3660046117e7565b610315565b6040519015158152602001610193565b6101c7610320565b6040516101939190611872565b6101c76101e2366004611885565b6103ae565b6101fa6101f5366004611a39565b6103e2565b005b6101fa61020a366004611ae3565b610586565b61022261021d366004611b16565b610596565b6040516101939190611c11565b6101c7610736565b6101fa610245366004611c24565b610743565b6101fa610258366004611c60565b6107da565b6101fa61026b366004611cc1565b6107ec565b6101fa61027e366004611d35565b6107f7565b6101af610291366004611dc2565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205460ff1690565b6101fa6102da366004611df5565b610803565b73ffffffffffffffffffffffffffffffffffffffff82166000908152602081815260408083208484529091529020545b92915050565b600061030f826109a0565b6003805461032d90611e5a565b80601f016020809104026020016040519081016040528092919081815260200182805461035990611e5a565b80156103a65780601f1061037b576101008083540402835291602001916103a6565b820191906000526020600020905b81548152906001019060200180831161038957829003601f168201915b505050505081565b606060026103bb836109fc565b6040516020016103cc929190611ec9565b6040516020818303038152906040529050919050565b3373ffffffffffffffffffffffffffffffffffffffff86161480610436575073ffffffffffffffffffffffffffffffffffffffff8516600090815260016020908152604080832033845290915290205460ff165b6104c2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f45524331313535237361666542617463685472616e7366657246726f6d3a204960448201527f4e56414c49445f4f50455241544f520000000000000000000000000000000000606482015260840161016d565b73ffffffffffffffffffffffffffffffffffffffff8416610565576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f45524331313535237361666542617463685472616e7366657246726f6d3a204960448201527f4e56414c49445f524543495049454e5400000000000000000000000000000000606482015260840161016d565b61057185858585610b5c565b61057f858585855a86610dc1565b5050505050565b610591838383610f4a565b505050565b60608151835114610629576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f455243313135352362616c616e63654f6642617463683a20494e56414c49445f60448201527f41525241595f4c454e4754480000000000000000000000000000000000000000606482015260840161016d565b6000835167ffffffffffffffff8111156106455761064561189e565b60405190808252806020026020018201604052801561066e578160200160208202803683370190505b50905060005b845181101561072e5760008086838151811061069257610692611fd6565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008583815181106106e8576106e8611fd6565b602002602001015181526020019081526020016000205482828151811061071157610711611fd6565b60209081029190910101528061072681612034565b915050610674565b509392505050565b6002805461032d90611e5a565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6107e684848484610fe8565b50505050565b610591838383611090565b6107e68484848461125c565b3373ffffffffffffffffffffffffffffffffffffffff86161480610857575073ffffffffffffffffffffffffffffffffffffffff8516600090815260016020908152604080832033845290915290205460ff165b6108e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f4552433131353523736166655472616e7366657246726f6d3a20494e56414c4960448201527f445f4f50455241544f5200000000000000000000000000000000000000000000606482015260840161016d565b73ffffffffffffffffffffffffffffffffffffffff8416610986576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f4552433131353523736166655472616e7366657246726f6d3a20494e56414c4960448201527f445f524543495049454e54000000000000000000000000000000000000000000606482015260840161016d565b61099285858585611432565b61057f858585855a8661150d565b60007ff176cbe4000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316016109f357506001919050565b61030f8261168c565b606081600003610a3f57505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115610a695780610a5381612034565b9150610a629050600a8361206c565b9150610a43565b60008167ffffffffffffffff811115610a8457610a8461189e565b6040519080825280601f01601f191660200182016040528015610aae576020820181803683370190505b509050815b8515610b5357610ac46001826120a7565b90506000610ad3600a8861206c565b610ade90600a6120ba565b610ae890886120a7565b610af39060306120d1565b905060008160f81b905080848481518110610b1057610b10611fd6565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610b4a600a8961206c565b97505050610ab3565b50949350505050565b8051825114610bed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603560248201527f45524331313535235f7361666542617463685472616e7366657246726f6d3a2060448201527f494e56414c49445f4152524159535f4c454e4754480000000000000000000000606482015260840161016d565b815160005b81811015610d3b57828181518110610c0c57610c0c611fd6565b60200260200101516000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000868481518110610c6657610c66611fd6565b602002602001015181526020019081526020016000206000828254610c8b91906120a7565b92505081905550828181518110610ca457610ca4611fd6565b60200260200101516000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000868481518110610cfe57610cfe611fd6565b602002602001015181526020019081526020016000206000828254610d2391906120ea565b90915550819050610d3381612034565b915050610bf2565b508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051610db29291906120fd565b60405180910390a45050505050565b610de08573ffffffffffffffffffffffffffffffffffffffff16611729565b15610f425760008573ffffffffffffffffffffffffffffffffffffffff1663bc197c8184338a8989886040518763ffffffff1660e01b8152600401610e29959493929190612122565b60206040518083038160008887f1158015610e48573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610e6d919061218d565b90507fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c810000000000000000000000000000000000000000000000000000000014610f40576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603f60248201527f45524331313535235f63616c6c6f6e455243313135354261746368526563656960448201527f7665643a20494e56414c49445f4f4e5f524543454956455f4d45535341474500606482015260840161016d565b505b505050505050565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020818152604080832085845290915281208054839290610f889084906120a7565b9091555050604080518381526020810183905260009173ffffffffffffffffffffffffffffffffffffffff86169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260208181526040808320868452909152812080548492906110269084906120ea565b9091555050604080518481526020810184905273ffffffffffffffffffffffffffffffffffffffff86169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46107e660008585855a8661150d565b815181518114611122576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f455243313135354d696e744275726e2362617463684275726e3a20494e56414c60448201527f49445f4152524159535f4c454e47544800000000000000000000000000000000606482015260840161016d565b60005b818110156111d65782818151811061113f5761113f611fd6565b60200260200101516000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600086848151811061119957611199611fd6565b6020026020010151815260200190815260200160002060008282546111be91906120a7565b909155508190506111ce81612034565b915050611125565b50600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb868660405161124e9291906120fd565b60405180910390a450505050565b81518351146112ed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f455243313135354d696e744275726e2362617463684d696e743a20494e56414c60448201527f49445f4152524159535f4c454e47544800000000000000000000000000000000606482015260840161016d565b825160005b818110156113a35783818151811061130c5761130c611fd6565b60200260200101516000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600087848151811061136657611366611fd6565b60200260200101518152602001908152602001600020600082825461138b91906120ea565b9091555081905061139b81612034565b9150506112f2565b508473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb878760405161141b9291906120fd565b60405180910390a461057f60008686865a87610dc1565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260208181526040808320858452909152812080548392906114709084906120a7565b909155505073ffffffffffffffffffffffffffffffffffffffff8316600090815260208181526040808320858452909152812080548392906114b39084906120ea565b9091555050604080518381526020810183905273ffffffffffffffffffffffffffffffffffffffff808616929087169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910161124e565b61152c8573ffffffffffffffffffffffffffffffffffffffff16611729565b15610f425760008573ffffffffffffffffffffffffffffffffffffffff1663f23a6e6184338a8989886040518763ffffffff1660e01b81526004016115759594939291906121aa565b60206040518083038160008887f1158015611594573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906115b9919061218d565b90507fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e610000000000000000000000000000000000000000000000000000000014610f40576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f45524331313535235f63616c6c6f6e4552433131353552656365697665643a2060448201527f494e56414c49445f4f4e5f524543454956455f4d455353414745000000000000606482015260840161016d565b60007f264985da000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316016116df57506001919050565b7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083161461030f565b6000813f801580159061175c57507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708114155b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461178757600080fd5b919050565b6000806040838503121561179f57600080fd5b6117a883611763565b946020939093013593505050565b7fffffffff00000000000000000000000000000000000000000000000000000000811681146117e457600080fd5b50565b6000602082840312156117f957600080fd5b813561175c816117b6565b60005b8381101561181f578181015183820152602001611807565b50506000910152565b60008151808452611840816020860160208601611804565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061175c6020830184611828565b60006020828403121561189757600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156119145761191461189e565b604052919050565b600067ffffffffffffffff8211156119365761193661189e565b5060051b60200190565b600082601f83011261195157600080fd5b813560206119666119618361191c565b6118cd565b82815260059290921b8401810191818101908684111561198557600080fd5b8286015b848110156119a05780358352918301918301611989565b509695505050505050565b600082601f8301126119bc57600080fd5b813567ffffffffffffffff8111156119d6576119d661189e565b611a0760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016118cd565b818152846020838601011115611a1c57600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a08688031215611a5157600080fd5b611a5a86611763565b9450611a6860208701611763565b9350604086013567ffffffffffffffff80821115611a8557600080fd5b611a9189838a01611940565b94506060880135915080821115611aa757600080fd5b611ab389838a01611940565b93506080880135915080821115611ac957600080fd5b50611ad6888289016119ab565b9150509295509295909350565b600080600060608486031215611af857600080fd5b611b0184611763565b95602085013595506040909401359392505050565b60008060408385031215611b2957600080fd5b823567ffffffffffffffff80821115611b4157600080fd5b818501915085601f830112611b5557600080fd5b81356020611b656119618361191c565b82815260059290921b84018101918181019089841115611b8457600080fd5b948201945b83861015611ba957611b9a86611763565b82529482019490820190611b89565b96505086013592505080821115611bbf57600080fd5b50611bcc85828601611940565b9150509250929050565b600081518084526020808501945080840160005b83811015611c0657815187529582019590820190600101611bea565b509495945050505050565b60208152600061175c6020830184611bd6565b60008060408385031215611c3757600080fd5b611c4083611763565b915060208301358015158114611c5557600080fd5b809150509250929050565b60008060008060808587031215611c7657600080fd5b611c7f85611763565b93506020850135925060408501359150606085013567ffffffffffffffff811115611ca957600080fd5b611cb5878288016119ab565b91505092959194509250565b600080600060608486031215611cd657600080fd5b611cdf84611763565b9250602084013567ffffffffffffffff80821115611cfc57600080fd5b611d0887838801611940565b93506040860135915080821115611d1e57600080fd5b50611d2b86828701611940565b9150509250925092565b60008060008060808587031215611d4b57600080fd5b611d5485611763565b9350602085013567ffffffffffffffff80821115611d7157600080fd5b611d7d88838901611940565b94506040870135915080821115611d9357600080fd5b611d9f88838901611940565b93506060870135915080821115611db557600080fd5b50611cb5878288016119ab565b60008060408385031215611dd557600080fd5b611dde83611763565b9150611dec60208401611763565b90509250929050565b600080600080600060a08688031215611e0d57600080fd5b611e1686611763565b9450611e2460208701611763565b93506040860135925060608601359150608086013567ffffffffffffffff811115611e4e57600080fd5b611ad6888289016119ab565b600181811c90821680611e6e57607f821691505b602082108103611ea7577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60008151611ebf818560208601611804565b9290920192915050565b600080845481600182811c915080831680611ee557607f831692505b60208084108203611f1d577f4e487b710000000000000000000000000000000000000000000000000000000086526022600452602486fd5b818015611f315760018114611f6457611f91565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0086168952841515850289019650611f91565b60008b81526020902060005b86811015611f895781548b820152908501908301611f70565b505084890196505b505050505050611fcd611fa48286611ead565b7f2e6a736f6e000000000000000000000000000000000000000000000000000000815260050190565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361206557612065612005565b5060010190565b6000826120a2577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b8181038181111561030f5761030f612005565b808202811582820484141761030f5761030f612005565b60ff818116838216019081111561030f5761030f612005565b8082018082111561030f5761030f612005565b6040815260006121106040830185611bd6565b8281036020840152611fcd8185611bd6565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525060a0604083015261215b60a0830186611bd6565b828103606084015261216d8186611bd6565b905082810360808401526121818185611828565b98975050505050505050565b60006020828403121561219f57600080fd5b815161175c816117b6565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525084604083015283606083015260a060808301526121ef60a0830184611828565b97965050505050505056fea264697066735822122021876f9937e5ba8a158335f30cd393ae80ee3b8f65906e170ca236e1700c308564736f6c63430008120033";
const isSuperArgs = (xs) => xs.length > 1;
export class ERC1155MintBurnMock__factory extends ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_name, _baseURI, overrides) {
        return super.deploy(_name, _baseURI, overrides || {});
    }
    getDeployTransaction(_name, _baseURI, overrides) {
        return super.getDeployTransaction(_name, _baseURI, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
ERC1155MintBurnMock__factory.bytecode = _bytecode;
ERC1155MintBurnMock__factory.abi = _abi;
