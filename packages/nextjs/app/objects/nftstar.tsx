import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Styles from '../styles/layout.module.css'; // Import your CSS module

interface NftStarProps {
  index: number; // To differentiate between different NFTs if needed
}

const NftStar = ({ index }: NftStarProps) => {
  const router = useRouter();

  useEffect(() => {
    const createOffstar = (className: string, classNamee: string, index: number) => {
      const image = document.createElement('div');
      const imagee = document.createElement('div');
      image.className = className;
      imagee.className = classNamee;
      
      image.style.position = 'absolute';
      imagee.style.position = 'absolute';

      const size = '10vw';
      image.style.width = image.style.height = imagee.style.width = imagee.style.height = size;

      const rotation = `${Math.random() * 360}deg`;
      image.style.transform = `rotate(${rotation})`;
      imagee.style.transform = `rotate(${rotation})`;

      const destination = index === 0 ? '/buyingstar' : '/buyingstar'; // Define your routing logic here

      // Optional: Handle click event
      image.addEventListener('click', () => {
        console.log(`Offstar ${index} clicked`);
        if (router) router.push(destination);
      });

      // Append the elements to the body
      document.body.appendChild(image);
      document.body.appendChild(imagee);
    };

    createOffstar(Styles.boughtstar, Styles.boughtstar_light, index);

    // Cleanup function to remove the elements when the component is unmounted
    return () => {
      document.querySelectorAll(`.${Styles.boughtstar}`).forEach((nft) => nft.remove());
      document.querySelectorAll(`.${Styles.boughtstar_light}`).forEach((nft) => nft.remove());
    };
  }, [index, router]);

  return null; // The component itself doesn't need to render anything
};

export default NftStar;
