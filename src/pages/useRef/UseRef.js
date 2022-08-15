import React, { useRef } from 'react'

const UseRef = () => {
    const Useref = useRef(null);
    const handleClick = ()=>{
        console.log(Useref.current.style)
    }
  return (
    <div>

        <input className='list' type="text" ref={Useref} />
        <button onClick={handleClick}>Click</button>

    </div>
  )
}

export default UseRef