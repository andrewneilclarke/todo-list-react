const Tasks = ({ stories }) => {
    return (
        <div className="task-list">
            {stories &&
                stories.map(task => (
                    <p key={task.id}>{task.title}</p>
                ))}
        </div>
    )
}

export default Tasks
