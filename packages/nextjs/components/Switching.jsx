"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation';
// import "../app/page.tsx";
// import "../app/space.tsx";

import Link from "next/link";

export const SwitchingPage = ({ onFadeOut }) => {
    const router = useRouter();
  
    const selectTutorial = () => {
        onFadeOut();
        setTimeout(() => {
            router.push('/tutorial');
            }, 1000);
      };

    const selectSpace = () => {
        onFadeOut();
        setTimeout(() => {
            router.push('/space');
            }, 1000);
      };
    
    return (
        <div>
            <button
            onClick={selectTutorial}
            style={{
                display: "flex",
                position: "absolute",
                top: "50%",
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
                // alt="Button Icon"
                style={{
                    width: "150px",
                    height: "70px",
                    // verticalAlign: "middle"
                }}
                />
                How it works?
            </button>
            <button
            onClick={selectSpace}
            style={{
                display: "flex",
                position: "absolute",
                top: "50%",
                right: "5%",
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
                    transform: "scaleX(-1)",
                    width: "150px",
                    height: "70px",
                    // verticalAlign: "middle"
                }}
                />
                dETH space
            </button>

        </div>
    );
};

export default SwitchingPage;