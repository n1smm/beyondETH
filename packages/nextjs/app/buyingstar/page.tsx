"use client";
import React from "react";
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
import PageStarStyle from "../styles/pageStar.module.css";

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
export let formDataUser : string = " ";

const ShopStar = () => {

  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  // console.log(router);
  const [starData, setStarData] = useState<StarData>(new StarData());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formDataUser = JSON.stringify(starData);
    setStarData(new StarData());
    //alert(`Submitted: ${outputData}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, inputType: string) => {
    const value = e.target.value;
    const updatedData = new StarData();
    updatedData.input1 = starData.input1;
    updatedData.input2 = starData.input2;
    updatedData.input3 = starData.input3;
    const currentDate = new Date().toISOString().split('T')[0];

    if (inputType === 'input1') {
      updatedData.setInput1(value);
    } else if (inputType === 'input2') {
      if (value > currentDate) {
        alert('Date of birth cannot be in the future.');
        return;
      }
      updatedData.setInput2(value);
    } else if (inputType === 'input3') {
      if (value > currentDate || value < starData.input2) {
        alert('Date of departure cannot be in the future or before date of birth.');
        return;
      }
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
    createOffstar(Styles.buyablestar, 0);
    return () => {
      document.querySelectorAll(`.${Styles.buyablestar}`).forEach((buyablestar) => buyablestar.remove());

      };
    }, [router]);


    return (
      <div className={PageStarStyle.popuplayout}>
        <h1 className={PageStarStyle.title}>A lonely star...</h1>
        <form className={PageStarStyle.form} onSubmit={handleSubmit}>
          <div>
            {/* <label htmlFor="input1">Input 1: </label> */}
            <label className={PageStarStyle.label} htmlFor="input1">Name</label>
            <input className={PageStarStyle.inputform}
              id="input1"
              type="text"
              value={starData.input1}
              placeholder="eg. John Snow"
              onChange={(e) => handleInputChange(e, 'input1')}
              required
            />
          </div>
          
          <div>
            {/* <label htmlFor="input2">Input 2: </label> */}
            <label className={PageStarStyle.label} htmlFor="input2">Date of Birth</label>
            <input className={PageStarStyle.inputformdate}
              id="input2"
              type="date"
              value={starData.input2}
              onChange={(e) => handleInputChange(e, 'input2')}
            />
          </div>
    
          <div>
            {/* <label htmlFor="input3">Input 3: </label> */}
            <label className={PageStarStyle.label} htmlFor="input3">Date of Departure</label>
            <input  className={PageStarStyle.inputformdate}
              id="input3"
              type="date"
              placeholder="Date of Departure"
              value={starData.input3}
              onChange={(e) => handleInputChange(e, 'input3')}
              required
            />
          </div>
          <button className={PageStarStyle.submitButton} type="submit">Submit</button>
        </form>
        <button
            onClick={goBack}
            className={PageStarStyle.backButton}
            >
                <img
                src="/arrow.png"
                alt="Button Icon"
                className={PageStarStyle.imgButton}
                />
                go back to Space
            </button>
      </div>
    );
  
  };

export default ShopStar;
