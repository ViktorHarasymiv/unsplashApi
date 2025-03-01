import React from 'react'

import css from "./../Gallery/Style.module.css";

import { MdOutlineZoomOutMap } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";

function FavoritedImage({items}) {
  return (
    <li id={items.id} className={css.gallery_list}>     
                <img src={items.images} alt={items.alt_description} loading='lazy' className={css.gallery_image} />
              <div className={css.gallery_backdrop}>
                <div className={css.backdrop_buttons}>
                    <button  data-id={items.id} className='button_nav' ><MdOutlineZoomOutMap style={{fontSize: '14px'}} /></button>
                    <button  className="button_nav active"><FaHeart style={{fontSize: '14px'}}/></button>
                    <button className='button_nav'><IoShareSocial style={{fontSize: '14px'}}/></button>
                </div>
              </div>
        </li>
  )
}

export default FavoritedImage