import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import propTypes from 'prop-types'
import Card from './Card'
import Header from './Header'
import AddForm from './AddForm'
import Tasks from './Tasks'
import { auth, projectFirestore } from './firebase/config'

function App() {
  // login state
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPassworError] = useState('')
  const [hasAccount, setHasAccount] = useState(false)

  const [showAddStory, setAddStory] = useState(false)
  const [stories, setStories] = useState([])


  // get tasks on render
  // useEffect(() => {
  //   const fetchTasks = () => {
  //     const tasks = [];
  //     await projectFirestore.collection('tasks').get().then((snapshot) => {
  //       snapshot.docs.map(doc => {
  //         const { title, id } = doc.data()
  //         const newTask = { title, id }
  //         tasks.push(newTask)
  //         setStories(tasks)
  //   }
  //       fetchTasks()
  // }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const tasks = [];
    const response = await projectFirestore.collection('tasks').get()
    response.docs.map((doc) => {
      const { title, id } = doc.data()
      const newTask = { title, id }
      tasks.push(newTask)
      setStories(tasks)
    })
  }

  useEffect(() => {
    fetchTasks()
  }, [])


  const addStory = (newStory) => {
    setStories([newStory, ...stories,])
  }

  const toggleCard = (id) => {
    setStories(stories.map(story => story.id === id ? { ...story, open: !story.open } : story))
  }

  const deleteStory = (id) => {
    setStories(stories.filter(story => story.id !== id))
  }
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPassworError('');
  }

  const handleLogin = () => {
    clearErrors();
    auth.signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          default:
            return;
        }
      })
  }

  const handleSignup = () => {
    clearErrors();
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPassworError(err.message);
            break;
          default:
            return;
        }
      })
  }

  const handleLogout = () => {
    auth.signOut();
  }

  useEffect(() => {
    const authListener = () => {
      auth.onAuthStateChanged(user => {
        if (user) {
          clearInputs();
          setUser(user)
        } else {
          setUser('')
        }
      })
    }
    authListener();
  }, [user])

  return (
    <div className="App container">
      <Header user={user} handleLogout={handleLogout} onAdd={() => setAddStory(!showAddStory)} showAdd={showAddStory} />
      {/* {stories.length > 0 ? (<Card stories={stories} onToggle={toggleCard} onDelete={deleteStory} />) : (
        <div className="empty-list">No Tasks to show </div>)} */}
      {stories && <Tasks stories={stories} />}
      {/* {!user && <Login />} */}
      {showAddStory && <AddForm onAdd={addStory} stories={stories} />}
    </div>
  );
}

Card.propTypes = {
  stories: propTypes.array.isRequired,
}
export default App;
