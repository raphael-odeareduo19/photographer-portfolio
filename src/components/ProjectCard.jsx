const ProjectCard = (props) => {
    return (
        <a href={props.projectLink} target="_blank">
            <div className="relative shadow-[6px_6px_0_white] rounded overflow-hidden cursor-pointer">
                <div className="absolute w-full h-full text-white flex justify-center items-end text-2xl font-[Space_Grotesk] font-bold md:bg-[rgba(0,0,0,0.5)] hover:text-yellow-300 hover:bg-transparent transition-all duration-500">See more</div>
                <img className="w-full" src={props.projectImgSrc} alt="photgraphy-project" />
            </div>
        </a>
    )
}

export default ProjectCard