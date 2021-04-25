require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan rice sad unhappy install casino symptom gaze'; 
let testAccounts = [
"0x8b01fc998f6df73ea1452e5775b664af253c80c42ad373b79318e927848b340d",
"0x327a756bf82076c9ea9078f133224901c747fe03365526b7dfd0a2ba5c36b5f0",
"0x319844c639ca34a81514ad16bb8e70ecad623761303d9c28d258571d125b7ad4",
"0xbf64e1795683f49d15c5172900c95a716c496de6991a66cd9bf864f237d248ae",
"0x6f4699437a38c62645b3884475918b73d5f5d99c3b62a1135a3f6d132d7f0d97",
"0x9a42f2aeaa7ad8f986b627247fe028fafd926deef6dd3c69a716985f0d2cf2ed",
"0x3d146f23a58362a10bcda48ac3e4680f0aea66bb579f06b2de076c3e42b4449c",
"0x90b5f25eb06279c742332568bf535894326b70dd09bf6d22f99154ff9706e2f9",
"0x598a0d1c9b2c5a56de2e42c87ee0de0936f1d7e211a2b73c1f21c12bea639225",
"0x96b1b08e9f6d0882094e2fcf3f0c9784b8ec7a6f2493110de1cfa3992e59a22a"
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
            version: '^0.5.11'
        }
    }
};
