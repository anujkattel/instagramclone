import React from 'react';
import { MdCancel } from "react-icons/md";
const StoryModal = ({ image, username, onClose }) => {
  // Construct the absolute URL using the current window location
  const absoluteImageURL = new URL(image, window.location.href).toString();

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={absoluteImageURL} alt="" className="stories-select" />
        <span className="selected-username">{username}</span>
        <button label="Close" onClick={onClose}><MdCancel /></button>
      </div>
    </div>
  );
};

export default StoryModal;
