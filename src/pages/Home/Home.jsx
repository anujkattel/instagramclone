import React, { useState, useRef } from 'react';
import StoryModal from './StoryModal';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
const data = [
  { username: 'anup_kattel', Images: require("../../assets/Img/img1.jpg") },
  { username: 'anup_', Images: require("../../assets/Img/img2.jpg") },
  { username: 'anuj_', Images: require("../../assets/Img/img3.jpg") },
  { username: 'anish', Images: require("../../assets/Img/img4.jpg") },
  { username: 'user5', Images: require("../../assets/Img/img5.jpg") },
  { username: 'user6', Images: require("../../assets/Img/img6.jpg") },
  { username: 'user7', Images: require("../../assets/Img/img7.jpg") },
  { username: 'user8', Images: require("../../assets/Img/img8.jpg") },
  { username: 'user9', Images: require("../../assets/Img/img7.jpg") },
  { username: 'user6', Images: require("../../assets/Img/img5.jpg") },
  { username: 'shyam2', Images: require("../../assets/Img/img4.jpg") },
  { username: 'user9', Images: require("../../assets/Img/img7.jpg") },
  { username: 'user9', Images: require("../../assets/Img/img6.jpg") },
  { username: 'code9', Images: require("../../assets/Img/img2.jpg") },
  { username: 'user9', Images: require("../../assets/Img/img8.jpg") },
  { username: 'instagram9', Images: require("../../assets/Img/img6.jpg") },
  { username: 'codewithbard', Images: require("../../assets/Img/img2.jpg") },
  { username: 'user9', Images: require("../../assets/Img/img8.jpg") },
  { username: 'user6', Images: require("../../assets/Img/img7.jpg") },
  { username: 'harry2', Images: require("../../assets/Img/img6.jpg") },
  { username: 'user9', Images: require("../../assets/Img/img2.jpg") },
  { username: 'user9', Images: require("../../assets/Img/img8.jpg") },
  { username: 'user6', Images: require("../../assets/Img/img1.jpg") },
  { username: 'user2', Images: require("../../assets/Img/img7.jpg") },
  { username: 'user6', Images: require("../../assets/Img/img6.jpg") },
  { username: 'user2', Images: require("../../assets/Img/img2.jpg") },
]


const postData = [
  { id: 1, author: 'John Doe', timestamp: '2 hours ago', content: 'This is a Facebook post.' },
  { id: 2, author: 'Jane Smith', timestamp: '1 day ago', content: 'Another Facebook post here.' },
  { id: 3, author: 'Alice Johnson', timestamp: '3 days ago', content: 'Yet another post on Facebook.' },
  // Add more posts as needed
];

const Profile = ({ username, image, onClick }) => (
  <div className="suggestions-profile-user flex" onClick={onClick}>
    <div className="user-stories">
      <img src={image} alt="" />
      <span className="username-right-text">{username}</span>
    </div>

  </div>

);

function Home() {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(null);
  const scrollElement = useRef(null)
  const handleStoryClick = (index) => {
    setSelectedStoryIndex(index);
  };

  const handleScrollX = () => {
    scrollElement.current.scrollLeft += 500;

  };
  const handleScrollY = () => {
    scrollElement.current.scrollLeft -= 500;

  };

  return (
    <>

      <div className="main-home-container">
        <div className="stories">
          <div className="user-stories-data" ref={scrollElement} >
            {data.map((item, index) => (
              <Profile
                key={index}
                username={item.username}
                image={item.Images}
                onClick={() => handleStoryClick(index)}
              />
            ))}
            <div className="button-arrow">
              <button onClick={handleScrollX}><FaArrowAltCircleRight /></button>
            </div>
            <div className="button-arrow-left">
              <button onClick={handleScrollY}><FaArrowAltCircleLeft /></button>
            </div>
          </div>
          {/* </div> */}


          {/* Render the selected story in a modal */}

        </div>
        <div className="stories-null">
          {selectedStoryIndex !== null && (
            <StoryModal
              image={data[selectedStoryIndex].Images}
              username={data[selectedStoryIndex].username}
              onClose={() => setSelectedStoryIndex(null)}
            />
          )}
        </div>

        
      </div>

    </>
  );
}

export default Home;