import React, { useState } from "react";
import { useUser } from "./../../UserContext";

import { MdOutlineZoomOutMap } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";

import "./style.css";
import css from "./Style.module.css";

function ImageTile({
  imageTile,
  like,
  setDelete,
  fullScreen,
  activeButtons,
  favorites,
}) {
  const [activeBtn, setActiveBtn] = useState(false);

  const { loggedIn } = useUser();

  const fullScreenClick = (e) => {
    const imgItem = e.target.closest("button");
    fullScreen(imgItem, imageTile);
  };

  const changeLike = (boll) => {
    activeButtons(boll);
  };

  const deleteSubmit = () => {
    setDelete(imageTile);
  };

  const validActiveItem = favorites.some((item) => item.id === imageTile.id);

  const handleSubmit = () => {
    if (validActiveItem !== true) {
      changeLike(activeBtn);

      setActiveBtn(true);

      like({
        id: imageTile.id,
        images: imageTile.urls.small,
        regular: imageTile.urls.regular,
        large: imageTile.user.profile_image.large,
        full: imageTile.urls.full,
        social: imageTile.user.social.portfolio_url,
        name: imageTile.user.first_name,
        location: imageTile.user.location,
        alt: imageTile.alt_description,
        width: imageTile.width,
        height: imageTile.height,
        like: imageTile.likes,
        likes: true,
      });
    } else {
      setActiveBtn(false);
      changeLike(false);
      deleteSubmit();
    }
  };

  return (
    <li id={imageTile.id} className={css.gallery_list}>
      <img
        src={imageTile.urls.regular}
        alt={imageTile.alt_description}
        loading="lazy"
        className={css.gallery_image}
      />
      <div className={css.gallery_backdrop}>
        <div className={css.backdrop_buttons}>
          <button
            onClick={fullScreenClick}
            data-id={imageTile.id}
            className="button_nav"
          >
            <MdOutlineZoomOutMap style={{ fontSize: "14px" }} />
          </button>
          {loggedIn && (
            <button
              onClick={handleSubmit}
              className={validActiveItem ? "button_nav active" : "button_nav"}
            >
              <FaHeart style={{ fontSize: "14px" }} />
            </button>
          )}
          <button className="button_nav">
            <IoShareSocial style={{ fontSize: "14px" }} />
          </button>
        </div>
      </div>
    </li>
  );
}

export default ImageTile;
