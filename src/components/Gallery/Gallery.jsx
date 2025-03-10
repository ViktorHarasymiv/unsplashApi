import React from 'react'

import css from "./Style.module.css";
import ImageTile from './ImageTile';

const ArticleList = ({items , setOpen, setModal, liked, onDelete, activeButton , setActiveButton, fullScreen, activeButtons, active, favorites }) => {
  
  
  return (
    <section className='container'>
        <ul className={css.gallery} >
            {items.map((item, index) => (
              <ImageTile 
                key={index} 
                imageTile={item}
                data={items}
                openModal={setOpen}
                setModal={setModal}
                like={liked}
                setDelete={onDelete}
                activeButton={activeButton}
                setActiveButton={setActiveButton}
                fullScreen={fullScreen}

                activeButtons={activeButtons}
                active={active}

                favorites={favorites}
              />
          ))}
        </ul>
    </section>
  );
};

export default ArticleList