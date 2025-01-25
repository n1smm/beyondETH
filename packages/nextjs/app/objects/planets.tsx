import { useState } from 'react';
import { useRouter } from 'next/navigation';
// import Styles from '../styles/layout.module.css';
import StylesPlanet from '../styles/planet.module.css';

const Planet = ({ className, index }: { className: string; index: number }) => {
  const [size] = useState('5vw');
  const router = useRouter();
  const rotation = `${Math.random() * 360}deg`;
  const destination = index === 0 ? '/buyingplanet' : '/buyingplanet';

  const handleClick = () => {
    console.log(`Planet clicked`);
    router.push(destination);
  };

  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        width: size,
        height: size,
        transform: `rotate(${rotation})`,
      }}
      onClick={handleClick}
    />
  );
};

const Planets = () => {
  return (
    <>
      <Planet className={StylesPlanet.planet1} index={0} />
      <Planet className={StylesPlanet.planet2} index={1} />
      <Planet className={StylesPlanet.planet3} index={2} />
    </>
  );
};

export default Planets;
