import Button from './Button'

export const Header = ( {onAdd, showAdd} ) => {
    return (
        <header className="header">
            <h4>Bedtime Stories</h4>
            <Button 
            color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}

export default Header;