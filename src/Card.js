import Title from './Title'
import Story from './Story'

export const Card = ( { stories } ) => {
    // const titles = stories.forEach(element => element.Text)
    return (
        <div>
                {stories.map((story) => {
                    const { title, text } = story;
                return (
                    <div className="card">
                        <h1>{title}</h1> 
                        <p>{text}</p>
                    </div>
                );
                })}
        </div>
    );
}
    export default Card;
