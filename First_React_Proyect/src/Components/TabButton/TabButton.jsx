import './TabButton.css';

function TabButton({children, onclick, isSelected}) {
    return (
        <div>
            <button className={isSelected ? 'active' : ''} onClick={onclick} >{children}</button>
        </div>
    )
}

export default TabButton
