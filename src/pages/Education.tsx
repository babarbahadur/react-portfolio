import AnimationTemplate from '@/app/transition';
import Image from 'next/image';
import { MdArrowOutward } from "react-icons/md";

interface EducationProps {
  logo: string
  subtitle: string
  title: string 
  desc: string
  link: string,
  arrow?: boolean
  className?: string
}

const Education = () => {

  const EducationCard = ({ logo, subtitle, title, desc, link, arrow, className }: EducationProps) => {
    return (
      <AnimationTemplate>
        <div className={`flex flex-col h-full mb-5 p-4 outline outline-lightGrey outline-[.5px] rounded-lg mt-10 ${className} hover:animate-popout`}>
          {
            arrow ?
              <a href={link} target="_blank" rel="noopener noreferrer" className="absolute top-3 right-3">
                <MdArrowOutward size={20} className='text-darkGrey hover:text-black' />
              </a>
            : null
          }
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit"
          >
            <div className="w-[50px] h-[50px] relative overflow-hidden rounded-md mb-3">
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
          <div className="text-left flex-grow">
            <p className='text-14 font-syne font-extralight'>{subtitle}</p>
            <p className='text-20 font-syne text-black'>{title}</p>
            <p className='text-14 font-syne text-darkGrey'>{desc}</p>
          </div>
        </div>
      </AnimationTemplate>
    )
  }

  return (
    <section id="education">
      <div className="flex flex-col items-center text-center rounded-2xl py-8 mt-10">
        <AnimationTemplate>
          <span className="text-16 text-darkGrey font-syne">Education</span>
        </AnimationTemplate>
        <AnimationTemplate>
          <span className="text-50 font-semibold text-black font-syne">Education & Certifications</span>
        </AnimationTemplate>
        <div className="flex w-full gap-x-5 justify-between items-stretch">
          <div className="w-1/3">
            <EducationCard
              logo='/maju.png'
              subtitle='2019'
              title='Mohammad Ali Jinnah University, Karachi'
              desc='Bachelors of Software Engineering'
              link='https://jinnah.edu/'
            />
          </div>
          <div className="w-1/3">
            <EducationCard
              logo='/sindhmuslim.png'
              subtitle='2015'
              title='Sindh Muslim Govt. Science College'
              desc='Fsc (Pre-Engineering)'
              link='https://en.wikipedia.org/wiki/Sindh_Muslim_Government_Science_College'
            />
          </div>
          <div className="w-1/3">
            <EducationCard
              logo='/ielts.png'
              subtitle='2021'
              title='IELTS'
              desc='CEFR Level C1' 
              link='IELTS.pdf'
              arrow
            />
          </div>
        </div>
        <div className="flex w-full gap-x-5 justify-between items-stretch">
          <div className="w-1/3">
            <EducationCard
              logo='/udemy.png'
              subtitle='Udemy | 2020'
              title='Node.js, Express, MongoDB & More: The Complete Bootcamp 2020'
              desc='UC-AWF4L6CG'
              link='https://udemy-certificate.s3.amazonaws.com/pdf/UC-AWF4L6CG.pdf'
              className='mt-2'
              arrow
            />
          </div>
          <div className="w-1/3">
            <EducationCard
              logo='/udemy.png'
              subtitle='Udemy | 2019'
              title='The Complete JavaScript Course 2019: Build Real Projects!'
              desc='UC-C3EMYXEE'
              link='https://udemy-certificate.s3.amazonaws.com/pdf/UC-C3EMYXEE.pdf'
              className='mt-2'
              arrow
            />
          </div>
          <div className="w-1/3">
            <EducationCard
              logo='/udemy.png'
              subtitle='Udemy | 2019'
              title='Blockchain A-Z™: Learn How To Build Your First Blockchain'
              desc='UC-ZAMK94X3'
              link='https://udemy-certificate.s3.amazonaws.com/pdf/UC-ZAMK94X3.pdf'
              className='mt-2'
              arrow
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;