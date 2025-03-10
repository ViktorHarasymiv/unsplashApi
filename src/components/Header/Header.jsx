import React from 'react'

import { useUser } from "./../../UserContext";

import { SignIn }  from '../SignIn/SignIn';
import Search from '../Search/Search';

import SwiperNav from './../Swiper/Swiper';

import css from './Style.module.css'

import { SiBuildkite } from "react-icons/si";



function Header({favorites, current , closeCurrent , openPage, handleSearch , fullScreenFavorites, OnDelete , activeButtons}) {

  const {  username , loggedIn } = useUser();

  return (
    <header className={css.header_container}>
      
      <div className={css.user_form_block}>
        <a className={css.logo} href="index.html">
          <svg style={{transform: 'rotate(90deg)'}} width="32" height="32" viewBox="0 0 32 32" version="1.1" aria-labelledby="unsplash-startseite" aria-hidden="false">
          <desc lang="en-US">Unsplash logo</desc>
          <title id="unsplash-startseite">Unsplash-Startseite</title>
          <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
          </svg>
        </a>
      { !username &&
      <span className={css.set_search_title}>To search for images, you must specify a registration name.</span>
      }

    {loggedIn == true &&
      <Search onSearch={handleSearch}></Search>
    }
      <SignIn favorites={favorites} current={current } closeCurrent={closeCurrent} openPage={openPage} fullScreen={fullScreenFavorites} OnDelete={OnDelete} activeButtons={activeButtons}/>

    </div>

      {loggedIn == true &&
        <SwiperNav onSearch={handleSearch}></SwiperNav>
       }
    </header>
  )
}

export default Header