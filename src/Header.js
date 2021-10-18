import Button from './Button'

export const Header = ({ onAdd, showAdd }) => {
    return (
        <header className="header">
            <h4>My Todo List</h4>
            <Button
                color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add todo'} onClick={onAdd} />
        </header>
    )
}

export default Header;