import React from 'react'


import Modal from "react-modal";

import css from "./Style.module.css";

import { FaHeart } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

import NonImage from './images/noImages.png'

import FavoritedImage from './../Favorite/FavoritedImage';

const customStyles = {
  overlay: {
    position: 'fixed',
    zIndex: 1020,
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, .4)',
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'end',
  }
};


function Favorite({data, openPage, current, closePage, fullScreen, OnDelete, activeButtons}) {

    window.addEventListener('keyup' , (e) => {
      if(openPage) {
        if (e.key === 'Escape' || e.key === 'Esc') {
          closePage();  
      }
      return;
      }});

  return (
    <div className={css.overlay}>

        <div onClick={openPage} className={css.like}>
          <div className={css.like_value}>
            <p>My collection</p>
            <FaHeart style={{fontSize: '14px'}}/> {data.length > 0 && <span style={{fontSize: ".7em"}}> {data.length} </span> }
          </div>
        </div>
        
        <Modal
            isOpen={current}
            ariaHideApp={false}
            style={customStyles}
            className={css.favorite_modal_content}
            contentLabel="Favorite modal page"
          >
            <div className={css.favorite_navigation}>
              <span className={css.favorite_title}>Your collection</span>
              <button onClick={closePage} className={css.modal_close}>
                <IoCloseOutline />
              </button>
            </div>

            { data < 1 && <img src={NonImage} width="500px" height="330px" alt="Non Photos" className={css.non_images}/>}

            <ul className={css.favorite_gallery}>
                  {data.map((item , index) => (
                  <FavoritedImage key={index} imageTile={item}  fullScreen={fullScreen} OnDelete={OnDelete} activeButtons={activeButtons}></FavoritedImage>
                ))}
            </ul>
        </Modal>
    </div> 
  )
}

export default Favorite