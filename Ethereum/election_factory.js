import web3 from "./web3";
// const web3 = require("web3");
import ElectionFactory from "./Build/ElectionFact.json";

const instance = new web3.eth.Contract(
  JSON.parse(ElectionFactory.interface),
  // "0xF5d3574DDc21D8Bd8bcB380de232cbbc8161234e"
  // "0xcA51BD93a5ea1D3f5Bbdd57214B3eeaC3357aC0f"
  "0x2F4d556d50D14Bf263e44240C5f4570073CD4945"
);


export default instance;
