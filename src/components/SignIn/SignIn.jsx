import React, { useRef, useEffect } from "react";
import { useUser } from "../../UserContext";

import Favorite from "../Favorite/Favorite";

import css from "./Style.module.css";

import { GoSignOut } from "react-icons/go";
import { GoSignIn } from "react-icons/go";

export const SignIn = ({
  favorites,
  setFavorites,
  openPage,
  current,
  closeCurrent,
  fullScreen,
  OnDelete,
  activeButtons,
}) => {
  const { loggedIn, username, logOut, logIn } = useUser();

  const handleLogOut = () => {
    setFavorites([]);
    logOut();
  };

  return (
    <div className={css.form_tile}>
      {!loggedIn ? (
        <form onSubmit={logIn} className={css.form}>
          <input
            className={css.custom_search}
            type="text"
            name="name"
            placeholder="Name"
            maxLength={18}
            autoFocus
            required
          />

          <button className={css.button}>
            <GoSignIn />
            <span style={{ marginLeft: "7px" }}>Sign In</span>
          </button>
        </form>
      ) : (
        ""
      )}

      {loggedIn ? (
        <div className={css.signUp}>
          <div className={css.user_tile}>
            <span className={css.name_value}>Welcome, {username}</span>
            <Favorite
              data={favorites}
              current={current}
              openPage={openPage}
              closePage={closeCurrent}
              fullScreen={fullScreen}
              OnDelete={OnDelete}
              activeButtons={activeButtons}
            />
          </div>
          <button onClick={handleLogOut} className={css.button}>
            <span style={{ marginRight: "7px" }}>Sign Out</span>
            <GoSignOut />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
