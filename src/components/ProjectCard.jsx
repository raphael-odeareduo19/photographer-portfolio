const ProjectCard = (props) => {
    return (
        <a href={props.projectLink} target="_blank">
            <div className="shadow-[6px_6px_0_white] rounded overflow-hidden cursor-pointer">
                <img className="w-full hover:scale-110 transition-all duration-500" src={props.projectImgSrc} alt="photgraphy-project" />
            </div>
        </a>
    )
}

export default ProjectCard