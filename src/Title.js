const Title = ( { titles }) => {
    return (
        <div>
           {titles.map(t => <h3>{t}</h3>)}
        </div>
    )
}
export default Title;