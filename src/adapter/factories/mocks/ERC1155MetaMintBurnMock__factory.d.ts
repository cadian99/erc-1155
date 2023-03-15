import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { ERC1155MetaMintBurnMock, ERC1155MetaMintBurnMockInterface } from "../../mocks/ERC1155MetaMintBurnMock";
declare type ERC1155MetaMintBurnMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC1155MetaMintBurnMock__factory extends ContractFactory {
    constructor(...args: ERC1155MetaMintBurnMockConstructorParams);
    deploy(_name: PromiseOrValue<string>, _baseURI: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ERC1155MetaMintBurnMock>;
    getDeployTransaction(_name: PromiseOrValue<string>, _baseURI: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ERC1155MetaMintBurnMock;
    connect(signer: Signer): ERC1155MetaMintBurnMock__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200418538038062004185833981016040819052620000349162000142565b818160046200004483826200023c565b5060036200005382826200023c565b505050505062000363565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200008657600080fd5b815167ffffffffffffffff80821115620000a457620000a46200005e565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715620000ed57620000ed6200005e565b816040528381526020925086838588010111156200010a57600080fd5b600091505b838210156200012e57858201830151818301840152908201906200010f565b600093810190920192909252949350505050565b600080604083850312156200015657600080fd5b825167ffffffffffffffff808211156200016f57600080fd5b6200017d8683870162000074565b935060208501519150808211156200019457600080fd5b50620001a38582860162000074565b9150509250929050565b600181811c90821680620001c257607f821691505b602082108103620001e357634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200023757600081815260208120601f850160051c81016020861015620002125750805b601f850160051c820191505b8181101562000233578281556001016200021e565b5050505b505050565b815167ffffffffffffffff8111156200025957620002596200005e565b62000271816200026a8454620001ad565b84620001e9565b602080601f831160018114620002c75760008415620002905750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b17855562000233565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b828110156200031657888601518255948401946001909101908401620002f5565b50858210156200035357878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b613e1280620003736000396000f3fe608060405234801561001057600080fd5b50600436106101505760003560e01c8063a22cb465116100cd578063d7a0ad9011610081578063f242432a11610066578063f242432a1461038f578063f5d4c820146103a2578063fa4e12d7146103b557610150565b8063d7a0ad9014610333578063e985e9c51461034657610150565b8063a3f091f5116100b2578063a3f091f5146102fa578063bd7a6c411461030d578063ce0b514b1461032057610150565b8063a22cb465146102d4578063a3d4926e146102e757610150565b80632d0335ab11610124578063437ecbe911610109578063437ecbe9146102995780634e1273f4146102ac5780636c0360eb146102cc57610150565b80632d0335ab1461024e5780632eb2c2d61461028457610150565b8062fdd58e146101dd57806301ffc9a71461020357806306fdde03146102265780630e89341c1461023b575b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f455243313135354d6574614d696e744275726e4d6f636b3a20494e56414c494460448201527f5f4d4554484f440000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6101f06101eb366004612e33565b6103c8565b6040519081526020015b60405180910390f35b610216610211366004612e8d565b6103fe565b60405190151581526020016101fa565b61022e610409565b6040516101fa9190612f18565b61022e610249366004612f2b565b610497565b6101f061025c366004612f44565b73ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205490565b610297610292366004613105565b6104cb565b005b6102976102a73660046131b3565b61066f565b6102bf6102ba3660046131e8565b61067f565b6040516101fa91906132e5565b61022e61081f565b6102976102e2366004613306565b61082c565b6102976102f536600461333f565b6108c3565b610297610308366004613400565b610af5565b61029761031b366004613463565b610b07565b61029761032e3660046134d9565b610b12565b610297610341366004613553565b610c80565b6102166103543660046135e2565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205460ff1690565b61029761039d366004613610565b610c8c565b6102976103b0366004613679565b610e29565b6102166103c33660046136e8565b610f80565b73ffffffffffffffffffffffffffffffffffffffff82166000908152602081815260408083208484529091529020545b92915050565b60006103f8826117c9565b6004805461041690613739565b80601f016020809104026020016040519081016040528092919081815260200182805461044290613739565b801561048f5780601f106104645761010080835404028352916020019161048f565b820191906000526020600020905b81548152906001019060200180831161047257829003601f168201915b505050505081565b606060036104a483611825565b6040516020016104b59291906137a8565b6040516020818303038152906040529050919050565b3373ffffffffffffffffffffffffffffffffffffffff8616148061051f575073ffffffffffffffffffffffffffffffffffffffff8516600090815260016020908152604080832033845290915290205460ff165b6105ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f45524331313535237361666542617463685472616e7366657246726f6d3a204960448201527f4e56414c49445f4f50455241544f52000000000000000000000000000000000060648201526084016101d4565b73ffffffffffffffffffffffffffffffffffffffff841661064e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f45524331313535237361666542617463685472616e7366657246726f6d3a204960448201527f4e56414c49445f524543495049454e540000000000000000000000000000000060648201526084016101d4565b61065a85858585611985565b610668858585855a86611bea565b5050505050565b61067a838383611d69565b505050565b60608151835114610712576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f455243313135352362616c616e63654f6642617463683a20494e56414c49445f60448201527f41525241595f4c454e475448000000000000000000000000000000000000000060648201526084016101d4565b6000835167ffffffffffffffff81111561072e5761072e612f61565b604051908082528060200260200182016040528015610757578160200160208202803683370190505b50905060005b84518110156108175760008086838151811061077b5761077b6138b5565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008583815181106107d1576107d16138b5565b60200260200101518152602001908152602001600020548282815181106107fa576107fa6138b5565b60209081029190910101528061080f81613913565b91505061075d565b509392505050565b6003805461041690613739565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff8516610966576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f455243313135354d657461236d6574615361666542617463685472616e73666560448201527f7246726f6d3a20494e56414c49445f524543495049454e54000000000000000060648201526084016101d4565b60606109a960405180608001604052806000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001606081525090565b6000610a8b89857fa3d4926e8cf8fe8e020cd29f514c256bc2eec62aa2337e415f1a33a4828af5a060001b8c8c8c6040516020016109e7919061394b565b604051602081830303815290604052805190602001208c604051602001610a0e919061394b565b604051602081830303815290604052805190602001208c610a30576000610a33565b60015b60408051602081019790975273ffffffffffffffffffffffffffffffffffffffff95861690870152939092166060850152608084015260a083015260c082015260e0015b604051602081830303815290604052611e07565b9050610a9989898989611985565b8415610adc5780806020019051810190610ab39190613a55565b8094508193505050610acd89898989866020015188611bea565b610ad78983612097565b610aea565b610aea898989895a86611bea565b505050505050505050565b610b018484848461240a565b50505050565b61067a8383836124b2565b73ffffffffffffffffffffffffffffffffffffffff8516610bb5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603360248201527f455243313135354d657461236d657461536166655472616e7366657246726f6d60448201527f3a20494e56414c49445f524543495049454e540000000000000000000000000060648201526084016101d4565b6060610bf860405180608001604052806000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001606081525090565b6000610c3089857fce0b514b3931bdbe4d5d44e4f035afe7113767b7db71949271f6a62d9c60f558828c8c8c8c610a30576000610a33565b9050610c3e8989898961267e565b8415610c725780806020019051810190610c589190613a55565b8094508193505050610acd89898989866020015188612759565b610aea898989895a86612759565b610b01848484846128d8565b3373ffffffffffffffffffffffffffffffffffffffff86161480610ce0575073ffffffffffffffffffffffffffffffffffffffff8516600090815260016020908152604080832033845290915290205460ff165b610d6c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f4552433131353523736166655472616e7366657246726f6d3a20494e56414c4960448201527f445f4f50455241544f520000000000000000000000000000000000000000000060648201526084016101d4565b73ffffffffffffffffffffffffffffffffffffffff8416610e0f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f4552433131353523736166655472616e7366657246726f6d3a20494e56414c4960448201527f445f524543495049454e5400000000000000000000000000000000000000000060648201526084016101d4565b610e1b8585858561267e565b610668858585855a86612759565b6000610eb486837ff5d4c820494c8595de274c7ff619bead38aac4fbc3d143b5bf956aa4b84fa524828989610e5f576000610e62565b60015b89610e6e576000610e71565b60015b60408051602081019690965273ffffffffffffffffffffffffffffffffffffffff94851690860152929091166060840152608083015260a082015260c001610a77565b73ffffffffffffffffffffffffffffffffffffffff8781166000818152600160209081526040808320948b168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168a15159081179091559151918252939450919290917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a38215610f7857600081806020019051810190610f6a9190613aaf565b9050610f768782612097565b505b505050505050565b600080825111611038576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604360248201527f5369676e617475726556616c696461746f7223697356616c69645369676e617460448201527f7572653a204c454e4754485f475245415445525f5448414e5f305f524551554960648201527f5245440000000000000000000000000000000000000000000000000000000000608482015260a4016101d4565b73ffffffffffffffffffffffffffffffffffffffff85166110db576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603360248201527f5369676e617475726556616c696461746f7223697356616c69645369676e617460448201527f7572653a20494e56414c49445f5349474e45520000000000000000000000000060648201526084016101d4565b60006110e683612aae565b60f81c90506005811061117b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f5369676e617475726556616c696461746f7223697356616c69645369676e617460448201527f7572653a20554e535550504f525445445f5349474e415455524500000000000060648201526084016101d4565b60008160ff16600581111561119257611192613ae4565b90506000808080808560058111156111ac576111ac613ae4565b03611239576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5369676e617475726556616c696461746f7223697356616c69645369676e617460448201527f7572653a20494c4c4547414c5f5349474e41545552450000000000000000000060648201526084016101d4565b600185600581111561124d5761124d613ae4565b036113bf5787516061146112e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603760248201527f5369676e617475726556616c696461746f7223697356616c69645369676e617460448201527f7572653a204c454e4754485f39375f524551554952454400000000000000000060648201526084016101d4565b6112ee886000612bb1565b92506112fb886020612bb1565b915087604081518110611310576113106138b5565b0160209081015160408051600081529283018082528d905260f89190911c9082018190526060820185905260808201849052945060019060a0015b6020604051602081039080840390855afa15801561136d573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015173ffffffffffffffffffffffffffffffffffffffff8d811691161497506117c19650505050505050565b60028560058111156113d3576113d3613ae4565b03611539578751606114611469576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603760248201527f5369676e617475726556616c696461746f7223697356616c69645369676e617460448201527f7572653a204c454e4754485f39375f524551554952454400000000000000000060648201526084016101d4565b611474886000612bb1565b9250611481886020612bb1565b915087604081518110611496576114966138b5565b016020908101516040517f19457468657265756d205369676e6564204d6573736167653a0a33320000000092810192909252603c82018c905260f81c9450600190605c01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a00161134b565b600385600581111561154d5761154d613ae4565b03611639576040517f20c13b0b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8c16906320c13b0b906115a6908c908c90600401613b13565b602060405180830381865afa1580156115c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115e79190613b38565b7fffffffff00000000000000000000000000000000000000000000000000000000167f20c13b0b000000000000000000000000000000000000000000000000000000001496506117c195505050505050565b600485600581111561164d5761164d613ae4565b03611739576040517f1626ba7e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8c1690631626ba7e906116a6908d908c90600401613b55565b602060405180830381865afa1580156116c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116e79190613b38565b7fffffffff00000000000000000000000000000000000000000000000000000000167f1626ba7e000000000000000000000000000000000000000000000000000000001496506117c195505050505050565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f5369676e617475726556616c696461746f7223697356616c69645369676e617460448201527f7572653a20554e535550504f525445445f5349474e415455524500000000000060648201526084016101d4565b949350505050565b60007ff176cbe4000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083160161181c57506001919050565b6103f882612c64565b60608160000361186857505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115611892578061187c81613913565b915061188b9050600a83613b6e565b915061186c565b60008167ffffffffffffffff8111156118ad576118ad612f61565b6040519080825280601f01601f1916602001820160405280156118d7576020820181803683370190505b509050815b851561197c576118ed600182613ba9565b905060006118fc600a88613b6e565b61190790600a613bbc565b6119119088613ba9565b61191c906030613bd3565b905060008160f81b905080848481518110611939576119396138b5565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611973600a89613b6e565b975050506118dc565b50949350505050565b8051825114611a16576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603560248201527f45524331313535235f7361666542617463685472616e7366657246726f6d3a2060448201527f494e56414c49445f4152524159535f4c454e475448000000000000000000000060648201526084016101d4565b815160005b81811015611b6457828181518110611a3557611a356138b5565b60200260200101516000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000868481518110611a8f57611a8f6138b5565b602002602001015181526020019081526020016000206000828254611ab49190613ba9565b92505081905550828181518110611acd57611acd6138b5565b60200260200101516000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000868481518110611b2757611b276138b5565b602002602001015181526020019081526020016000206000828254611b4c9190613bec565b90915550819050611b5c81613913565b915050611a1b565b508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051611bdb929190613bff565b60405180910390a45050505050565b611c098573ffffffffffffffffffffffffffffffffffffffff16612d01565b15610f785760008573ffffffffffffffffffffffffffffffffffffffff1663bc197c8184338a8989886040518763ffffffff1660e01b8152600401611c52959493929190613c24565b60206040518083038160008887f1158015611c71573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190611c969190613b38565b90507fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c810000000000000000000000000000000000000000000000000000000014610f76576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603f60248201527f45524331313535235f63616c6c6f6e455243313135354261746368526563656960448201527f7665643a20494e56414c49445f4f4e5f524543454956455f4d4553534147450060648201526084016101d4565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020818152604080832085845290915281208054839290611da7908490613ba9565b9091555050604080518381526020810183905260009173ffffffffffffffffffffffffffffffffffffffff86169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60608083806020019051810190611e1e9190613c8f565b73ffffffffffffffffffffffffffffffffffffffff871660009081526002602052604081205491945091925090611e56836041612bb1565b9050818110801590611e715750611e6e826064613bec565b81105b611efd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f455243313135354d657461235f7369676e617475726556616c69646174696f6e60448201527f3a20494e56414c49445f4e4f4e4345000000000000000000000000000000000060648201526084016101d4565b6000611f3986838780519060200120604051602001611f1e93929190613cc6565b60405160208183030381529060405280519060200120612d3b565b90506000868387604051602001611f5293929190613ced565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190529050611f8d836001613bec565b73ffffffffffffffffffffffffffffffffffffffff8a166000818152600260205260409020919091557fb861b7bdbe611a846ab271b8d2810391bc8b5a968f390c322438ecab66bccf59611fe2856001613bec565b60405190815260200160405180910390a2611fff89838388610f80565b61208b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603360248201527f455243313135354d657461235f7369676e617475726556616c69646174696f6e60448201527f3a20494e56414c49445f5349474e41545552450000000000000000000000000060648201526084016101d4565b50505050509392505050565b60006120a68260600151612aae565b60f81c90506002811061213b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f455243313135354d657461235f7472616e736665724761734665653a20554e5360448201527f5550504f525445445f544f4b454e00000000000000000000000000000000000060648201526084016101d4565b60008160ff16600281111561215257612152613ae4565b835160408501519192506000918291829173ffffffffffffffffffffffffffffffffffffffff161561218857866040015161218a565b335b925060008560028111156121a0576121a0613ae4565b036122b75786606001518060200190518101906121bd9190613d24565b90945091503073ffffffffffffffffffffffffffffffffffffffff85160361220d576121eb8884848461267e565b6122088884845a8560405180602001604052806000815250612759565b612400565b6040517ff242432a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff89811660048301528481166024830152604482018490526064820183905260a06084830152600060a483015285169063f242432a9060c401600060405180830381600087803b15801561229a57600080fd5b505af11580156122ae573d6000803e3d6000fd5b50505050612400565b86606001518060200190518101906122cf9190613d52565b6040517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a81166004830152858116602483015260448201849052919550908516906323b872dd906064016020604051808303816000875af1158015612350573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123749190613d6f565b612400576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f455243313135354d657461235f7472616e736665724761734665653a2045524360448201527f32305f5452414e534645525f4641494c4544000000000000000000000000000060648201526084016101d4565b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841660009081526020818152604080832086845290915281208054849290612448908490613bec565b9091555050604080518481526020810184905273ffffffffffffffffffffffffffffffffffffffff86169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610b0160008585855a86612759565b815181518114612544576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f455243313135354d696e744275726e2362617463684275726e3a20494e56414c60448201527f49445f4152524159535f4c454e4754480000000000000000000000000000000060648201526084016101d4565b60005b818110156125f857828181518110612561576125616138b5565b60200260200101516000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008684815181106125bb576125bb6138b5565b6020026020010151815260200190815260200160002060008282546125e09190613ba9565b909155508190506125f081613913565b915050612547565b50600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051612670929190613bff565b60405180910390a450505050565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260208181526040808320858452909152812080548392906126bc908490613ba9565b909155505073ffffffffffffffffffffffffffffffffffffffff8316600090815260208181526040808320858452909152812080548392906126ff908490613bec565b9091555050604080518381526020810183905273ffffffffffffffffffffffffffffffffffffffff808616929087169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101612670565b6127788573ffffffffffffffffffffffffffffffffffffffff16612d01565b15610f785760008573ffffffffffffffffffffffffffffffffffffffff1663f23a6e6184338a8989886040518763ffffffff1660e01b81526004016127c1959493929190613d8c565b60206040518083038160008887f11580156127e0573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906128059190613b38565b90507fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e610000000000000000000000000000000000000000000000000000000014610f76576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f45524331313535235f63616c6c6f6e4552433131353552656365697665643a2060448201527f494e56414c49445f4f4e5f524543454956455f4d45535341474500000000000060648201526084016101d4565b8151835114612969576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f455243313135354d696e744275726e2362617463684d696e743a20494e56414c60448201527f49445f4152524159535f4c454e4754480000000000000000000000000000000060648201526084016101d4565b825160005b81811015612a1f57838181518110612988576129886138b5565b60200260200101516000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008784815181106129e2576129e26138b5565b602002602001015181526020019081526020016000206000828254612a079190613bec565b90915550819050612a1781613913565b91505061296e565b508473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051612a97929190613bff565b60405180910390a461066860008686865a87611bea565b600080825111612b40576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603760248201527f4c6962427974657323706f704c617374427974653a20475245415445525f544860448201527f414e5f5a45524f5f4c454e4754485f524551554952454400000000000000000060648201526084016101d4565b8160018351612b4f9190613ba9565b81518110612b5f57612b5f6138b5565b016020015182517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01909252507fff000000000000000000000000000000000000000000000000000000000000001690565b6000612bbe826020613bec565b83511015612c4e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603c60248201527f4c696242797465732372656164427974657333323a20475245415445525f4f5260448201527f5f455155414c5f544f5f33325f4c454e4754485f52455155495245440000000060648201526084016101d4565b612c59602083613bec565b929092015192915050565b60007f264985da000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831601612cb757506001919050565b7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316146103f8565b6000813f8015801590612d3457507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708114155b9392505050565b60006040518060400160405280600281526020017f19010000000000000000000000000000000000000000000000000000000000008152507f035aff83d86937d35b32e04f0ddc6ff469290eef2f1b692d8a815c89404d474960001b30604051602001612dc892919091825273ffffffffffffffffffffffffffffffffffffffff16602082015260400190565b6040516020818303038152906040528051906020012083604051602001612df193929190613cc6565b604051602081830303815290604052805190602001209050919050565b73ffffffffffffffffffffffffffffffffffffffff81168114612e3057600080fd5b50565b60008060408385031215612e4657600080fd5b8235612e5181612e0e565b946020939093013593505050565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114612e3057600080fd5b600060208284031215612e9f57600080fd5b8135612d3481612e5f565b60005b83811015612ec5578181015183820152602001612ead565b50506000910152565b60008151808452612ee6816020860160208601612eaa565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000612d346020830184612ece565b600060208284031215612f3d57600080fd5b5035919050565b600060208284031215612f5657600080fd5b8135612d3481612e0e565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715612fd757612fd7612f61565b604052919050565b600067ffffffffffffffff821115612ff957612ff9612f61565b5060051b60200190565b600082601f83011261301457600080fd5b8135602061302961302483612fdf565b612f90565b82815260059290921b8401810191818101908684111561304857600080fd5b8286015b84811015613063578035835291830191830161304c565b509695505050505050565b600067ffffffffffffffff82111561308857613088612f61565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126130c557600080fd5b81356130d36130248261306e565b8181528460208386010111156130e857600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a0868803121561311d57600080fd5b853561312881612e0e565b9450602086013561313881612e0e565b9350604086013567ffffffffffffffff8082111561315557600080fd5b61316189838a01613003565b9450606088013591508082111561317757600080fd5b61318389838a01613003565b9350608088013591508082111561319957600080fd5b506131a6888289016130b4565b9150509295509295909350565b6000806000606084860312156131c857600080fd5b83356131d381612e0e565b95602085013595506040909401359392505050565b600080604083850312156131fb57600080fd5b823567ffffffffffffffff8082111561321357600080fd5b818501915085601f83011261322757600080fd5b8135602061323761302483612fdf565b82815260059290921b8401810191818101908984111561325657600080fd5b948201945b8386101561327d57853561326e81612e0e565b8252948201949082019061325b565b9650508601359250508082111561329357600080fd5b506132a085828601613003565b9150509250929050565b600081518084526020808501945080840160005b838110156132da578151875295820195908201906001016132be565b509495945050505050565b602081526000612d3460208301846132aa565b8015158114612e3057600080fd5b6000806040838503121561331957600080fd5b823561332481612e0e565b91506020830135613334816132f8565b809150509250929050565b60008060008060008060c0878903121561335857600080fd5b863561336381612e0e565b9550602087013561337381612e0e565b9450604087013567ffffffffffffffff8082111561339057600080fd5b61339c8a838b01613003565b955060608901359150808211156133b257600080fd5b6133be8a838b01613003565b9450608089013591506133d0826132f8565b90925060a088013590808211156133e657600080fd5b506133f389828a016130b4565b9150509295509295509295565b6000806000806080858703121561341657600080fd5b843561342181612e0e565b93506020850135925060408501359150606085013567ffffffffffffffff81111561344b57600080fd5b613457878288016130b4565b91505092959194509250565b60008060006060848603121561347857600080fd5b833561348381612e0e565b9250602084013567ffffffffffffffff808211156134a057600080fd5b6134ac87838801613003565b935060408601359150808211156134c257600080fd5b506134cf86828701613003565b9150509250925092565b60008060008060008060c087890312156134f257600080fd5b86356134fd81612e0e565b9550602087013561350d81612e0e565b94506040870135935060608701359250608087013561352b816132f8565b915060a087013567ffffffffffffffff81111561354757600080fd5b6133f389828a016130b4565b6000806000806080858703121561356957600080fd5b843561357481612e0e565b9350602085013567ffffffffffffffff8082111561359157600080fd5b61359d88838901613003565b945060408701359150808211156135b357600080fd5b6135bf88838901613003565b935060608701359150808211156135d557600080fd5b50613457878288016130b4565b600080604083850312156135f557600080fd5b823561360081612e0e565b9150602083013561333481612e0e565b600080600080600060a0868803121561362857600080fd5b853561363381612e0e565b9450602086013561364381612e0e565b93506040860135925060608601359150608086013567ffffffffffffffff81111561366d57600080fd5b6131a6888289016130b4565b600080600080600060a0868803121561369157600080fd5b853561369c81612e0e565b945060208601356136ac81612e0e565b935060408601356136bc816132f8565b925060608601356136cc816132f8565b9150608086013567ffffffffffffffff81111561366d57600080fd5b600080600080608085870312156136fe57600080fd5b843561370981612e0e565b935060208501359250604085013567ffffffffffffffff8082111561372d57600080fd5b6135bf888389016130b4565b600181811c9082168061374d57607f821691505b602082108103613786577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b6000815161379e818560208601612eaa565b9290920192915050565b600080845481600182811c9150808316806137c457607f831692505b602080841082036137fc577f4e487b710000000000000000000000000000000000000000000000000000000086526022600452602486fd5b818015613810576001811461384357613870565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0086168952841515850289019650613870565b60008b81526020902060005b868110156138685781548b82015290850190830161384f565b505084890196505b5050505050506138ac613883828661378c565b7f2e6a736f6e000000000000000000000000000000000000000000000000000000815260050190565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203613944576139446138e4565b5060010190565b815160009082906020808601845b8381101561397557815185529382019390820190600101613959565b50929695505050505050565b600082601f83011261399257600080fd5b81516139a06130248261306e565b8181528460208386010111156139b557600080fd5b6117c1826020830160208701612eaa565b6000608082840312156139d857600080fd5b6040516080810167ffffffffffffffff82821081831117156139fc576139fc612f61565b81604052829350845183526020850151602084015260408501519150613a2182612e0e565b8160408401526060850151915080821115613a3b57600080fd5b50613a4885828601613981565b6060830152505092915050565b60008060408385031215613a6857600080fd5b825167ffffffffffffffff80821115613a8057600080fd5b613a8c868387016139c6565b93506020850151915080821115613aa257600080fd5b506132a085828601613981565b600060208284031215613ac157600080fd5b815167ffffffffffffffff811115613ad857600080fd5b6117c1848285016139c6565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b604081526000613b266040830185612ece565b82810360208401526138ac8185612ece565b600060208284031215613b4a57600080fd5b8151612d3481612e5f565b8281526040602082015260006117c16040830184612ece565b600082613ba4577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b818103818111156103f8576103f86138e4565b80820281158282048414176103f8576103f86138e4565b60ff81811683821601908111156103f8576103f86138e4565b808201808211156103f8576103f86138e4565b604081526000613c1260408301856132aa565b82810360208401526138ac81856132aa565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525060a06040830152613c5d60a08301866132aa565b8281036060840152613c6f81866132aa565b90508281036080840152613c838185612ece565b98975050505050505050565b60008060408385031215613ca257600080fd5b825167ffffffffffffffff80821115613cba57600080fd5b613a8c86838701613981565b60008451613cd8818460208901612eaa565b91909101928352506020820152604001919050565b60008451613cff818460208901612eaa565b82018481528351613d17816020808501908801612eaa565b0160200195945050505050565b60008060408385031215613d3757600080fd5b8251613d4281612e0e565b6020939093015192949293505050565b600060208284031215613d6457600080fd5b8151612d3481612e0e565b600060208284031215613d8157600080fd5b8151612d34816132f8565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525084604083015283606083015260a06080830152613dd160a0830184612ece565b97965050505050505056fea264697066735822122085a984cb87d1882d86be4e4f9921654af97ee515b51188027564f18c6cf69e2a64736f6c63430008120033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ERC1155MetaMintBurnMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC1155MetaMintBurnMock;
}
export {};
