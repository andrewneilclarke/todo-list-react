import { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import Card from './Card'
import Header from './Header'
import AddForm from './AddForm'
import Login from './Login'
import { projectFirestore, auth } from './firebase/config'

function App() {
  // login state
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPassworError] = useState('')
  const [hasAccount, setHasAccount] = useState(false)
  const [loggedin, setLoggedIn] = useState(false)
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  // get tasks on render
  // useEffect(() => {
  //   const fetchTasks = () => {
  //     const tasks = [];
  //     await projectFirestore.collection('tasks').get().then((snapshot) => {
  //       snapshot.docs.map(doc => {
  //         const { title, id } = doc.data()
  //         const newTask = { title, id }
  //         tasks.push(newTask)
  //         setTasks(tasks)
  //   }
  //       fetchTasks()
  // }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const response = await projectFirestore.collection('tasks').get()
    const tasks = [];
    response.docs.map((doc) => {
      const newTask = { title: doc.data().title, id: doc.data().id }
      // const { title, id } = doc.data().title
      // const newTask = { title, id }
      // console.log(newTask)
      tasks.push(newTask)
      return tasks
    })
    setTasks(tasks)
  }


  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      console.log(tasksFromServer)
    }
    getTasks()

  }, [])


  const addTask = (newTask) => {
    setTasks([newTask, ...tasks,])
  }


  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
    projectFirestore.collection('tasks').onSnapshot((snap) => {
      snap.forEach(doc => {
        doc.data().id === id && doc.ref.delete();
      })
    }
    )
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
    setLoggedIn(true)
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

  // authentication change
  useEffect(() => {
    const authListener = () => {
      auth.onAuthStateChanged(user => {
        if (user) {
          clearInputs();
          setUser(user);
        } else {
          setUser('')
        }
      })
    }
    authListener();
  }, [user])

  return (
    <>
      {user ? (<div className="App container h-screen sm:m-2">
        <Header handleLogout={handleLogout} user={user} loggedin={loggedin} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddForm onAdd={addTask} tasks={tasks} user={user} />}
        {tasks.length > 0 && <Card tasks={tasks} onDelete={deleteTask} user={user} />}
      </div>)
        :
        (<div className="flex flex-col h-screen w-screen overflow-hidden">
          <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleSignup={handleSignup} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError} />
        </div>
        )}

    </>
  );
}

Card.propTypes = {
  tasks: propTypes.array.isRequired,
}
export default App;
