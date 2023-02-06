import animation from '/public/technologies/animation.png';
import Image from 'next/image';

export const Animation: React.FC = () => {
  return (
    <div>
      <Image src={animation} alt="animation" />
    </div>
  );
};
