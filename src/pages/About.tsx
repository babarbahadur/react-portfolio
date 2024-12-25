'use client';
import AnimationTemplate from "@/app/transition";
import Image from 'next/image';
import React from 'react';
import { FaGithub, FaJs, FaLinkedinIn, FaReact, FaStackOverflow, FaSwift } from 'react-icons/fa';
import { SiReactquery, SiRedux, SiTypescript } from 'react-icons/si';
import { VscAzureDevops } from "react-icons/vsc";
import ActiveIndicator from "../components/ActiveIndicator";

const About = () => {

  const Skill = ({ title, Icon }: { title: string, Icon: React.ComponentType<{ size: number, className: string }> }) => {
    return(
      <div className="flex items-center justify-center lg:justify-start">
        <Icon size={15} className='mr-2' />
        <span className="text-16 font-semibold text-darkGrey font-syne">{title}</span>
      </div>
    )
  }

  const Social = ({ link, Icon }: { link: string, Icon: React.ComponentType<{ size: number }> }) => {
    return (
      <a
        href={link}
        className="text-gray-500 hover:text-gray-800"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon size={20} />
      </a>
    )
  }

  return (
    <section id="about">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between py-20">
        {/* Left Section */}
        <AnimationTemplate>
          <div className="text-center lg:text-left p-10 outline outline-[.5px] rounded-lg outline-bgGrey">
            <Image
              src="/babar.png"
              alt="babar"
              className="rounded-md mx-auto lg:mx-0"
              width={600}
              height={600}
              priority
            />
            <div className= "items-center justify-center text-center">
              <div className='mt-5 inline-flex py-3 px-12 items-center justify-center outline outline-[.5px] outline-lightGrey rounded-full'>
                <p className="text-sm text-gray-500">Available for Work</p>
                <ActiveIndicator />
              </div>
              <div className="flex items-center justify-center gap-4 mt-4">
                <Social Icon={FaGithub} link={'https://github.com/babarbahadur'} />
                <Social Icon={FaLinkedinIn} link={'https://www.linkedin.com/in/babarbahadur/'} />
                <Social Icon={FaStackOverflow} link={'https://stackoverflow.com/users/11246925/niaz-babar-bahadur'} />
              </div>
            </div>
          </div>
        </AnimationTemplate>

        {/* Right Section */}
        <div className="mt-8 lg:mt-0 px-10 py-20">
          <AnimationTemplate>
            <h1 className="text-55 font-bold font-sans">Hello, I’m Babar,
              <br /> a <span className="outline outline[.5px] outline-bgGrey">Mobile App Developer</span>
              <br />based in Budapest, Hungary.
            </h1>
            <a
              href="/BabarResumeQ125.pdf"
              download
              className="inline-block mt-6 bg-black text-white px-6 py-3 hover:bg-white hover:text-black hover:outline hover:outline-lightGrey hover:outline-[.5px]"
            >
              Download CV
            </a>
          </AnimationTemplate>

          <AnimationTemplate>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Skill title="React Native" Icon={FaReact} />
              <Skill title="React" Icon={FaReact} />
              <Skill title="TypeScript" Icon={SiTypescript} />
              <Skill title="JavaScript" Icon={FaJs} />
              <Skill title="Redux" Icon={SiRedux} />
              <Skill title="React Querry" Icon={SiReactquery} />
              <Skill title="CI/CD Pipelines" Icon={VscAzureDevops} />
              <Skill title="Zustand" Icon={FaReact} />
              <Skill title="Unit Testing (Jest)" Icon={FaReact} />
              <Skill title="Swift" Icon={FaSwift} />
            </div>
          </AnimationTemplate>
        </div>
      </div>
    </section>
  );
};

export default About;