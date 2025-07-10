import './TabButton.css';

function TabButton({children, onclick}) {
    return (
        <div>
            <button onClick={onclick}>{children}</button>
        </div>
    )
}

export default TabButton
