const ProjectCard = (props) => {
    return (
            <div className="shadow-[6px_6px_0_white] rounded overflow-hidden">
                <img className="w-full hover:scale-110 transition-all duration-500" src={props.projectImgSrc} alt="photgraphy-project" />
                <div>
                    <p></p>
                </div>
            </div>
    )
}

export default ProjectCard