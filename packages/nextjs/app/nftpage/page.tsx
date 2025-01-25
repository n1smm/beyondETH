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

// import { useCallback } from "react";
// import DatePicker, { DatePickerProps } from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

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

  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  // console.log(router);
  const [starData, setStarData] = useState<StarData>(new StarData());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, inputType: string) => {
    const value = e.target.value;
    const updatedData = new StarData();
    updatedData.input1 = starData.input1;
    updatedData.input2 = starData.input2;
    updatedData.input3 = starData.input3;

    if (inputType === 'input1') {
      updatedData.setInput1(value);
    } else if (inputType === 'input2') {
      updatedData.setInput2(value);
    } else if (inputType === 'input3') {
      updatedData.setInput3(value);
    }

    setStarData(updatedData);
  };

  useEffect(() => {
    const createOffstar = (className: string, index: number) => {
      const image = document.createElement("div");
      image.className = className;
      image.style.position = "absolute";
      const size = `10vw`; 
      image.style.width = image.style.height = size;
      const rotation = `${Math.random() * 360}deg`;
      image.style.transform = `rotate(${rotation})`;

      const destination = index === 0 ? "/buyingstar" : "/buyingstar";

      image.addEventListener("click", () => {
        console.log(`Offstar ${index} clicked`); 
        if (router) router.push(destination);
      });

      document.body.appendChild(image);
    };
    createOffstar(Styles.nft, 0);
    return () => {
      document.querySelectorAll(`.${Styles.nft}`).forEach((nft) => nft.remove());

      };
    }, [router]);


    return (
      <div>
        <button
            onClick={goBack}
            style={{
                display: "flex",
                position: "absolute",
                top: "85%",
                left: "5%",
                // alignItems: "center",
                justifyContent: "center",
                padding: "10px 20px",
                backgroundColor: "transparent",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontFamily: "'Pompiere', serif",
                fontSize: "30px",
                lineHeight: "5px",
                // fontWeight: "light",
                color: "white",
                // justifyContent: "flex-start",
            }}
            >
                <img
                src="/arrow.png"
                alt="Button Icon"
                style={{
                    width: "150px",
                    height: "70px",
                    // verticalAlign: "middle"
                }}
                />
                go back to Space
            </button>
    </div>
    );
  
  };

export default ShopStar;
