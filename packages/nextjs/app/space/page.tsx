"use client";

// import type { NextPage } from "next";
// import { useAccount } from "wagmi";
// import { Address } from "~~/components/scaffold-eth";
// import type { AppProps } from 'next/app';
// import Styles from "./styles/layout.module.css";
import { useEffect } from "react";
// import StellarScene from "../components/StellarScene.jsx";
import "../../styles/globals.css";
import Styles from "../styles/layout.module.css";
// import { SwitchingPage } from "~~/components/Switching";
import { useRouter } from "next/navigation";

// import { useCallback } from "react";




const Space = () => {
  const router = useRouter();
  const router2 = useRouter();
  console.log(router);

  
  useEffect(() => {
    const createStar = (className: string, classNamee: string) => {
      const image = document.createElement("div");
      const imagee = document.createElement("div");
      image.className = className;
      imagee.className = classNamee;
      image.style.top = imagee.style.top = `${Math.random() * 100}vh`;
      image.style.left = imagee.style.left = `${Math.random() * 100}vw`;
      const size = `${Math.floor(Math.random() * 6) * 10 + 10}px`
      image.style.width = image.style.height = imagee.style.width = imagee.style.height = size;
      const rotation = `${Math.random() * 360}deg`;
      const rotationn = `${Math.random() * 360}deg`;
      imagee.style.transform = `rotate(${rotation})`;
      image.style.transform = `rotate(${rotationn})`;

      const destination =  "/nftpage";

      imagee.addEventListener("click", () => {
        console.log(`Star clicked`); 
        if (router) router.push(destination);
      });


      document.body.appendChild(image);
      document.body.appendChild(imagee);
    };
    for (let i = 0; i < 5; i++) {
      createStar(Styles.star, Styles.star_light);
    }
    return () => {
      document.querySelectorAll(`.${Styles.offstar}`).forEach((offstar) => offstar.remove());
      document.querySelectorAll(`.${Styles.star}`).forEach((star) => star.remove());
      document.querySelectorAll(`.${Styles.star_light}`).forEach((star_light) => star_light.remove());

      };
  }, [router]);

  useEffect(() => {
    const createOffstar = (className: string, index: number) => {
      const image = document.createElement("div");
      image.className = className;
      image.style.top = `${Math.random() * 100}vh`;
      image.style.left = `${Math.random() * 100}vw`;
      const size = `${Math.floor(Math.random() * 20) * 10 + 10}px`
      image.style.width = image.style.height = size;
      const rotation = `${Math.random() * 360}deg`;
      const rotationn = `${Math.random() * 360}deg`;
      image.style.transform = `rotate(${rotationn})`;

      const destination = index === 0 ? "/buyingstar" : "/buyingstar";

      image.addEventListener("click", () => {
        console.log(`Offstar ${index} clicked`); 
        if (router) router.push(destination);
      });

      document.body.appendChild(image);
    };
    for (let i = 0; i < 5; i++) {
      createOffstar(Styles.offstar, i);
    }
    return () => {
      document.querySelectorAll(`.${Styles.offstar}`).forEach((offstar) => offstar.remove());
      document.querySelectorAll(`.${Styles.star}`).forEach((star) => star.remove());
      document.querySelectorAll(`.${Styles.star_light}`).forEach((star_light) => star_light.remove());

      };
    }, [router2]);

    return null;
  
  };

//   useEffect(() => {
//     const createStar = (className: string, classNamee: string) => {
//       const image = document.createElement("div");
//       const imagee = document.createElement("div");
//       image.className = className;
//       imagee.className = classNamee;
//       image.style.top = imagee.style.top = `${Math.random() * 100}vh`;
//       image.style.left = imagee.style.left = `${Math.random() * 100}vw`;
//       const size = `${Math.floor(Math.random() * 6) * 10 + 10}px`
//       image.style.width = image.style.height = imagee.style.width = imagee.style.height = size;
//       const rotation = `${Math.random() * 360}deg`;
//       const rotationn = `${Math.random() * 360}deg`;
//       imagee.style.transform = `rotate(${rotation})`;
//       image.style.transform = `rotate(${rotationn})`;
//       document.body.appendChild(image);
//       document.body.appendChild(imagee);
//     };
//     for (let i = 0; i < 10; i++) {
//       createStar(Styles.offstar, Styles.star_light);
//     }
//   }, []);

//   return (
//     <>

//     {/* <div className={Styles.main_layout}>
//       <h1 className={Styles.Main_title}>beyondETH</h1> */}
//     {/* </div> */}
//     </>
//   );
// };

export default Space;
