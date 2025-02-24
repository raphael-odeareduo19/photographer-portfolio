import Header from "./Header"
import personalPic from "../assets/pic5.jpeg"

const Hero = () => {
    return (
        <>
            <Header />
            <section className="hero-section px-5 text-center mb-22">
                <div className="flex flex-col">
                    <div className="flex flex-col items-center gap-10">
                        <h1 className="title font-[Space_Grotesk] font-bold text-5xl">Nice to meet you! I'm <span className="underline decoration-yellow-300">Lucas Uzum</span>
                        </h1>
                        <div className="w-4/5 personal-image-box rounded overflow-hidden shadow-[7px_7px_0_0_#242424]">
                            <img className="w-full personal-image" src={personalPic} alt="me-smiling-while-holding-a-camera" />
                        </div>
                        <p className="intro text-lg">Based in Canada, I'm a <span className="font-[Space_Grotesk]">photographer</span> and <span className="font-[Space_Grotesk]">videographer</span>, passionate about making digital memories and experiences that people love.</p>
                        <a className="uppercase underline decoration-yellow-300 font-[Space_Grotesk] font-semibold text-xl hover:-translate-y-[2px] transition-all duration-250 active:translate-y-[2px]" href="#contact">Contact me</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero