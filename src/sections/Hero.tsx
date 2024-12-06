import Image from "next/image"
import memojiImage from "@/assets/images/memoji-smile.png"
import ArrowDown from "@/assets/icons/arrow-down.svg"
import ParticlesContainer from "@/components/ParticlesContainer"

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60">
      
      <div className="container">
        <ParticlesContainer />
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="Cartoon of Howard" />
          <div className="inline-flex items-center gap-4 bg-gray-950 border border-gray-800 rounded-lg px-4 py-1.5">
            <span className="size-2.5 bg-orange-400 rounded-full"></span>
            <span className="font-medium">Limited availability</span>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl md:text-5xl mt-8 text-center font-serif tracking-wide">Exceptional STEM tutoring</h1>
          <p className="text-center text-white/60 mt-4 md:text-lg">Not just a qualified teacher with a Doctorate and First class Physics degree, but a published scientist and founder of 2 tech start-ups.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">About Howard</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Enquire</span>
          </button>
        </div>

      </div>
    </div>);
};
