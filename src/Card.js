import { FaTimesCircle } from 'react-icons/fa'

export const Card = ({ tasks, onDelete }) => {
    return (
        <div>
            {tasks.map((task) => {
                const { id, title } = task;
                return (
                    <div key={id} className="card">
                        <h1 key={title} className="title">{title} <FaTimesCircle style={{ paddingLeft: '10px', cursor: 'pointer', fontSize: 'xx-large', color: 'var(--color-green-text)', opacity: '0.25' }} onClick={() => onDelete(id)} /> </h1>
                    </div>
                );
            })}
        </div>
    );
}
export default Card;
