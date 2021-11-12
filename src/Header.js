import Button from './Button'

export const Header = ({ onAdd, showAdd, handleLogout, user }) => {

    return (
        <header className="header flex overflow-hidden justify-evenly h-22 md:h-40 md:grid md:grid-cols-2 md:grid-rows-2 items-center justify-center p-2">
            <h4>My Todo List</h4>
            <Button
                text={showAdd ? 'Close' : 'Add todo'} onClick={onAdd} />
            {user &&
                <>
                    <p>Welcome <span className="username mr-2">{user.email}</span></p>
                </>}
            <Button onClick={handleLogout} text={'Sign out'} />

        </header>
    )
}

export default Header;