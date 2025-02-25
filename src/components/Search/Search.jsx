import React from 'react'

import css from "./Style.module.css";

function Search({onSearch}) {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
    
        const topic = form.elements.topic.value;
    
        // Якщо текстове поле порожнє, виводимо повідомлення
        // і припиняємо виконання функції.
        if (form.elements.topic.value.trim() === "") {
          alert("Please enter search term!");
          return;
        }
    
        onSearch(topic);

        form.reset();
      }


  return (
    <form onSubmit={handleSubmit} className={css.search}>
      <input type="text" name="topic" placeholder="Пошук статей..." />
      <button >Пошук</button>
    </form>
  )
}

export default Search