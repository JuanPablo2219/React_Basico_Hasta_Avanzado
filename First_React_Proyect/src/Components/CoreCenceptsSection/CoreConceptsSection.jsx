import { CORE_CONCEPTS } from "../../data";
import CoreConcepts from "../CoreConcepts/CoreConcepts";

function CoreConceptsSection() {
    return (
        <section id='coreConcepts'>
            <h2>Principales Caracteristica</h2>
            <div>
            {CORE_CONCEPTS.map((core) => {
                return (
                    <CoreConcepts imagePath={core.imagePath} title={core.title} description={core.description}/>
                )
            })}
            </div>
        </section>
    )
}

export default CoreConceptsSection
