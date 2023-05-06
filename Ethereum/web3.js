import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // console.log(window.ethereum.enable());
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
  console.log("Web3: ", web3);
} else {
  const provider = new Web3.providers.HttpProvider(
<<<<<<< HEAD
    "https://sepolia.infura.io/v3/your Api key"
=======
    "https://sepolia.infura.io/v3/6171c493c214988aa8155ebfddd6f4"
>>>>>>> 278e6702031c32beedf83507948e723673d50294
  );
  web3 = new Web3(provider);
  console.log("Web3 else: ", web3);
}
export default web3;
