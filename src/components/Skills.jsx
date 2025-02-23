import SkillCard from "./SkillCard"

const skills = [
    {
        skillName: 'Photo Manipulation',
        skillTool: 'Photoshop',
    },
    {
        skillName: 'Photo Editing',
        skillTool: 'Lightroom',
    },
    {
        skillName: 'Video Editing',
        skillTool: 'Premiere Pro',
    }
]

const Skills = () => {
    return (
        <section className="px-5 mb-24 text-center">
            <div className="py-8 flex flex-col gap-8 border-y-2">
                {skills.map((skill, i) => {
                    return (
                        <SkillCard 
                            key={i}
                            {...skill}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Skills