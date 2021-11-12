import { useState } from 'react'
import { projectFirestore } from './firebase/config'


const AddForm = ({ onAdd, tasks, user }) => {

    const [title, setTitle] = useState('')
    const userid = user.uid;
    // console.log('current user id - ', userid)


    const onSubmit = async (e) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 10000) + 1;
        if (!title) {
            alert('Please enter task')
            return
        }
        onAdd({ title, id, userid })
        setTitle('')
        // add to firestore db
        await projectFirestore.collection('tasks').add({ title, id, userid })
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
