const Footer = () => {
    return (
        <footer id="contact" className="px-5 py-12 pb-6 bg-[#242424] text-center">
            <div className="">
                <p className="mb-4 font-[Space_Grotesk] font-semibold text-4xl">Contact</p>
                <p className="mb-10 text-lg">I would love to hear about your project and discuss how I could bring it to life. Send an email or make a call, and I'll get back to you as soon as possible.</p>
                <div className="flex flex-col gap-4 mb-12">
                    <a className="font-semibold text-lg hover:text-yellow-300 transition-all duration-1000" href="mailto:" target="_blank">lexarenlogistics@gmail.com</a>
                    <a className="font-semibold text-lg hover:text-yellow-300 transition-all duration-250" href="tel:+18254610429" target="_blank">+1 (825) 461-0429</a>
                </div>
                <div>
                    <span className="font-black text-xl">Lex<span className="text-yellow-300">pics</span></span>
                </div>
            </div>
        </footer>
    )
}

export default Footer