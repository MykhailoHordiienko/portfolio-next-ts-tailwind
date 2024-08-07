import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BackGroundCircles from './BackGroundCircles';
import Image from 'next/image';
import Link from 'next/link';
import profileImg from '../../public/Compress.jpg';
import React from 'react';

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      'Hi, My name is MichaeL',
      'Guy-who-loves-Code.jsx',
      '<ReactLovesToCodeMore/>',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackGroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover "
        src={profileImg}
        quality={100}
        alt="Picture of the author"
      />
      <div className="z-20">
        <h1 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Full Stack Developer
        </h1>
        <h2 className="text-2xl lg:text-6xl font-semibold px-10">
          <span className="mr-3 break-all">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h2>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#resume">
            <button className="heroButton">Resume</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
