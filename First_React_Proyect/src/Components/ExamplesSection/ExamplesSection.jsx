import TabButton from '../TabButton/TabButton'
import { EXAMPLES } from "../../data";
import React, { useState } from 'react'
import "./ExamplesSection.css";

function ExamplesSection() {
    const [selectedTopic, setSelectedTopic] = useState(null);

    const handleClickButton = (selectedButton) => {
        setSelectedTopic(selectedButton);
    };

    return (
        <section id='reactExamples'>
            <h2>Ejemplos de React</h2>
            <menu>
                <TabButton isSelected={selectedTopic === 'components'} onclick={() => handleClickButton('components')}>Componentes</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onclick={() => handleClickButton('jsx')}>Jsx</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onclick={() => handleClickButton('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onclick={() => handleClickButton('state')}>Estados</TabButton>
            </menu>
            {!selectedTopic ? (<p>Aquí se va a mostrar información sobre las caracteristicas de <em>react</em> para ello elige una opción del menú 👆</p>) : (
                <div id='tab-content'>
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>
                            {EXAMPLES[selectedTopic].code}
                        </code>
                    </pre>
                </div>
            )}
        </section>
    )
}

export default ExamplesSection
