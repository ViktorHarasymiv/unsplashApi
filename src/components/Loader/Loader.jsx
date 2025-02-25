import React from 'react'

import BeatLoader  from "react-spinners/BeatLoader";

function Loader({loading}) {
  return (
    <BeatLoader
        style={
         {position: "absolute", top: '50%'}
        }
        color={`#fff`}
        loading={loading}
        size={8}
        aria-label="Loading Spinner"
        data-testid="loader"
    />
  )
}

export default Loader