const SkillCard = (props) => {
    return (
        <>
            <div className="skill-card">
                <h3 className="uppercase font-[Space_Grotesk] font-bold text-yellow-300 text-2xl">{props.skillName}</h3>
                <p>{props.skillTool}</p>
            </div>
        </>
    )
}

export default SkillCard