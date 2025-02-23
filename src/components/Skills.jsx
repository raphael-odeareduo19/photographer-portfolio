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
        <section className="text-center">
            <div className="flex flex-col gap-8">
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