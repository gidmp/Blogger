import React from 'react'
import './sidebar.css'
import sidebarSample from '../../assets/img/sidebarSampleImg.jpg'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src={sidebarSample} alt="profile pic" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam doloribus iste tempora quis qui itaque, iusto </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                <i className="sidebarIcon fa-brands fa-linkedin"></i>
                <i className="sidebarIcon fa-brands fa-twitter-square"></i>
            </div>
        </div>
    </div>
  )
}
