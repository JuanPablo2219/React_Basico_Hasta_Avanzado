import componentsImage from "./img/blocks-logo.png";
import jsxImage from "./img/mix-logo.webp";
import propsImage from "./img/settings-icon.png";
import stateImage from "./img/state-logo.png";

export const CORE_CONCEPTS = [
  { imagePath: componentsImage,
    title: "Componentes",
    description: "El nucleo principal de una construcción de una UI con react. La combinanción de distintos componentes logra una compocición de una UI mas manejable"
  },
  {
    imagePath: jsxImage,
    title: "JSX",
    description: "Una combinación de codigo JS Y HTML. Retorna contenido HTML potencialmente dinamíco que será renderizado para componer la UI."
  },
  {
    imagePath: propsImage,
    title: "Props",
    description: "Proporcionan a los componentes la capacidad de poder tener atributos personalizados para que estos reciban información"
  },
  {
    imagePath: stateImage,
    title: "States",
    description: "Principales manejadores de datos en React, cuando encuentran un cambio en los datos obligan al componente a re-renderizar y actualizar la interfaz."
  },
];

export const EXAMPLES = {
  components: {
    title: "Componentes",
    description:
      "Los componentes son los bloques de construcción de las aplicaciones React. Un componente es un módulo autocontenido (HTML + CSS opcional + JS) que renderiza alguna salida.",
    code: `
  function Welcome() {
    return <h1>¡Hola, Mundo!</h1>;
  }`,
  },
  jsx: {
    title: "JSX",
    description:
      "JSX es una extensión sintáctica de JavaScript. Es similar a un lenguaje de plantillas, pero tiene toda la potencia de JavaScript (por ejemplo, puede emitir contenido dinámico).",
    code: `
  <div>
    <h1>Bienvenido {userName}</h1>
    <p>¡Es hora de aprender React!</p>
  </div>`,
  },
  props: {
    title: "Props",
    description:
      "Los componentes aceptan entradas arbitrarias llamadas props. Son como argumentos de función.",
    code: `
  function Welcome(props) {
    return <h1>Hola, {props.name}</h1>;
  }`,
  },
  state: {
    title: "Estado",
    description:
      "El estado permite a los componentes de React cambiar su salida a lo largo del tiempo en respuesta a las acciones del usuario, las respuestas de la red y cualquier otra cosa.",
    code: `
  function Counter() {
    const [isVisible, setIsVisible] = useState(false);
  
    function handleClick() {
      setIsVisible(true);
    }
  
    return (
      <div>
        <button onClick={handleClick}>Muestra los detalles</button>
        {isVisible && <p>¡Estos detalles son alucinantes!</p>}
      </div>
    );
  }`,
  },
};
