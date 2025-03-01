import React from 'react'

import css from "./Style.module.css";

import { IoIosSearch } from "react-icons/io";

function Search({onSearch}) {

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const form = evt.target;
    
        const SEARCH_VALUE = form.elements.SEARCH_VALUE.value;
    
        onSearch(SEARCH_VALUE);

        form.reset();
      }


  return (
    <form onSubmit={handleSubmit} className={css.search}>
      <div className={css.search_tile}>
      <IoIosSearch className={css.icons_search} />
      <input type="search" name="SEARCH_VALUE" placeholder="Search photos and illustrations" className={css.search_input} />
      </div>
      <button className={css.search_button}>Search</button>
    </form>
  )
}

export default Search