import { useState } from 'react'
import { projectFirestore } from './firebase/config'


const AddForm = ({ onAdd, stories }) => {

    const [title, setTitle] = useState('')
    const [text, setStory] = useState('')
    const [newId, setNewId] = useState(2400)
    const [open, setOpen] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 10000) + 1;
        if (!title) {
            alert('Please enter task')
            return
        }
        onAdd({ title, text, id, open })
        setTitle('')
        setStory('')
        setNewId(id)
        setOpen(false)
        // add to firestore db
        projectFirestore.collection('tasks').add({ title, text, id, open })
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <input type="text" placeholder="Add a task" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <input type="submit" className={"btn btn-block"} value="Save" />

        </form>
    )
}

export default AddForm
