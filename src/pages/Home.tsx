import AnimationTemplate from "@/app/transition";

const Home = () => {
  return(
    <section id="home">
      <div className="flex flex-col items-center justify-center h-[60vh] bg-bgGrey text-center rounded-2xl p-8 mt-32">
        <AnimationTemplate>
          <h1 className="text-80 font-bold text-black font-syne">
            I{`'`}M NIAZ{' '}
            <span
              style={{
                WebkitTextFillColor: 'transparent',
                WebkitTextStrokeWidth: '2px',
                WebkitTextStrokeColor: 'black',
              }}
            >
              BABAR
            </span>{' '}
            BAHADUR
          </h1>
        </AnimationTemplate>
        <AnimationTemplate>
          <div className="flex items-center gap-4 mt-4 text-darkGrey bg-offwhite p-4 px-10">
            <span className="text-16 font-semibold text-darkGrey font-syne">Mobile App Developer</span>
            <span className="text-xl font-bold">•</span>
            <span className="text-16 font-semibold text-darkGrey font-syne">React Native</span>
            <span className="text-xl font-bold">•</span>
            <span className="text-16 font-semibold text-darkGrey font-syne">React</span>
          </div>
        </AnimationTemplate>
      </div>
    </section>
  )
}

export default Home
