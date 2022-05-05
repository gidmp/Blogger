import "./navbar.css"
import sample from '../../assets/img/sample.jpg'

export default function Navbar() {
  return (
    <div className='nav'>
        <div className="topIcon topLeft">
          <i className="topIcon fa-brands fa-facebook-square"></i>
          <i className="topIcon fa-brands fa-linkedin"></i>
          <i className="topIcon fa-brands fa-twitter-square"></i>
        </div>

        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT ME</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">LOGOUT</li>
          </ul>
        </div>

        <div className="topRight">
          <img className = "topImg" src={sample} alt="profile pic" />
          <i className="searchIcon fa-solid fa-magnifying-glass" />
        </div>

    </div>
  )
}
