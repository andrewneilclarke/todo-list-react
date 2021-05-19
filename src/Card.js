export const Card = ( { stories, onToggle } ) => {
    return (
        <div>
                {stories.map((story) => {
                    const { id, title, text } = story;
                    return (
                        <div key={id} className="card" onDoubleClick={() => onToggle(id)}>
                            <h1 key={title} className="title">{title}</h1> 
                            <p key={story.id} className="text">{story.open ? text : null }</p>
                        </div>
                      );
                })}
        </div>
    );
}
    export default Card;
