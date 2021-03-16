"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SignatureValidator__factory = void 0;
var ethers_1 = require("ethers");
var SignatureValidator__factory = /** @class */ (function (_super) {
    __extends(SignatureValidator__factory, _super);
    function SignatureValidator__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    SignatureValidator__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    SignatureValidator__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    SignatureValidator__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    SignatureValidator__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    SignatureValidator__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return SignatureValidator__factory;
}(ethers_1.ContractFactory));
exports.SignatureValidator__factory = SignatureValidator__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_signerAddress",
                type: "address"
            },
            {
                internalType: "bytes32",
                name: "_hash",
                type: "bytes32"
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
            {
                internalType: "bytes",
                name: "_sig",
                type: "bytes"
            },
        ],
        name: "isValidSignature",
        outputs: [
            {
                internalType: "bool",
                name: "isValid",
                type: "bool"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50610c5f806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063fa4e12d714610030575b600080fd5b61017f6004803603608081101561004657600080fd5b73ffffffffffffffffffffffffffffffffffffffff8235169160208101359181019060608101604082013564010000000081111561008357600080fd5b82018360208201111561009557600080fd5b803590602001918460018302840111640100000000831117156100b757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929594936020810193503591505064010000000081111561010a57600080fd5b82018360208201111561011c57600080fd5b8035906020019184600183028401116401000000008311171561013e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610193945050505050565b604080519115158252519081900360200190f35b6000808251116101ee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526043815260200180610bab6043913960600191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff851661025a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526033815260200180610b786033913960400191505060405180910390fd5b600061026583610974565b60f81c9050600581106102c3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180610ad1603a913960400191505060405180910390fd5b60008160ff1660058111156102d457fe5b90506000808080808560058111156102e857fe5b141561033f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526036815260200180610b0b6036913960400191505060405180910390fd5b600185600581111561034d57fe5b14156104905787516061146103ad576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526037815260200180610b416037913960400191505060405180910390fd5b6103b8886000610a31565b92506103c5886020610a31565b9150876040815181106103d457fe5b602001015160f81c60f81b60f81c935060018a85858560405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa15801561043e573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015173ffffffffffffffffffffffffffffffffffffffff8d8116911614975061096c9650505050505050565b600285600581111561049e57fe5b14156105ee5787516061146104fe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526037815260200180610b416037913960400191505060405180910390fd5b610509886000610a31565b9250610516886020610a31565b91508760408151811061052557fe5b01602090810151604080517f19457468657265756d205369676e6564204d6573736167653a0a33320000000081850152603c8082018f905282518083039091018152605c82018084528151918601919091206000909152607c82018084525260f89290921c609c830181905260bc830187905260dc8301869052905190965060019260fc8084019391927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081019281900390910190855afa15801561043e573d6000803e3d6000fd5b60038560058111156105fc57fe5b14156107b457604080517f20c13b0b000000000000000000000000000000000000000000000000000000008152600481019182528a5160448201528a5173ffffffffffffffffffffffffffffffffffffffff8e16926320c13b0b928d928d92918291602482019160640190602087019080838360005b8381101561068a578181015183820152602001610672565b50505050905090810190601f1680156106b75780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b838110156106ea5781810151838201526020016106d2565b50505050905090810190601f1680156107175780820380516001836020036101000a031916815260200191505b5094505050505060206040518083038186803b15801561073657600080fd5b505afa15801561074a573d6000803e3d6000fd5b505050506040513d602081101561076057600080fd5b50517fffffffff00000000000000000000000000000000000000000000000000000000167f20c13b0b0000000000000000000000000000000000000000000000000000000014965061096c95505050505050565b60048560058111156107c257fe5b141561091b57604080517f1626ba7e000000000000000000000000000000000000000000000000000000008152600481018c8152602482019283528a5160448301528a5173ffffffffffffffffffffffffffffffffffffffff8f1693631626ba7e938f938e9390929160640190602085019080838360005b8381101561085257818101518382015260200161083a565b50505050905090810190601f16801561087f5780820380516001836020036101000a031916815260200191505b50935050505060206040518083038186803b15801561089d57600080fd5b505afa1580156108b1573d6000803e3d6000fd5b505050506040513d60208110156108c757600080fd5b50517fffffffff00000000000000000000000000000000000000000000000000000000167f1626ba7e0000000000000000000000000000000000000000000000000000000014965061096c95505050505050565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180610ad1603a913960400191505060405180910390fd5b949350505050565b6000808251116109cf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526037815260200180610a9a6037913960400191505060405180910390fd5b816001835103815181106109df57fe5b016020015182517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01909252507fff000000000000000000000000000000000000000000000000000000000000001690565b60008160200183511015610a90576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c815260200180610bee603c913960400191505060405180910390fd5b5001602001519056fe4c6962427974657323706f704c617374427974653a20475245415445525f5448414e5f5a45524f5f4c454e4754485f52455155495245445369676e617475726556616c696461746f7223697356616c69645369676e61747572653a20554e535550504f525445445f5349474e41545552455369676e617475726556616c696461746f7223697356616c69645369676e61747572653a20494c4c4547414c5f5349474e41545552455369676e617475726556616c696461746f7223697356616c69645369676e61747572653a204c454e4754485f39375f52455155495245445369676e617475726556616c696461746f7223697356616c69645369676e61747572653a20494e56414c49445f5349474e45525369676e617475726556616c696461746f7223697356616c69645369676e61747572653a204c454e4754485f475245415445525f5448414e5f305f52455155495245444c696242797465732372656164427974657333323a20475245415445525f4f525f455155414c5f544f5f33325f4c454e4754485f5245515549524544a26469706673582212201fa6c83c1b2dca1c7cfe666f5af6f671ebcb7c557f03bd30932c622270ffe35164736f6c63430007040033";
