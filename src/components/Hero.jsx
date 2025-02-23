import Header from "./Header"

const Hero = () => {
    return (
        <>
            <Header />
            <section className="hero-section px-5 text-center mb-20">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-6">
                        <h1 className="title font-[Space_Grotesk] font-bold text-5xl">Nice to meet you! I'm Lucas Uzum</h1>
                        <p className="intro text-lg">Based in Canada, I'm a photographer and video editor, passionate about making digital memories and experiences that people love.</p>
                        <a className="uppercase underline font-[Space_Grotesk] font-semibold text-lg" href="#contact-form">Contact me</a>
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