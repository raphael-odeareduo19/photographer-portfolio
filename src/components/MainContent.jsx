import ProjectCard from "./ProjectCard"
import project1Img from "../assets/pic2.jpeg"
import project2Img from "../assets/pic4.jpeg"

const projects = [
    {
        projectImgSrc: project1Img,
        projectSummary: '',
    },
    {
        projectImgSrc: project2Img,
        projectSummary: '',
    },
    // TODO: Include different image object
    // {
    //     projectImgSrc: '',
    //     projectSummary: '',
    // }
]

const MainContent = () => {
    return (
        <main className="px-5 mb-28 md:px-10">
            <h3 className="mb-4 uppercase font-[Space_Grotesk] font-semibold text-3xl text-center">Projects</h3>
            <div className="max-w-[1200px] mx-auto flex flex-col gap-12 md:grid md:grid-cols-2">
                {projects.map((project, i) => {
                    return (
                        <ProjectCard 
                            key={i}
                            {...project}
                        />
                    )
                })}
            </div>
        </main>
    )
}

export default MainContent