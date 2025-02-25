import React from 'react'

import css from "./Style.module.css";

function ArticleList({items}) {
  return (
    <ul className={css.article}>
        {items.map(({ objectID, url, title }) => (
          <li key={objectID}>
            <a href={url} target='_blank' rel='noreferrer noopener'>
              {title}
            </a>
          </li>
        ))}
    </ul>
  )
}

export default ArticleList