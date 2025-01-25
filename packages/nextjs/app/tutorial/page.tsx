"use client";

// import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
// import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { Address } from "~~/components/scaffold-eth";
// import Space from "./space/page.tsx";
import Styles from "../styles/tutorial.module.css";

// import { useRouter } from "next/router";
// import dynamic from 'next/dynamic';

// const SwitchingPage = dynamic(() => import('./space'), {
//   ssr: false
// });

// export default function Page() {
//   return <SwitchingPage />;
// }

// import dynamic from 'next/dynamic';

// const SpaceComponent = dynamic(() => import('./space/page'), {
//   ssr: false
// });

// export default SpaceComponent;

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
    <div className={Styles.alignment}>
      <h1  className={Styles.title}>the cemetery of the future</h1>
      <h2  className={Styles.description}>here you can buy an NFT for your lost loved ones</h2>
      <h2 className={Styles.description}>other people can share beautiful memories</h2>
      <h2 className={Styles.description}>and they'll never be lost</h2>
      </div>
    </>
  );
};

export default Home;
