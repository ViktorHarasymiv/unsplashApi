import React from 'react'

import { useUser } from "./../../UserContext";

import { UserMenu }  from '../SignIn/SignIn';
import Search from '../Search/Search';

import css from './Style.module.css'

import { SiBuildkite } from "react-icons/si";



function Header({favorites, current , closeCurrent , openPage, handleSearch }) {

  const {  username , isLoggedIn } = useUser();

  return (
    <header className={css.header_container}>
      
      <div className={css.user_form_block}>
        <a href="#"><SiBuildkite style={{fontSize: '3.5em'}} /></a>
      { !username &&
      <span className={css.set_search_title}>To search for images, you must specify a registration name.</span>
      }

      {!username == '' &&
        <Search onSearch={handleSearch}></Search>
      }
        <UserMenu favorites={favorites} current={current } closeCurrent={closeCurrent} openPage={openPage}/>
      </div>

    </header>
  )
}

export default Header