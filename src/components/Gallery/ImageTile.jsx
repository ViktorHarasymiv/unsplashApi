import React , {useState} from 'react';

import { MdOutlineZoomOutMap } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";

import './style.css';
import css from "./Style.module.css";


function ImageTile({imageTile , data , openModal , setModal, like, setDelete}) {

  const [activeButton, setActiveButton] = useState(false)

  const fullScreen = (e) => {
        const imgItem = e.target.closest("button");
        
        if(imgItem) {
            const INDEX_ITEM = imgItem.dataset.id;
            const FIND_ID = data.find((image) => image.id === INDEX_ITEM);

            if(FIND_ID) {
                setModal(imageTile.urls.full);
                openModal(FIND_ID)
            }
          }
    }

  const handleSubmit = () => {

    if(activeButton !== true)

      setActiveButton(true)

      setDelete(imageTile)
      
      like({
        id: imageTile.id,
        images: imageTile.urls.small,
        likes: activeButton,
       }
      );

       if(activeButton == true) {
        setActiveButton(false)
        deleteSubmit()
       }
    }

  const deleteSubmit = () => {
    setDelete(imageTile)
    }
  

  return (
    <li id={imageTile.id} className={css.gallery_list}>     
            <img src={imageTile.urls.regular} alt={imageTile.alt_description} loading='lazy' className={css.gallery_image} />
          <div className={css.gallery_backdrop}>
            <div className={css.backdrop_buttons}>
                <button onClick={fullScreen} data-id={imageTile.id} className='button_nav' ><MdOutlineZoomOutMap style={{fontSize: '14px'}} /></button>
                <button onClick={handleSubmit} className={activeButton === false ? "button_nav" : "button_nav active"}><FaHeart style={{fontSize: '14px'}}/></button>
                <button className='button_nav'><IoShareSocial style={{fontSize: '14px'}}/></button>
            </div>
          </div>
    </li>
  )
}

export default ImageTile