import "./CoreConcepts.css";
function CoreConcepts({imagePath, title, description}) {
    return (
        <div>
            <img src={imagePath} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default CoreConcepts
