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
      <h1  className={Styles.title}>A digital resting place</h1>
      <h2  className={Styles.description}>here your loved ones will be able to find their digital resting place </h2>
      <h2 className={Styles.description}>other people can share beautiful memories</h2>
      <h2 className={Styles.description}>and their star will never be lost</h2>
      <p className={`${Styles.description} text-center mx-auto `}>
	  	<br />you can find a start that you like.<br /> When you fill out information about your loved one <br />
		this will get saved on  the blockchain <br /> as an permanent immutable nft, that will always <br />
		remain here. < br />
		<br / >
		Other people will be able to express their wishes, <br />
		similarly how they would leave flowers on a grave. <br />
		<br />

	  </p>
      </div>
    </>
  );
};

export default Home;
