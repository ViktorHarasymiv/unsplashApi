import React from 'react'

import './swiper.css';

function SlideButtons({onSearch, value}) {

    const navigationSearch = () => {
        onSearch(value)
    }

  return (
    <li className="slide_item"><button onClick={navigationSearch} className="change_input">{value}</button></li>
  )
}

export default SlideButtons