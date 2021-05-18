import Title from './Title'
import Story from './Story'

export const Card = ( { stories, onToggle } ) => {
    // const titles = stories.forEach(element => element.Text)
    return (
        <div>
                {stories.map((story) => {
                    const { title, text } = story;
                return (
                    <div className="card">
                        <h1 className="title">{title} onDoubleClick={() => onToggle(story.id)}</h1> 
                        <p>{text}</p>
                    </div>
                );
                })}
        </div>
    );
}
    export default Card;
