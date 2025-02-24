import Header from "./Header"
import personalPic from "../assets/pic5.jpeg"

const Hero = () => {
    return (
        <>
            <Header />
            <section className="hero-section px-5 text-center mb-22 md:text-left md:px-10">
                    <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-10 md:flex-row md:gap-16">
                        <div className="w-4/5 personal-image-box rounded overflow-hidden shadow-[7px_7px_0_0_white] md:order-2">
                            <img className="w-full personal-image hover:scale-110 transition-all duration-500" src={personalPic} alt="me-smiling-while-holding-a-camera" />
                        </div>
                        <div className="textbox flex flex-col gap-8 md:w-[70%]">
                            <h1 className="title font-[Space_Grotesk] font-bold text-5xl md:text-6xl md:leading-[0.9]">Nice to meet you! I'm <span className="underline decoration-yellow-300">Lucas Uzum</span>
                            </h1>
                            <p className="intro text-lg md:text-xl">Based in Canada, I'm a <span className="font-[Space_Grotesk]">photographer</span> and <span className="font-[Space_Grotesk]">videographer</span>, passionate about making digital memories and experiences that people love.</p>
                            <a className="mx-auto flex gap-4 items-center justify-between uppercase bg-yellow-300 text-black font-[Space_Grotesk] font-bold text-xl p-4 border-2 hover:-translate-y-[2px] transition-all duration-250 active:translate-y-[2px] md:w-[300px] md:mx-0 md:text-2xl" href="#contact">
                                <span>Contact me</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-down"><path d="M8 18L12 22L16 18"/><path d="M12 2V22"/></svg>
                            </a>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Hero