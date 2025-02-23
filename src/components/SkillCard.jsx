const SkillCard = (props) => {
    return (
        <>
            <div className="skill-card">
                <h3>{props.skillName}</h3>
                <p>{props.skillTool}</p>
            </div>
        </>
    )
}

export default SkillCard