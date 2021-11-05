import Button from './Button'

export const Header = ({ onAdd, showAdd, handleLogout, user }) => {
    console.log(user.email)
    return (
        <header className="header">
            <h4>My Todo List</h4>
            <Button
                text={showAdd ? 'Close' : 'Add todo'} onClick={onAdd} />
            <div className="logout flex items-center ml-3">
                {user &&
                    <>
                        <p>Welcome <span className="username">{user.email}</span></p>
                    </>}
                <Button onClick={handleLogout} text={'Log out'} />
            </div>
        </header>
    )
}

export default Header;