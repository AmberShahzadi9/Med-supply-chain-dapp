import Web3 from "web3";
import App from 'App'; 
Web3 = require('web3')
import * as web3 from "web3-api";
import { web3Api } from "web3-api";
 


const CONTRACT_ADDRESS =
configuration.networks['5777'].address;
const CONTRACT_ABI = configuration.abi;


const contact = new Web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
const abi = require('ethjs-abi');

let account;
const main = async () => {
    const accounts = await web3.eth.requestAccounts();
}

main();