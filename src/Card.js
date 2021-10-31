import { FaTimesCircle } from 'react-icons/fa'

export const Card = ({ tasks, onToggle, onDelete }) => {
    return (
        <div>
            {tasks.map((task) => {
                const { id, title } = task;
                return (
                    <div key={id} className="card" onDoubleClick={() => onToggle(id)}>
                        <h1 key={title} className="title">{title} <FaTimesCircle style={{ paddingLeft: '60px', cursor: 'pointer', fontSize: 'xx-large', color: 'var(--color-green-text)', opacity: '0.15' }} onClick={() => onDelete(id)} /> </h1>
                    </div>
                );
            })}
        </div>
    );
}
export default Card;
