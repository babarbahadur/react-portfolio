"use client";

import AnimationTemplate from "@/app/transition";
import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedinIn, FaStackOverflow } from 'react-icons/fa';
import Lottie from "react-lottie";
import ActiveIndicator from "../components/ActiveIndicator";

const About = () => {

  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/mobile.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch animation JSON");
        }
        return response.json();
      })
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
            <motion.div
              className="relative w-[600px] rounded-md overflow-hidden -mt-8"
              initial={{ scale: 0.95, rotate: 0 }}
              whileHover={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Lottie options={defaultOptions} />
            </motion.div>
          </div>
        </AnimationTemplate>

        {/* Right Section */}
        <div className="mt-8 lg:mt-0 px-10 pt-20">
          <AnimationTemplate>
            <h1 className="text-55 font-bold font-sans">Hello, I’m Babar,
              <br /><span className="outline outline[.5px] outline-bgGrey">Mobile App Developer</span>
              <br />based in Budapest, Hungary.
            </h1>
            <div className="flex gap-5 justify-center">
              <a
                href="/BabarResumeQ125.pdf"
                className="inline-block mt-6 bg-black text-white py-3 w-48 text-center hover:bg-white hover:text-black hover:outline hover:outline-lightGrey hover:outline-[.5px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <a
                href="/BabarCoverQ125.pdf"
                className="inline-block mt-6 bg-black text-white py-3 w-48 text-center hover:bg-white hover:text-black hover:outline hover:outline-lightGrey hover:outline-[.5px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cover Letter
              </a>
            </div>
          </AnimationTemplate>
          <AnimationTemplate>
            <div className="items-center justify-center text-center mt-5">
              <div className='mt-5 inline-flex py-3 px-12 items-center justify-center outline outline-[.5px] outline-lightGrey rounded-full'>
                <p className="text-sm text-gray-500">Available for Work</p>
                <ActiveIndicator />
              </div>
              <div className="flex items-center justify-center gap-4 mt-8">
                <Social Icon={FaGithub} link={'https://github.com/babarbahadur'} />
                <Social Icon={FaLinkedinIn} link={'https://www.linkedin.com/in/babarbahadur/'} />
                <Social Icon={FaStackOverflow} link={'https://stackoverflow.com/users/11246925/niaz-babar-bahadur'} />
              </div>
            </div>
          </AnimationTemplate>
        </div>
      </div>
    </section>
  );
};

export default About;