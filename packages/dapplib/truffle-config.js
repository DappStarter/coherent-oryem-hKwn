require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kitten bone tooth finger deliver remember unusual just clock equal genre'; 
let testAccounts = [
"0x73e83209e7c86574f31514df29be91d35715bd8757d30fc469fac1886f88a0f9",
"0x4812cd76c714e4bd23d13435e78c1519136e5a6cdafd0aee660003f43117f8c0",
"0xbd3c63fdaa5db02efc9951f63e74552b57d12c565d25d9531ff06bcee2ca6999",
"0x2a996755b75c9631921cdcc454fbc55438626bf2f9d938eb21327e26087be7a5",
"0xf42795a6b3cea19dc1b412a8384055b3daa89c5d55dfa4c95b9269222da4f54b",
"0x184cbce1f6c620494e83101ef2cb2552418379ce914ff0320e6c53d984f1c103",
"0xba56d751fd9b1128707e90732899f394f601e36088967596625b6a2846fd8216",
"0x7e7b4256d41cf1651c9af544b2e413518aa6869b9fd11d3516526793cd4ef64d",
"0xf0d9450f147ff5971fac467c1ffadb8a7cdb2d214a7ccb54503ba57db710e769",
"0x558e46392f3ca29edebfbfd28eee81f649cd9d492b5ae3328d891a6b9ae9a889"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

