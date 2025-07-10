import CoreConcepts from "./Components/CoreConcepts/CoreConcepts.jsx";
import Header from "./Components/Header/Header.jsx"
import TabButton from "./Components/TabButton/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js"
import { EXAMPLES } from "./data.js";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handeClickButton = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  return (
    <div>
      <Header />
      <section id="coreConcepts">
        <h2>Principales Caracteristica</h2>
        <div>
          <CoreConcepts {...CORE_CONCEPTS[0]} />
          <CoreConcepts {...CORE_CONCEPTS[1]} />
          <CoreConcepts {...CORE_CONCEPTS[2]} />
          <CoreConcepts {...CORE_CONCEPTS[3]} />
        </div>
      </section>

      <section id="reactExamples">
        <h2>Ejemplos de React</h2>
        <menu>
          <TabButton isSelected={selectedTopic === 'components'} onclick={() => handeClickButton('components')}>Componentes</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onclick={() => handeClickButton('jsx')}>Jsx</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onclick={() => handeClickButton('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onclick={() => handeClickButton('state')}>Estados</TabButton>
        </menu>

        {!selectedTopic ? (<p>Aquí se va a mostrar información sobre las caracteristicas de <em>react</em> para ello elige una opción del menú</p>)
          : (
            <div id="tab-content">
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

      <main>
        <h2>¡ Comenzando Con React</h2>
      </main>
    </div>
  )
}

export default App
