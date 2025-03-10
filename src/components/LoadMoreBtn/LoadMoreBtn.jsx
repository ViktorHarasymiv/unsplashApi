import React from 'react'

import css from './Style.module.css'

function LoadMoreBtn({loadMore}) {
  return (
    <button onClick={loadMore} className={css.load_button}>Next</button>
  )
}

export default LoadMoreBtn