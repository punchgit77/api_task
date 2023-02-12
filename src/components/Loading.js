import React from 'react'
import { SpinnerCircular } from 'spinners-react';


const Loading = ({isloading}) => {
  return (
    <div>
        <SpinnerCircular enabled={isloading} />

    </div>
  )
}

export default Loading