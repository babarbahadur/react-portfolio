import AnimationTemplate from '@/app/transition';
import Image from 'next/image';

interface ProjectProps {
  image: string
  subtitle: string
  title: string
  link?: string
}

const Portfolio = () => {

  const Project = ({ image, subtitle, title, link }: ProjectProps) => {
    return (
      <AnimationTemplate className={`flex flex-col h-full p-4 outline outline-lightGrey outline-[.5px] rounded-lg hover:animate-popout`}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full"
        >
          <div className="w-full h-[250px] relative overflow-hidden mb-3">
            <Image
              src={image}
              alt="Logo"
              layout="fill"
              objectFit='fill'
              priority
              className='rounded-md'
            />
          </div>
          <div className="text-left flex-grow mt-5">
            <p className='text-20 font-syne text-black'>{title}</p>
            <p className='text-16 font-syne font-extralight text-darkGrey'>{subtitle}</p>
          </div>
        </a>
      </AnimationTemplate>
    )
  }

  return (
    <section id="portfolio">
      <div className="flex flex-col items-center text-center rounded-2xl py-8">
        <AnimationTemplate>
          <span className="text-16 text-darkGrey font-syne">Works</span>
        </AnimationTemplate>
        <AnimationTemplate>
          <span className="text-50 font-semibold text-black font-syne">Projects & Portfolio</span>
        </AnimationTemplate>
      </div>
      <div className="flex flex-wrap w-full gap-x-5 justify-between items-stretch md:flex-nowrap">
        <div className="w-full md:w-1/3 mt-5 md:mt-0">
          <Project
            image='/leet.png'
            title='Leet Carbon'
            subtitle='LEET Carbon connects trees and forests with their owners for better protection, restoration, and conservation through individual and public engagement and social nature networking.'
          />
        </div>
        <div className="w-full md:w-1/3 mt-5 md:mt-0">
          <Project
            image='/united.png'
            title='United'
            subtitle='United is a multilingual task app (Hebrew/English) that helps parents assign chores to kids. Kids earn points for completing tasks, which parents can redeem for gifts. Built with React Native and Firebase.'
          />
        </div>
        <div className="w-full md:w-1/3 mt-5 md:mt-0">
          <Project
            image='/venkat.png'
            title='Venkat'
            subtitle='Venkat is a hybrid mobile application developed using React Native. It’s a library app where users can explore tons of books, buy and read book at their easy. It also supports light/dark mode, as payment gateway stipe is integrated.'
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;