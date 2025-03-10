import React from 'react'

import css from "./../Gallery/Style.module.css";

import { MdOutlineZoomOutMap } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";

function FavoritedImage({imageTile, fullScreen , OnDelete, activeButtons}) {

  const fullScreenClick = (e) => {
    const imgItem = e.target.closest("button");
    fullScreen(imgItem, imageTile)
  }

  const deleteSubmit = () => {
    
    activeButtons(false)
    OnDelete(imageTile)

    imageTile.likes = false;
  }

  return (
    <li id={imageTile.id} className={css.gallery_list}>     
                <img src={imageTile.images} alt={imageTile.alt_description} loading='lazy' className={css.gallery_image} />
              <div className={css.gallery_backdrop}>
                <div className={css.backdrop_buttons}>
                    <button onClick={fullScreenClick} data-id={imageTile.id} className='button_nav' ><MdOutlineZoomOutMap style={{fontSize: '14px'}} /></button>
                    <button onClick={deleteSubmit} className={imageTile.likes === false ? "button_nav" : "button_nav active"}><FaHeart style={{fontSize: '14px'}}/></button>
                    <button className='button_nav'><IoShareSocial style={{fontSize: '14px'}}/></button>
                </div>
              </div>
    </li>
  )
}

export default FavoritedImage