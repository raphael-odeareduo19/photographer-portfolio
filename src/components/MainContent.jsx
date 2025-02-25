import ProjectCard from "./ProjectCard"
import project1Img from "../assets/pic2.jpeg"
import project2Img from "../assets/restaurant.jpg"
import project3Img from "../assets/kilimanjaro.jpg"
import project4Img from "../assets/alegro.jpg"

const projects = [
    {
        projectImgSrc: project1Img,
        projectLink: 'https://www.instagram.com/lexarenpictures/p/DGJO6rWSIuo/',
    },
    {
        projectImgSrc: project2Img,
        projectLink: 'https://www.instagram.com/p/DFZn1v6RmbG/?img_index=8',
    },
    {
        projectImgSrc: project3Img,
        projectLink: 'https://www.instagram.com/lexarenpictures/p/DFZn1v6RmbG/',
    },
    {
        projectImgSrc: project4Img,
        projectLink: 'https://www.instagram.com/lexarenpictures/p/DBxsin5RWt7/',
    },
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