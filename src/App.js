import { useState } from 'react'
import propTypes from 'prop-types'
import './App.css';
import Card from './Card'
import Header from './Header'
import AddForm from './AddForm'
import Hippo1 from './imgs/Hippo1.jpeg'; 

function App() {
  const [showAddStory, setAddStory] = useState(false)
  
  const addStory = ( newStory ) => {
    setStories( [newStory, ...stories,])
  }

  const toggleCard = (id) => {
    setStories(stories.map(story => story.id === id ? { ...story, open: !story.open} : story ))
  }

  const deleteStory = (id) => {
    setStories(stories.filter(story => story.id !== id))
  }

  return (
    <div className="App container">
      <Header onAdd={() => setAddStory(!showAddStory)} showAdd={showAddStory}/>
      {showAddStory && <AddForm onAdd={addStory} stories={stories}/> }
     {stories.length > 0 ? <Card stories={stories} onToggle={toggleCard} onDelete={deleteStory} /> : 'No Stories to show'}
    </div>
  );
}

Card.propTypes = {
  stories: propTypes.array.isRequired,
}
export default App;
