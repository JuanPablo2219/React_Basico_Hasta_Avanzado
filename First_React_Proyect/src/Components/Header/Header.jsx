import reactImage from '../../img/react-logo-xs.png';
import "./Header.css";

const reactTitles = ['React Fundamentos', 'React Bases', 'React Principios'];

function getRandomTtile(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function Header() {
    const titleWinner = reactTitles[getRandomTtile(0, 2)];

    return (
        <header>
            <img src={reactImage} alt="Image Core Concepts" />
            <h1>{titleWinner}</h1>
            <p>¡ Conceptos Fundamentales de React que necesitas conecer para desarrollar cualquier app con esta famosa librería !</p>
        </header>
    )
}

export default Header
