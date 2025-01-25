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
import PageStarStyle from "../styles/pageStar.module.css";

import Planets from "../objects/planets";
import NftStar from "../objects/nftstar";

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
  const router2 = useRouter();

  const goBack = () => {
    router.back();
  };


    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //   e.preventDefault();
      // formDataUser = JSON.stringify(starData);
      // setStarData(new StarData());
      //alert(`Submitted: ${outputData}`);
    // };
  // console.log(router);
  // const [starData, setStarData] = useState<StarData>(new StarData());

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, inputType: string) => {
  //   const value = e.target.value;
  //   const updatedData = new StarData();
  //   updatedData.input1 = starData.input1;
  //   updatedData.input2 = starData.input2;
  //   updatedData.input3 = starData.input3;

  //   if (inputType === 'input1') {
  //     updatedData.setInput1(value);
  //   } else if (inputType === 'input2') {
  //     updatedData.setInput2(value);
  //   } else if (inputType === 'input3') {
  //     updatedData.setInput3(value);
  //   }

  //   setStarData(updatedData);
  // };

  // useEffect(() => {
  //   const createOffstar = (className: string, classNamee: string, index: number) => {
  //     const image = document.createElement("div");
  //     const imagee = document.createElement("div");
  //     image.className = className;
  //     imagee.className = classNamee;
  //     image.style.position = "absolute";
  //     imagee.style.position = "absolute";
  //     const size = `10vw`; 
  //     image.style.width = image.style.height = imagee.style.width = imagee.style.height = size;
  //     const rotation = `${Math.random() * 360}deg`;
  //     imagee.style.transform = `rotate(${rotation})`;
  //     image.style.transform = `rotate(${rotation})`;

  //     const destination = index === 0 ? "/buyingstar" : "/buyingstar";

  //     // image.addEventListener("click", () => {
  //     //   console.log(`Offstar ${index} clicked`); 
  //     //   if (router) router.push(destination);
  //     // });

  //     document.body.appendChild(image);
  //     document.body.appendChild(imagee);
  //   };
  //   createOffstar(Styles.boughtstar, Styles.boughtstar_light, 0);
  //   return () => {
  //     document.querySelectorAll(`.${Styles.boughtstar}`).forEach((nft) => nft.remove());
  //     document.querySelectorAll(`.${Styles.boughtstar_light}`).forEach((nft) => nft.remove());

  //     };
  //   }, [router]);
  
    
  // useEffect(() => {
  //   const createPlanets = (className: string, index: number) => {
  //     const image = document.createElement("div");
  //     image.className = className;
  //     image.style.position = "absolute";
  //     const size = `5vw`; 
  //     image.style.width = image.style.height = size;
  //     const rotation = `${Math.random() * 360}deg`;
  //     image.style.transform = `rotate(${rotation})`;

  //     const destination = index === 0 ? "/buyingstar" : "/buyingstar";

  //     image.addEventListener("click", () => {
  //       console.log(`Planet clicked`); 
  //       if (router) router.push(destination);
  //     });

  //     document.body.appendChild(image);
  //   };
  //   createPlanets(Styles.planet1, 0);
  //   createPlanets(Styles.planet2, 0);
  //   createPlanets(Styles.boughtplanet3, 0);

  //   return () => {
  //     document.querySelectorAll(`.${Styles.planet1}`).forEach((nft) => nft.remove());
  //     document.querySelectorAll(`.${Styles.planet2}`).forEach((nft) => nft.remove());
  //     document.querySelectorAll(`.${Styles.boughtplanet3}`).forEach((nft) => nft.remove());
  //     // document.querySelectorAll(`.${Styles.boughtstar_light}`).forEach((nft) => nft.remove());

  //     };
  //   }, [router2]);

    return (
      <div className={PageStarStyle.popuplayout}>
        <h1 className={PageStarStyle.title}>A bright NTF</h1>
        <h2 className={PageStarStyle.subtitle}>For a bright person</h2>
        <NftStar index={0} />
          <Planets />
        {/* <div style={{ position: 'relative', width: '100%', height: '100vh' }}> */}
        {/* Render planets with the Planet component */}
          {/* <NftStar index={0} />
          <Planets />
        </div> */}
        {/* <form className={PageStarStyle.form} onSubmit={handleSubmit}>
          <div>
            {/* <label htmlFor="input1">Input 1: </label> */}
            {/* <label className={PageStarStyle.label} htmlFor="input1">Name</label>
            <input className={PageStarStyle.inputform}
              id="input1"
              type="text"
              value={starData.input1}
              placeholder="eg. John Snow"
              onChange={(e) => handleInputChange(e, 'input1')}
              required
            readOnly/>
          </div>
          
          <div> */}
            {/* <label htmlFor="input2">Input 2: </label> */}
            {/* <label className={PageStarStyle.label} htmlFor="input2">Date of Birth</label>
            <input className={PageStarStyle.inputformdate}
              id="input2"
              type="date"
              value={starData.input2}
              onChange={(e) => handleInputChange(e, 'input2')}
              readOnly/>
          </div>
    
          <div>
            {/* <label htmlFor="input3">Input 3: </label> */}
            {/* <label className={PageStarStyle.label} htmlFor="input3">Date of Departure</label>
            <input  className={PageStarStyle.inputformdate}
              id="input3"
              type="date"
              placeholder="Date of Departure"
              value={starData.input3}
              onChange={(e) => handleInputChange(e, 'input3')}
              required
              readOnly/> */}
          {/* </div> */}
          {/* <button className={PageStarStyle.submitButton} type="submit">Submit</button>
        </form> */}
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
