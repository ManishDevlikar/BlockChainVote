const IPFS = require("ipfs-api");
// const { create } = require("ipfs-http-client");
import { Buffer } from "buffer";
const projectId = "Your ProjectID";
const secretKey = "Your SecretKey";
const auth = `Basic ${Buffer.from(`${projectId}:${secretKey}`).toString(
  "base64"
)}`;
// infura-ipfs.io
const ipfs = IPFS({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  apiPath: "api/v0",
  headers: {
    authorization: auth,
  },
});
export default ipfs;

// import { create as ipfsHttpClient } from "ipfs-http-client";
// ipfsHttpClient;
