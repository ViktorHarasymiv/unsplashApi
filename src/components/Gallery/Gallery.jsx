import React from 'react'

import css from "./Style.module.css";
import ImageTile from './ImageTile';

const ArticleList = ({items , setOpen, setModal, liked, onDelete, activeButton , setActiveButton }) => {
  
  return (
    <section className={css.containerGallery}>
        <ul className={css.gallery} >
            {items.map((item, index) => (
              <ImageTile key={index} imageTile={item}  data={items} openModal={setOpen} setModal={setModal} like={liked} setDelete={onDelete} activeButton={activeButton} setActiveButton={setActiveButton} />
          ))}
        </ul>
    </section>
  );
};

export default ArticleList