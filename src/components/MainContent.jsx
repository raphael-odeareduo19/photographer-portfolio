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
        <main>
            <div>
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