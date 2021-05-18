export const Story = ( { stories } ) => {
    return (
        <div>
             {stories.map(s => <p>{s}</p>)}
            {/* {tales.map(( tale => tale.Text ))} */}
            {/* {tales.map((tale => `${tale.Text} ` ))}
            {/* {`${tales[0].Text}`} */}
        </div>
    )
}

export default Story;