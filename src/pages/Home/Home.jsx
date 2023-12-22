import React from 'react'
import img1 from "../../assets/Img/img1.jpg"
import { TbAntennaBars1 } from "react-icons/tb";
import LoveReactButton from '../../components/lovereact/LoveReactButton';
import { FaCommentAlt,  FaShareAlt } from 'react-icons/fa';
function Home() {
  return (
    <>
      <div className="main-home-container">
        <div className="stories">
          stories
        </div>
        <div className="posts">
          <div className="header-posts">
            <div className="left-header-post">
              <img src={img1} alt="" />
              <span className='username-header'>Username</span>
              <span className="time">21m</span>
            </div>
            <div className="right-header-post">
              <button>
                <TbAntennaBars1 className='rotate90' />
              </button>
            </div>
          </div>
          <div className="image-post">
            <img src={img1} alt="" />
          </div>
          <div className="likes-post">
            
            <LoveReactButton />
            <FaCommentAlt />
            <FaShareAlt/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home