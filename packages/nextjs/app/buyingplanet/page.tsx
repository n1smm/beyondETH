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
import StylesPlanet from "../styles/planet.module.css";
// import { SwitchingPage } from "~~/components/Switching";
import { useRouter } from "next/navigation";
import PageStarStyle from "../styles/pageStar.module.css";
import Style from "../styles/layout.module.css";

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
    // updatedData.input1 = starData.input1;
    // updatedData.input2 = starData.input2;
    // updatedData.input3 = starData.input3;
    // const currentDate = new Date().toISOString().split('T')[0];

    // if (inputType === 'input1') {
    //   updatedData.setInput1(value);
    // } else if (inputType === 'input2') {
    //   if (value > currentDate) {
    //     alert('Date of birth cannot be in the future.');
    //     return;
    //   }
    //   updatedData.setInput2(value);
    // } else if (inputType === 'input3') {
    //   if (value > currentDate || value < starData.input2) {
    //     alert('Date of departure cannot be in the future or before date of birth.');
    //     return;
    //   }
    //   updatedData.setInput3(value);
    // }

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
    createOffstar(StylesPlanet.buyableplanet, 0);
    return () => {
      document.querySelectorAll(`.${StylesPlanet.buyableplanet}`).forEach((buyablestar) => buyablestar.remove());

      };
    }, [router]);


    return (
      <div className={PageStarStyle.popuplayout}>
        <h1 className={PageStarStyle.title}>An uninhabited planet...</h1>
        <form className={PageStarStyle.form} onSubmit={handleSubmit}>
          <div>
            {/* <label htmlFor="input1">Input 1: </label> */}
            <label className={PageStarStyle.label} htmlFor="input2">Build a house of memories</label>
            <input className={PageStarStyle.inputformdate}
              id="input1"
              type="text"
              placeholder="Add a memory..."
              value={starData.input1}
              onChange={(e) => handleInputChange(e, 'input2')}
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
