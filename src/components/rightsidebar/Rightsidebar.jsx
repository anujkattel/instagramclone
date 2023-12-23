import React from 'react';
import img1 from "../../assets/Img/img1.jpg";
import { Link } from 'react-router-dom';

const data = [
  { username: 'anup_kattel', Images: require("../../assets/Img/img1.jpg"), suggestedText: 'Suggested for you' },
  { username: 'anup_', Images: require("../../assets/Img/img2.jpg"), suggestedText: 'Suggested for you' },
  { username: 'anuj_', Images: require("../../assets/Img/img3.jpg"), suggestedText: 'Suggested for you' },
  { username: 'ayush_', Images: require("../../assets/Img/img4.jpg"), suggestedText: 'Suggested for you' },
];

const Profile = ({ username, image, suggestedText }) => (
  <div className="suggestions-profile-user flex">
    <div className="small-flex">
      <div className="logo-right">
        <img src={image} alt="" />
      </div>
      <div className="username-right">
        <span className="username-right-text">{username}</span>
        <span>{suggestedText}</span>
      </div>
    </div>
    <div className="follow">follow</div>
  </div>
);

function Rightsidebar() {
  return (
    <>
      <div className="right-sidebar">
        <div className="sidebar-container">
          <div className="profile-right-sidebar">
            <div className="logo-right">
              <img src={img1} alt="" />
            </div>
            <div className="username-right">
              <span className="username-right-text">anujkattel</span>
              <span className="name-text">Anuj kattel</span>
            </div>
          </div>
          <div className="suggestions">
            <div className="suggestion-text">
              <h3>Suggested for you</h3>
              <Link to="/all-suggestions">See All</Link>
            </div>
            <div>
              {data.map((item, index) => (
                <div className="suggestions-profile-user flex" key={index}>
                  <div className="small-flex">
                    <div className="logo-right">
                      <img src={item.Images} alt="" />
                    </div>
                    <div className="username-right">
                      <span className="username-right-text">{item.username}</span>
                      <span>{item.suggestedText}</span>
                    </div>
                  </div>
                  <div className="follow">follow</div>
                </div>
              ))}
            </div>
          </div>
          <div className="link-area">
            <Link to="/">About</Link>
            <Link to="/">Help</Link>
            <Link to="/">press</Link>
            <Link to="/">API</Link>
            <Link to="/">jobs</Link>
            <Link to="/">Locations</Link>
            <Link to="/">Language</Link>
            <Link to="/">verified</Link>
          </div>
          <div className="copyright">
            <p >© 2023 INSTAGRAM FROM META</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rightsidebar;
