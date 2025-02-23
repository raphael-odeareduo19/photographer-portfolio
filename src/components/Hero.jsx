import Header from "./Header"

const Hero = () => {
    return (
        <>
            <Header />
            <section className="hero-section px-5 text-center mb-20">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-8">
                        <h1 className="title font-[Space_Grotesk] font-bold text-5xl">Nice to meet you! I'm <span className="underline decoration-yellow-300">Lucas Uzum</span>
                        </h1>
                        <p className="intro text-lg">Based in Canada, I'm a <span className="font-[Space_Grotesk]">photographer</span> and <span className="font-[Space_Grotesk]">videographer</span>, passionate about making digital memories and experiences that people love.</p>
                        <a className="uppercase underline decoration-yellow-300 font-[Space_Grotesk] font-semibold text-xl hover:-translate-y-[2px] transition-all duration-250 active:translate-y-[2px]" href="#contact">Contact me</a>
                    </div>
                    <div className="personal-image-box">
                        <img className="personal-image" src="#" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero