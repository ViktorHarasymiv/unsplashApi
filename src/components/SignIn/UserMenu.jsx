import { useUser } from "../../UserContext";

import css from "./Style.module.css";

export const UserMenu = () => {
    const { isLoggedIn, username, logOut , logIn } = useUser();

  return (
    <div className='container'>
      <div className={css.form_tile}>
    {!isLoggedIn ? ( 
    <form onSubmit={logIn} className={css.form}>
      <input type="text" name="name" placeholder="Name" className={css.custom_search}/>

        <button className={css.button}> Sign In </button>
    </form>  ) : '' }

    {isLoggedIn ? (
      <div className={css.signUp}>
        <span className={css.text_content}>Welcome, <b className={css.name_value}>{username}</b></span>
        <button onClick={logOut} className={css.button}>Sign Up</button>
      </div>

    ) : ''}
    </div>
  </div>
  );
};