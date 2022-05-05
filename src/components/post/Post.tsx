import React from 'react'
import './post.css'
import sample from '../../assets/img/sidebarSampleImg.jpg'

export default function Post() {
  return (
    <div className='post'>
        <img className='postImg' src={sample} alt='postImg' />
        
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">lorem</span>
            <hr />
            <span className="postDate">1 hr ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repudiandae esse quaerat. Saepe dolore similique ratione. Dignissimos, harum aperiam iste tenetur eveniet ea praesentium ex perferendis eligendi possimus beatae eaque.
        </p>
    </div>
  )
}
