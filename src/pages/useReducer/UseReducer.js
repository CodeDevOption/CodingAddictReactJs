import React, { useReducer } from 'react'
const initialState = {
    user:null,
}
const reducer = (state,action) =>{
    switch (action.type) {
        case 'user':
            return {...state,user:action.user}
        default :
        return state;
    }
}
const UseReducer = () => {


    const [state,dispatch] = useReducer(reducer,initialState);
        console.log(state);
    const  handleClick = () =>{
    dispatch({
        type:'user',
        user:'Lahiru',
    });

}
    return (
    <div>UseReducer
        <button onClick={handleClick}>Setuser</button>
    </div>
  )
}

export default UseReducer