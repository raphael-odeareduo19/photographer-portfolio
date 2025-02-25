const Footer = () => {
    return (
        <footer id="contact" className="px-5 py-12 pb-6 bg-[#242424] text-center md:px-8">
            <div className="mx-auto max-w-[1200px] flex flex-col gap-8 md:text-left md:flex-row md:items-center md:gap-20 md:justify-between">
                <div className="max-w-[460px]">
                    <p className="mb-4 font-[Space_Grotesk] font-semibold text-4xl">Contact</p>
                    <p className="mb-10 text-lg">I would love to hear about your project and discuss how I could bring it to life. Send an email or make a call, and I'll get back to you as soon as possible.</p>
                </div>
                <div className="flex flex-col items-center gap-4 mb-12 md:items-start">
                    <a className="flex items-center gap-4 font-semibold text-lg hover:text-yellow-300 transition-all duration-1000" href="mailto:lexarenlogistics@gmail.com" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        <span>lexarenlogistics@gmail.com</span>
                    </a>
                    <a className="flex items-center gap-4 font-semibold text-lg hover:text-yellow-300 transition-all duration-250" href="tel:+18254610429" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        <span>+1 (825) 461-0429</span>
                    </a>
                    <a className="flex items-center gap-4 font-semibold text-lg hover:text-yellow-300 transition-all duration-250" href="https://www.instagram.com/lexarenpictures/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        <span>lexarenpictures</span>
                    </a>
                </div>
            </div>
                <span className="font-[Knewave] font-black tracking-wide text-xl">Lex<span className="text-yellow-300">pics</span></span>
        </footer>
    )
}

export default Footer