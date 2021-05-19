const Title = ( { titles, onToggle, stories }) => {
    return (
        <div>
           {titles.map(t => <h3>{t}</h3>) }
        </div>
    )
}
export default Title;