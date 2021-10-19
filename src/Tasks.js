const Tasks = ({ stories }) => {
    console.log(stories)
    return (
        <div className="task-list">
            {stories &&
                stories.map(task => (
                    <p>{task.title}</p>
                ))}
        </div>
    )
}

export default Tasks
