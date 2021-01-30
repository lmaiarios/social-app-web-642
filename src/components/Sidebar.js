import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import './Sidebar.css'

function Sidebar(){
    const { user } = useContext(UserContext)

    return (
        <div className="sidebar">
            {user && 
                <>
                    <img
                        className="profile-pic"
                        src={user.profilePic}
                        alt="Profile pic">
                    </img>
                    <div className="info-holder">
                        <span className="fullname">
                            {user.title} {user.fullName}
                        </span>
                        <span className="info-item">
                            {user.email}
                        </span>
                        <span className="info-item">
                            {user.phone}
                        </span>
                        <span className="info-item">
                            <Link to={'/country/'+user.country.toLowerCase()}>{user.city}, {user.country}</Link>
                        </span>
                    </div>
                </>
            }
        </div>
    )
}

export default Sidebar