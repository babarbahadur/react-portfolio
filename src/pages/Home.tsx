"use client";

import AnimationTemplate from "@/app/transition";
import AppCounter from "@/components/AppCounter";
import { motion } from "framer-motion";
import Image from 'next/image';
import { FaJs, FaReact, FaSwift } from 'react-icons/fa';
import { SiReactquery, SiRedux, SiTypescript } from 'react-icons/si';
import { VscAzureDevops } from "react-icons/vsc";

const Home = () => {

  const Skill = ({ title, Icon }: { title: string, Icon: React.ComponentType<{ size: number, className: string }> }) => {
    return (
      <div className="flex items-center justify-center lg:justify-start">
        <Icon size={15} className='mr-2' />
        <span className="text-16 font-semibold text-darkGrey font-syne">{title}</span>
      </div>
    )
  }

  return(
    <section id="home">
      <div className="flex flex-col items-center justify-center bg-bgGrey text-center rounded-2xl px-12 py-20 mt-32">
        <AnimationTemplate className="flex flex-col items-start">
          <h1 className="text-50 md:text-80 font-bold text-black font-syne">NIAZ{' '}
            <span style={{ WebkitTextFillColor: 'transparent', WebkitTextStrokeWidth: '2px', WebkitTextStrokeColor: 'black' }}>BABAR</span>{' '}BAHADUR
          </h1>
          <span className="text-20 font-bold text-black font-syne w-full md:-mt-5">Mobile Application Developer</span>
        </AnimationTemplate>
        <AnimationTemplate className="flex flex-col sm:flex-row flex-wrap justify-evenly items-stretch w-full mt-10 gap-12">
          {/* Left Section */}
          <div className="w-full sm:w-[30%] flex justify-center sm:justify-between items-center">
            <div className="flex-1 md:pl-16 max-w-[300px] w-full">
              <AppCounter targetValue={6} />
              <span className="text-16 font-semibold text-darkGrey font-syne mt-44">Years of Experience</span>
            </div>
          </div>

          {/* Middle Section */}
          <motion.div
            className="relative flex flex-col justify-center items-center flex-1 basis-full max-w-full sm:basis-[30%] sm:max-w-[30%] rounded-md overflow-hidden"
            initial={{ scale: 0.95, rotate: 5, opacity: 0.95, filter: 'blur(0.5px)' }}
            whileHover={{ scale: 1, rotate: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="w-[300px] h-[330px] relative">
              <Image
                src="/babar.png"
                alt="babar"
                className="rounded-md outline outline-white outline-4 object-cover"
                fill
                priority
              />
            </div>
          </motion.div>

          {/* Right Section */}
          <div className="items-center justify-center md:justify-end flex-1 md:basis-[32%] md:max-w-[32%] grid md:text-left md:grid-cols-2 gap-x-8 md:py-16 md:-mr-5">
            <Skill title="React Native" Icon={FaReact} />
            <Skill title="React" Icon={FaReact} />
            <Skill title="TypeScript" Icon={SiTypescript} />
            <Skill title="JavaScript" Icon={FaJs} />
            <Skill title="Redux" Icon={SiRedux} />
            <Skill title="React Query" Icon={SiReactquery} />
            <Skill title="CI/CD Pipelines" Icon={VscAzureDevops} />
            <Skill title="Zustand" Icon={FaReact} />
            <Skill title="Unit Testing (Jest)" Icon={FaReact} />
            <Skill title="Swift" Icon={FaSwift} />
          </div>
        </AnimationTemplate>
      </div>
    </section>
  )
}

export default Home
