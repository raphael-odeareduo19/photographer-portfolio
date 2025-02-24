import ProjectCard from "./ProjectCard"

const projects = [
    {
        projectImg: '',
        projectSummary: '',
    },
    {
        projectImg: '',
        projectSummary: '',
    },
    {
        projectImg: '',
        projectSummary: '',
    }
]

const MainContent = () => {
    return (
        <main className="px-5">
            <h3 className="uppercase font-[Space_Grotesk] font-semibold text-3xl text-center">Projects</h3>
            <div className="flex flex-col">
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