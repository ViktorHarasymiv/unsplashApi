import { useUser } from "../../UserContext";

import Favorite from "../Favorite/Favorite";

import css from "./Style.module.css";

import { GoSignOut } from "react-icons/go";
import { GoSignIn } from "react-icons/go";

export const UserMenu = ({favorites, openPage, current, closeCurrent}) => {
  
  const { isLoggedIn, username, logOut , logIn} = useUser();
    
  return (
    <div className='container'>
      <div className={css.form_tile}>
    {!isLoggedIn ? ( 
    <form onSubmit={logIn} className={css.form}>
      <input type="text" name="name" placeholder="Name" autoComplete="none" required className={css.custom_search}/>

        <button className={css.button}><GoSignIn/><span style={{marginLeft: '7px'}}>Sign In</span></button>
    </form>  ) : '' }

    {isLoggedIn ? (
      <div className={css.signUp}>
        <div className={css.user_tile}>
        <span className={css.text_content}>Welcome, <p className={css.name_value}>{username}</p></span>
          <Favorite data={favorites} current={current} openPage={openPage} closePage={closeCurrent} ></Favorite>
        </div>
        <button onClick={logOut} className={css.button}><span style={{marginRight: '7px'}}>Sign Out</span><GoSignOut/></button>
      </div>

    ) : ''}
    </div>
  </div>
  );
};