import { useState } from 'react'

const AddForm = ( { onAdd, stories } ) => {
    
    const [title, setTitle] = useState('')
    const [text, setStory] = useState('')
    const [newId, setNewId] = useState(null)
    const [open, setOpen] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 10000) + 1;
        if(!text) {
            alert('Please add a story')
            return
        }
        onAdd( { title, text, id, open } )
        setTitle('')
        setStory('')
        setNewId(id)
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Title</label>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Story</label>
                <input type="text" placeholder="Story" value={text} onChange={(e) => setStory(e.target.value)}/>
            </div>
            <input type="submit" className="submit-button" className="btn btn-block" value="Save" />
               
        </form>
    )
}

export default AddForm
