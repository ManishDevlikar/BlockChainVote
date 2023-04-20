import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  console.log(window.ethereum.enable());
  web3 = new Web3(window.web3.currentProvider);
  console.log("Web3: ", web3);
} else {
  const provider = new Web3.providers.HttpProvider(
    "https://sepolia.infura.io/v3/6c171c493c214988aa8155ebfddd6fe4"
  );
  web3 = new Web3(provider);
  console.log("Web3 else: ", web3);
}

export default web3;
