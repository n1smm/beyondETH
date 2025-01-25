"use client";
// import type { NextPage } from "next";
// import { useAccount } from "wagmi";
// import { Address } from "~~/components/scaffold-eth";
// import type { AppProps } from 'next/app';
// import Styles from "./styles/layout.module.css";
import { useState, useEffect } from "react";
// import StellarScene from "../components/StellarScene.jsx";
import "../../styles/globals.css";
import Styles from "../styles/layout.module.css";
// import { SwitchingPage } from "~~/components/Switching";
import { useRouter } from "next/navigation";
import pageStyles from "../styles/pageStar.module.css";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { parseEther } from "viem";
// import { abi } from "../../json"; // Update this path

import contractJson from "../../../hardhat/deployments/localhost/TokenCenter.json";
import abi2 from "../../../hardhat/deployments/localhost/TokenCenter.json";
import { ethers } from "ethers";

import { notification } from "~~/utils/scaffold-eth";
// import { useContract, useSigner } from "wagmi";
// import "../../../hardhat/contracts/YourContract.sol";
// import { useCallback } from "react";
class StarData {
  input1: string;
  input2: string;
  input3: string;

  constructor() {
    this.input1 = '';
    this.input2 = '';
    this.input3 = '';
  }

  setInput1(value: string) {
    this.input1 = value;
  }

  setInput2(value: string) {
    this.input2 = value;
  }

  setInput3(value: string) {
    this.input3 = value;
  }
}



const ShopStar = () => {
  const [starData, setStarData] = useState({ input1: "", input2: "" });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, inputType: string) => {
    const value = e.target.value;
    setStarData({
      ...starData,
      [inputType]: value,
    });
  };
  const mintTokenOne = async (input1: string, input2: string) => {
    try {
      // Contract address (replace with your contract's deployed address)
      const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"; // Replace with your contract's address
  
      // Create a new instance of the contract
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const abi = contractJson.abi;
      const contract = new ethers.Contract(contractAddress, abi, signer);
  
      const balance = await signer.getBalance();
      const gasPrice = await provider.getGasPrice();
      const estimatedGasCost = gasPrice.mul(21000); // Standard gas limit for a simple transfer
  
      if (balance.lt(estimatedGasCost)) {
        notification.error("Insufficient funds for transaction gas fees. Please add ETH to your wallet.");
        throw new Error("Insufficient funds for transaction gas fees. Please add ETH to your wallet.");
      }
  
      if (typeof contract.mintTokenOne !== 'function') {
        console.log(Object.keys(contract.interface.functions));
        console.error('mintTokenOne is not a function');
        return;
      }
  
      // Set a reasonable gas limit for the transaction (You can adjust this number)
      const gasLimit = 200000; // Set this to a value that works for your mintTokenOne function
  
      const tx = await contract.mintTokenOne(input1, input2, {
        gasLimit: gasLimit, // Add the gas limit here
      });
  
      console.log("Transaction sent:", tx);
  
      // Wait for the transaction to be mined
      await tx.wait();
  
      console.log("Token minted successfully!");
    } catch (error) {
      console.error("Error minting token:", error);
    }
  };
  
    return (
      <div className={pageStyles.popupbox}>
        <button
          onClick={() => mintTokenOne(starData.input1, starData.input2)}
        >
            <img
            src="/arrow.png"
            alt="Button Icon"
            //className= {pageStyles.buttonImg}
            />
            Back to Space
        </button>
        <h1>A lonely star...</h1>
        <div>
          {/* <label htmlFor="input1">Input 1: </label> */}
          <input className="form"
            id="input1"
            type="text"
            value={starData.input1}
            placeholder="Name"
            onChange={(e) => handleInputChange(e, 'input1')}
          />
        </div>
        
        <div>
          {/* <label htmlFor="input2">Input 2: </label> */}
          <input className="form"
            id="input2"
            type="date"
            value={starData.input2}
            placeholder="Name"
            onChange={(e) => handleInputChange(e, 'input2')}
          />

        </div>
  
        <div>
          {/* <label htmlFor="input3">Input 3: </label> */}
          <input className="form"
            id="input3"
            type="date"
            value={starData.input3}
            onChange={(e) => handleInputChange(e, 'input3')}
            required
          />
        </div>
      </div>
    );
  
  };

export default ShopStar;
