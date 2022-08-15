import React, { useContext } from 'react'
import { statecontext } from '../../App';

const Variable = () => {
  const data = useContext(statecontext);
  console.log(data);
  return (
    <div>Variable</div>

  )
}

export default Variable