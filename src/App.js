import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import propTypes from 'prop-types'
import Card from './Card'
import Header from './Header'
import AddForm from './AddForm'
import Hippo1 from './imgs/Hippo1.jpeg';

function App() {
  const [showAddStory, setAddStory] = useState(false)
  const [stories, setStories] = useState(() => {
    return [
      {
        "id": 0,
        "title": "When do Hippos Play?",
        "text": `Right next to the African river, which is called the Nile, the sun fell away and it 
      rested for a while. The rhinos had survived the scorching heat, they lay down to sleep as 
      they wiped off their feet. The elephants marched to their elephant beds, and gently they 
      rested their elephant heads. The hippos went bathing in cool, shallow pools, thinking the 
      rhino and elephant fools. Slowly the hippos sank into the river, the water so cold that it gave 
      them a shiver. Hippos can't swim, like the you might think, they also can't float, they could 
      easily sink. Underwater, they fell onto the soft river bed on dark green plants with a little 
      bit of red. They strolled on the bottom, then bounced up for air
      They did it for hours, without any care       
      The fish followed closely, and wove in an out       
      Under their belly, and up to their snout
      Each of the hippos came up to the shore    
      To feed on the grass by the river once more
      They dried off their bodies by shaking and stomping
      And took bites of grass, chewing and chomping
      With night fading fast, they were full from the feast 
      The sun returned back, rising up form the east
      The hippos crept off to collapse for the day
      While rhinos and elephants got up to play
      Enjoying the warmth of the sun and its light 
      Never knowing the story of hippos at night`,
        "open": false,
        "image": Hippo1,
      }
    ]
  })


  const addStory = (newStory) => {
    setStories([newStory, ...stories,])
  }

  const toggleCard = (id) => {
    setStories(stories.map(story => story.id === id ? { ...story, open: !story.open } : story))
  }

  const deleteStory = (id) => {
    setStories(stories.filter(story => story.id !== id))
  }

  return (
    <div className="App container">


      <Header onAdd={() => setAddStory(!showAddStory)} showAdd={showAddStory} />
      {showAddStory && <AddForm onAdd={addStory} stories={stories} />}
      {stories.length > 0 ? <Card stories={stories} onToggle={toggleCard} onDelete={deleteStory} /> : 'No Tasks to show :) '}
    </div>
  );
}

Card.propTypes = {
  stories: propTypes.array.isRequired,
}
export default App;
