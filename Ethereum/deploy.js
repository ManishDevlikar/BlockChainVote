const assert = require("assert");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const eF = require("./Build/ElectionFact.json");

const provider = new HDWalletProvider(
  "Your Secret Recovery Phrase",
  "https://sepolia.infura.io/v3/ Your Api key"
);
const web3 = new Web3(provider);

const deploy = async () => {
  try {
    const accounts = await web3.eth.getAccounts();

    console.log("Attemping to deploy from account", accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(eF.interface))
      .deploy({ data: "0x" + eF.bytecode })
      .send({ gas: "3000000", from: accounts[0] });

    console.log("Contract deployed to: ", result.options.address);
    provider.engine.stop();
  } catch (error) {
    console.log(error);
  }
};
deploy();
