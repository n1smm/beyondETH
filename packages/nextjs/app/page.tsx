"use client";

import type { NextPage } from "next";
import { useAccount } from "wagmi";
// import { Address } from "~~/components/scaffold-eth";
// import type { AppProps } from 'next/app';
import Styles from "./styles/layout.module.css";
import { useState } from "react";
// import StellarScene from "../components/StellarScene.jsx";
import "../styles/globals.css";
import { SwitchingPage } from "../components/Switching";

// import dynamic from 'next/dynamic';

// const SwitchingPage = dynamic(() => import('../components/Switching').then((mod) => mod.SwitchingPage), {
//   ssr: false
// });

const Home: NextPage = () => {
  // const { address: connectedAddress } = useAccount();
  const [imgSrc, setImgSrc] = useState("/searchbar.png");
  let typingTimeout: NodeJS.Timeout;

  const handleInputChange = () => {
    clearTimeout(typingTimeout);
    setImgSrc("/searchbar_typing.png");
    typingTimeout = setTimeout(() => {
      setImgSrc("/searchbar.png");
    }, 1000);
  };

  const handleInputSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setImgSrc("/searchbar.png");
  }

  // <StellarScene />

  // useEffect(() => {
  //   const createStar = (className: string, classNamee: string) => {
  //     const image = document.createElement("div");
  //     const imagee = document.createElement("div");
  //     image.className = className;
  //     imagee.className = classNamee;
  //     image.style.top = imagee.style.top = `${Math.random() * 100}vh`;
  //     image.style.left = imagee.style.left = `${Math.random() * 100}vw`;
  //     const size = `${Math.floor(Math.random() * 6) * 10 + 10}px`
  //     image.style.width = image.style.height = imagee.style.width = imagee.style.height = size;
  //     const rotation = `${Math.random() * 360}deg`;
  //     const rotationn = `${Math.random() * 360}deg`;
  //     imagee.style.transform = `rotate(${rotation})`;
  //     image.style.transform = `rotate(${rotationn})`;
  //     document.body.appendChild(image);
  //     document.body.appendChild(imagee);
  //   };
  //   for (let i = 0; i < 10; i++) {
  //     createStar(Styles.star, Styles.star_light);
  //   }
  // }, []);

  return (
    <>
    <div className={Styles.main_layout}>
      <h1 className={Styles.Main_title}>beyondETH</h1>
      <form onSubmit={handleInputSubmit}>
        <input className="input"
          type="text" 
          placeholder="Looking for..."
          onChange={handleInputChange}
          />
      </form>
      <img src={imgSrc} className={Styles.searchbar} />
      <SwitchingPage />
      {/* <StellarScene /> */}
      {/* <form onSubmit={handleInputSubmit}>
        <input className="input"
          type="text" 
          placeholder="Looking for..."
          onChange={handleInputChange}
          />
      </form> */}
    </div>
    </>
  );
};

export default Home;
