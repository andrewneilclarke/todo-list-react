import Button from './Button'

export const Header = () => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <header className="header">
            <h4>Bedtime Stories</h4>
            <Button color='rgb(232, 194, 252)' text='Add' onClick={onClick} />
        </header>
    )
}

export default Header;