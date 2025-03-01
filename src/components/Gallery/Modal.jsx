import React, {useState} from 'react';
import Modal from "react-modal";

import css from './Style.module.css'

import { IoCloseOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { RxExternalLink } from "react-icons/rx";
import { BiBorderRadius } from 'react-icons/bi';

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
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  content: {
    position: 'absolute',
    width: '85vw',
    height: '90vh',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%', 
    transform: 'translate(-50%, -50%)',

    padding: '10px 20px',
    borderRadius: '8px',

    
    display: 'flex',
    alignItems: 'center',
    zIndex: 1000,
  }};

function ModalPage({isOpen, setClose, image, like , setDelete }) {

  const [activeButton, setActiveButton] = useState(false)

  // const handleSubmit = () => {
    
  //   if(activeButton !== true)

  //     setActiveButton(true)

  //     setDelete(image);

  //     like({
  //       id: image.id,
  //       images: image.urls.small,
  //       likes: activeButton,
  //      });

  //   if(activeButton == true) {
  //     setActiveButton(false)
  //     deleteSubmit()
  //   }
  // }

  const deleteSubmit = () => {
    setDelete(image)
  }

  return (
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {image && (
        <div className={css.modal_wrapper}>
          <button onClick={setClose} className={css.modal_close}>
            <IoCloseOutline />
          </button>
          <div className={css.modal_user_tile}>
             <a  href={image.user.social.portfolio_url} target='_blank' className={css.modal_user}>
                <img src={image.user.profile_image.large} alt='' className={css.modal_photographer}/>
                <div className={css.user_title_content}>
                 <span className={css.modal_user_name}>{image.user.first_name}<RxExternalLink style={{fontSize: '9px', marginLeft: '2px', position: 'absolute', top: '-2px'}} /></span>
                 <span className={css.modal_user_location}>{image.user.location}</span>
                </div>
             </a>
             {/* <button onClick={handleSubmit} className={activeButton === false ? "button_nav" : "button_nav active"}><FaHeart style={{fontSize: '16px'}}/></button> */}
          </div>
        <div className={css.modal_image}>
          <a className={css.galleryItem} href={image.urls.full} target='_blank'>
            <img src={image.urls.regular} alt={image.alt_description} loading='lazy' className={css.modal_image} />
            <div className={css.alt_tile}>
              <div className={css.alt_text}>{image.alt_description}</div>
            </div>
          </a>
        </div>
          <div className={css.modal_column_info}>
              <div className={css.info_value_box}>
                <span className={css.info_title}>Views</span>
                <p className={css.info_value}>{image.width}</p>
              </div>
              <div className={css.info_value_box}>
                <span className={css.info_title}>Downloads</span>
                <p className={css.info_value}>{image.height}</p>
              </div>
              <div className={css.info_value_box}>
                <span className={css.info_title}>Likes</span>
                <p className={css.info_value}>{image.likes}</p>
              </div>
          </div>
        </div>
        )}
      </Modal>
  )
}

export default ModalPage