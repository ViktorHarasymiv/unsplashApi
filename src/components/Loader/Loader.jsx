import React from 'react'

import PropagateLoader  from "react-spinners/PropagateLoader";

function Loader({loading}) {
  return (
    <PropagateLoader
        style={{position: "fixed", top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: '99992'}}
        color={`#000`}
        loading={loading}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
    />
  )
}

export default Loader