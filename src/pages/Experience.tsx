'use client';

import AnimationTemplate from '@/app/transition';
import Image from 'next/image';

interface CompanyProps {
  name: string
  logo: string
  position: string
  from: string
  to: string
  description: string
  link?: string
}

const Experience = () => {

  const Company = ({ name, logo, position, from, to, description, link }: CompanyProps) => {
      return(
        <AnimationTemplate>
          <div className='flex mb-5 items-start p-4 bg-white rounded-lg hover:animate-popout'>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              onClick={(e) => {
                if (!link) e.preventDefault();
              }}
            >
              <div className="w-[50px] h-[50px] relative overflow-hidden rounded-md mr-3">
                <Image
                  src={logo}
                  alt="Logo"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md"
                  priority
                />
              </div>
            </a>
            <div className="text-left">
              <p className='text-14 font-syne font-extralight'>{from} — {to}</p>
              <p className='text-20 font-syne text-black'>{name}</p>
              <p className='text-14 font-syne text-darkGrey mb-3'>{position}</p>
              <p className='text-14 font-syne text-darkGrey text-justify'>{description}</p>
            </div>
          </div>
        </AnimationTemplate>
    )
  }

  return (
    <section id="experience">
      <div className="flex flex-col items-center bg-bgGrey text-center rounded-2xl p-8 py-14">
        <AnimationTemplate>
          <span className="text-16 text-darkGrey font-syne">Experience</span>
        </AnimationTemplate>
        <AnimationTemplate>
          <span className="text-50 font-semibold text-black font-syne">Professional Experience</span>
        </AnimationTemplate>
        <div className="flex w-full justify-center items-stretch mt-10">
          <div className="outline outline-lightGrey outline-[.5px] rounded-md w-1/2 mr-5 p-5">
            <Company
              name='Nilfisk'
              logo='/nilfisk.png'
              position='Mobile Applications Developer'
              from='July 2022'
              to='Present'
              description='I am responsible to develop, test, and maintain MyFleet and the Service Tool App using React Native. MyFleet provides site/machine stats via graphs and numbers, displays cleaning maps, schedules tasks, manages users, and sends push notifications. The Service Tool App connects to machines via Bluetooth to fetch information, warnings, and upload firmware.'
              link='https://www.nilfisk.com/'
            />
            <Company
              name='Upwork'
              logo='/upwork.png'
              position='Mobile App Developer (Freelancer)'
              from='June 2019'
              to='Present'
              description=''
              link='https://www.upwork.com/freelancers/~01bc17370310ddc665'
            />
            <Company
              name='eZhire'
              logo='/ezhire.png'
              position='Software Engineer'
              from='February 2021'
              to='June 2022'
              description='I worked at MeStar Inc, a subsidiary of eZhire, as a React Native Developer to develop an AI-based life coaching app. The main tech stack included React Native and Redux. Key features of the app include social sign-in, in-app purchases, an AI-based chatbot with audio messaging, an audio/video player, meeting scheduling with consultants, push notifications, and more.'
              link='https://www.ezhire.ae/'
            />
          </div>
          <div className="outline outline-lightGrey outline-[.5px] rounded-md w-1/2 p-5">
            <Company
              name='Digitonics Labs'
              logo='/digitonics.png'
              position='React Native Developer'
              from='September 2020'
              to='January 2021'
              description='During my tenure at Digitonics, I worked on some interesting projects with various team members. I worked on developed a simple Patient Wait App which lists the nearest urgent care and emergency departments in the US and worked on developing UI for Venkat App, an online bookstore.'
            />
            <Company
              name='Kalsoft'
              logo='/kalsoft.png'
              position='Jr. React Native Developer'
              from='October 2019'
              to='August 2020'
              description='During my tenure at Kalsoft, I also worked on a social networking app and the MVP of a multilingual food ordering app using React Native. I also had an opportunity to develop few new features on a Native iOS Employee Management App for Jazz - Pakistan’s largest telecom company.'
              link='https://www.kalsoft.com/'
            />
            <Company
              name='Jazsoft'
              logo='/jazsoft.png'
              position='React Native Intern'
              from='January 2019'
              to='October 2019'
              description=''
              link=''
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;