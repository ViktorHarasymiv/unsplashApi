import React from 'react'


import Modal from "react-modal";

import cssGallery from "./../Gallery/Style.module.css";
import css from "./Style.module.css";

import { FaHeart } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

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
  },
  content: {
    padding: '10px 15px',
    inset: 'auto',

    position: 'absolute',

    top: '0',
    right: '0',

    width: '900px',
    height: '100vh',

    borderRadius: 'none',

    zIndex: 1000,
  },
};


function Favorite({data, openPage, current, closePage}) {

    const openPageFavorite = (e) => {
        openPage(true);
        return;
    }

    const closePageFavorite = (e) => {
        closePage(false);
        return;
    }

  return (
    <div className={css.overlay}>

        <div onClick={openPageFavorite} className={css.like}>
          <span>Favorite</span> 
          <div className={css.like_value}><FaHeart style={{fontSize: '14px'}}/>
          {data.length > 0 && <span style={{fontSize: ".7em"}}> {data.length} </span> }
          </div>
        </div>
        
        <Modal
            isOpen={current}
            ariaHideApp={false}
            style={customStyles}
            contentLabel="Favorite modal page"
          >
            <div className={css.favorite_navigation}>
              <span className={css.favorite_title}>Your collection</span>
              <button onClick={closePageFavorite} className={css.modal_close}>
                <IoCloseOutline />
              </button>
            </div>

        <ul className={css.favorite_gallery}>
          {data.map((item , index) => (
            <FavoritedImage key={index} items={item}></FavoritedImage>
          ))}
        </ul>
        </Modal>
    </div> 
  )
}

export default Favorite