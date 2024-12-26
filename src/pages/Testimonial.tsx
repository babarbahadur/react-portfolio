'use client';

import AnimationTemplate from '@/app/transition';
import { motion } from "framer-motion";
import Image from 'next/image';

interface TestimonyProps {
  image: string
  testimony: string
  name: string
  designation: string
}

const TESTIMONIALS = [
  {
    image: '/kseniia.png',
    testimony: 'I’ve been working with Niaz on MeStar.ai mobile app for 1,5 years. He is a very talented, hard-working React-Native developer. His diligence and commitment to work have greatly helped the growth of the company. I highly recommend him to anyone looking for a front-end, react-native developer.Thank you, Niaz, for all your efforts, energy, skills, and enthusiasm you were working with. Wish you all the best on your life and career journey.',
    name: 'Kseniia Starostina',
    designation: 'Co-Founder at MeStar Inc'
  },
  {
    image: '/sheikhizhar.png',
    testimony: 'Babar is an exceptional resource with strong educational background and quick learning capabilities. He will soon achieve bigger milestones in the career due to his intelligent mindset.',
    name: 'Sheikh Izhar Elahi',
    designation: 'Principal Software Architect, Kalsoft'
  },
  {
    image: '/hammad.png',
    testimony: 'Babar is one of the most valuable people I have ever met. Both smart and professional. Experienced, deadline-oriented, and intelligent person. Highly recommended.',
    name: 'Syed Hammad Ali Zaidi',
    designation: 'Senior Project Manager, Kalsoft'
  },
  {
    image: '/drnophea.png',
    testimony: 'Niaz is a good freelancer. He is available on request, speaks to the point, knows what need to be done',
    name: 'Dr. Nophea Kim',
    designation: 'Co-Founder at Leet Carbon | Upwork Client'
  },
  {
    image: '/anonymous.png',
    testimony: 'Niaz is probably the best freelancer I have had the pleasure to work with. He has done a perfect job on my app with all of my requirments. He is friendly and willing to do his job at the best side. Thank you so much and I can’t wait to work with you again',
    name: 'Lee',
    designation: 'Upwork Client'
  },
  {
    image: '/anonymous.png',
    testimony: 'Niaz is a fantastic freelancer who is always ready to work. He is kind and very professional. Definitely would hire again and I recommend him to everyone who wants real fast results. Great!',
    name: 'Unknown',
    designation: 'Upwork Client'
  }
];

const Testimonial = () => {

  const Testimony = ({ image, testimony, name, designation }: TestimonyProps) => {
    return (
      <div className="flex flex-col items-start p-4 bg-white rounded-lg shadow-lg h-full">
        <Image
          src={image}
          alt="Logo"
          height={50}
          width={50}
          layout="fixed"
          objectFit="contain"
          className="rounded-full mb-5"
          priority
        />
        <div className="text-left">
          <p className="text-sm font-syne mb-3 text-darkGrey text-justify">{testimony}</p>
          <p className="text-lg font-syne font-semibold text-black">{name}</p>
          <p className="text-sm font-syne text-darkGrey">{designation}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="testimonial">
      <div className="flex flex-col items-center bg-bgGrey text-center rounded-2xl p-8 py-14 mt-10">
        <AnimationTemplate>
          <span className="text-16 text-darkGrey font-syne">Testimonials</span>
        </AnimationTemplate>
        <AnimationTemplate>
          <span className="text-50 font-semibold text-black font-syne">What colleagues & clients say!</span>
        </AnimationTemplate>
        <div className="relative overflow-hidden w-full">
          <motion.div
            className="flex space-x-6 items-stretch"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 20,
              delay: 3,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((item, index) => (
              <div key={index} className="flex-shrink-0 w-1/3 md:w-1/3 sm:w-1/2 mt-10 items-stretch">
                <Testimony
                  image={item.image}
                  testimony={item.testimony}
                  name={item.name}
                  designation={item.designation}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;