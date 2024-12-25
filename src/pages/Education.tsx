import AnimationTemplate from '@/app/transition';
import Image from 'next/image';
import { MdArrowOutward } from "react-icons/md";

interface EducationProps {
  name: string
  logo: string
  major: string
  date: string
  link: string
}

interface CertificateProps {
  name: string
  logo: string
  issuer: string
  date: string
  credentials: string
  link: string
}

const Education = () => {

  const EducationCard = ({ name, logo, major, date, link }: EducationProps) => {
    return (
      <AnimationTemplate>
        <div className="flex flex-col h-full mb-5 p-4 outline outline-lightGrey outline-[.5px] rounded-lg mt-10 hover:animate-popout">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
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
            <p className='text-14 font-syne font-extralight'>{date}</p>
            <p className='text-20 font-syne text-black'>{name}</p>
            <p className='text-14 font-syne text-darkGrey'>{major}</p>
          </div>
        </div>
      </AnimationTemplate>
    )
  }

  const CertificateCard = ({ name, logo, issuer, date, credentials, link }: CertificateProps) => {
    return (
      <AnimationTemplate>
        <div className="flex flex-col h-full mb-5 p-4 outline outline-lightGrey outline-[.5px] rounded-lg mt-2 relative hover:animate-popout">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3"
          >
            <MdArrowOutward size={20} className='text-darkGrey hover:text-black' />
          </a>
          <Image
            src={logo}
            height={50}
            width={50}
            alt="Logo"
            objectFit="contain"
            className="rounded-md mb-3"
            priority
          />
          <div className="text-left flex-grow">
            <p className='text-14 font-syne font-extralight'>{issuer} | {date}</p>
            <p className='text-20 font-syne text-black'>{name}</p>
            <p className='text-14 font-syne text-darkGrey'>{credentials}</p>
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
              name='Mohammad Ali Jinnah University, Karachi'
              logo='/maju.png'
              major='Bachelors of Software Engineering'
              date='2019'
              link='https://jinnah.edu/'
            />
          </div>
          <div className="w-1/3">
            <EducationCard
              name='Sindh Muslim Govt. Science College'
              logo='/sindhmuslim.png'
              major='Fsc (Pre-Engineering)'
              date='2015'
              link='https://en.wikipedia.org/wiki/Sindh_Muslim_Government_Science_College'
            />
          </div>
          <div className="w-1/3">
            <EducationCard
              name='V.M. Public School'
              logo='/vmps.png'
              major='Matriculation (Computer Science)' 
              date='2013'
              link='https://rangoonwalatrust.org/vm-public-school/'
            />
          </div>
        </div>
        <div className="flex w-full gap-x-5 justify-between items-stretch">
          <div className="w-1/3">
            <CertificateCard
              name='Node.js, Express, MongoDB & More: The Complete Bootcamp 2020'
              logo='/udemy.png'
              issuer='Udemy'
              date='2020'
              credentials='UC-AWF4L6CG'
              link='https://udemy-certificate.s3.amazonaws.com/pdf/UC-AWF4L6CG.pdf'
            />
          </div>
          <div className="w-1/3">
            <CertificateCard
              name='The Complete JavaScript Course 2019: Build Real Projects!'
              logo='/udemy.png'
              issuer='Udemy'
              date='August 2019'
              credentials='UC-C3EMYXEE'
              link='https://udemy-certificate.s3.amazonaws.com/pdf/UC-C3EMYXEE.pdf'
            />
          </div>
          <div className="w-1/3">
            <CertificateCard
              name='Blockchain A-Z™: Learn How To Build Your First Blockchain'
              logo='/udemy.png'
              issuer='Udemy'
              date='2019'
              credentials='UC-ZAMK94X3'
              link='https://udemy-certificate.s3.amazonaws.com/pdf/UC-ZAMK94X3.pdf'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;