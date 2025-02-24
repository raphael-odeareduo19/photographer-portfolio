const ProjectCard = (props) => {
    return (
            <div className="shadow-[6px_6px_0_#242424] rounded overflow-hidden">
                <img className="w-full" src={props.projectImgSrc} alt="photgraphy-project" />
                <div>
                    <p></p>
                </div>
            </div>
    )
}

export default ProjectCard