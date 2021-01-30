import { useState, useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import UserContext from './contexts/UserContext'
import Home from './pages/home'
import Country from './pages/country'
import About from './pages/about'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './App.css';

function App() {
  const [user, setUser] = useState(null)

  const getUser = () => {
    const sessionData = sessionStorage.getItem('user')

    if (sessionData){
      setUser(JSON.parse(sessionData))
    }
    else{
      fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(({results}) => results[0])
        .then(data => {
          const newUser = {
            title: data.name.title,
            fullName: `${data.name.first} ${data.name.last}`,
            city: data.location.city,
            country: data.location.country,
            email: data.email,
            phone: data.phone,
            profilePic: data.picture.medium,
            thumbnail: data.picture.thumbnail
          }

          setUser(newUser)
          sessionStorage.setItem('user', JSON.stringify(newUser))
        })
    }
  }

  useEffect(()=>{
    getUser()
  },[])

  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
        <Navbar />
        <Sidebar />

        <div className="page-container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/country/:country" component={Country}/>
          </Switch>
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
