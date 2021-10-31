import Button from './Button'

export const Header = ({ onAdd, showAdd, handleLogout }) => {
    return (
        <header className="header">
            <h4>My Todo List</h4>
            <Button
                text={showAdd ? 'Close' : 'Add todo'} onClick={onAdd} />
            <div className="logout">
                <Button onClick={handleLogout} text={'Log out'} />
            </div>
        </header>
    )
}

export default Header;