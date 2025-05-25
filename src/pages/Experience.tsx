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
    return (
      <AnimationTemplate>
        <div className="flex flex-col sm:flex-row mb-5 items-start p-4 bg-white rounded-lg hover:animate-popout">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-3 sm:mb-0 sm:mr-3"
            onClick={(e) => {
              if (!link) e.preventDefault();
            }}
          >
            <div className="w-[50px] h-[50px] relative overflow-hidden rounded-md">
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
          <div className="text-left w-full">
            <p className="text-14 font-syne font-extralight">{from} — {to}</p>
            <p className="text-20 font-syne text-black">{name}</p>
            <p className="text-14 font-syne text-darkGrey mb-3">{position}</p>
            {
              description.includes('<br>') ?
                description.split('<br>').map((line, index) => (
                  <span key={index} className="block text-14 font-syne text-darkGrey text-justify">
                    {line}
                  </span>
                )) :
                <p className="text-14 font-syne text-darkGrey text-justify">{description}</p>
            }
          </div>
        </div>
      </AnimationTemplate>
    )
  }

  return (
    <section id="experience">
      <div className="flex flex-col items-center bg-bgGrey text-center rounded-2xl md:p-8 p-4 md:py-14">
        <AnimationTemplate>
          <span className="text-16 text-darkGrey font-syne">Experience</span>
        </AnimationTemplate>
        <AnimationTemplate>
          <span className="text-50 font-semibold text-black font-syne">Professional Experience</span>
        </AnimationTemplate>
        <div className="flex flex-col md:flex-row w-full justify-center items-stretch mt-10 md:space-y-0 md:space-x-5">
          <div className="md:outline md:outline-lightGrey md:outline-[.5px] rounded-md w-full md:w-1/2 md:p-5 p-0">
            <Company
              name='Nilfisk'
              logo='/nilfisk.png'
              position='Mobile Applications Developer'
              from='July 2022'
              to='Present'
              description='I am responsible to develop, test, and maintain Nilfisk My Fleet app which is a fleet management app for Nilfisk’s manual and autonomous cleaning machines. It provides sites and machines stats via graphs and numbers, displays cleaning maps, schedules tasks, manages users, and sends push notifications. I am also responsible for The Service Tool App for service technicians of the machines. It connects to machines via Bluetooth and helps in troubleshooting errors by fetching machine data, warnings, and can also be used to update machine’s firmware. I maintain CI/CD pipelines for these two projects by updating provision profiles etc and fixing crashes to ensure smooth app delivery for testing and stores.'
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
              description='I worked at MeStar Inc, a subsidiary of eZhire, as a React Native Developer to develop an AI-based life coaching app. Key features of the app includes social sign-in, in-app purchases, an AI-based chatbot with audio messaging, an audio/video player, scheduling meeting with consultants, push notifications, and more.'
              link='https://www.ezhire.ae/'
            />
          </div>
          <div className="md:outline md:outline-lightGrey md:outline-[.5px] rounded-md w-full md:w-1/2 md:p-5 p-0">
            <Company
              name='Digitonics Labs'
              logo='/digitonics.png'
              position='React Native Developer'
              from='September 2020'
              to='January 2021'
              description='During my tenure at Digitonics, I worked on two interesting projects with different teams. I worked on developed a simple Patient Wait App which lists the nearest urgent care and emergency departments in the US based on their wait time. I also worked on developing UI for Venkat App, an online bookstore.'
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
  )
}

export default Experience;