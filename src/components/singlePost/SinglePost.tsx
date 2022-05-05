import './singlePost.css'
import sample from '../../assets/img/sidebarSampleImg.jpg'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src={sample} alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Title
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <b>Daniel</b></span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>

            <p className='singlePostDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque voluptatum necessitatibus alias unde! Quam laboriosam atque doloremque laudantium sequi, dicta maxime eos dolorem laborum eveniet, ea corrupti. Pariatur, voluptatem corporis!

            </p>
        </div>
    </div>
  )
}
