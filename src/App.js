import React, { createContext } from 'react'
import { Usestate,Variable,UseRef,UseReducer} from './pages'



export const statecontext = React.createContext();
const App = () => {

  return (
    <div>
      <statecontext.Provider value="hellow">

      
        <Variable />
        {/* <Usestate /> */}
        <UseRef />
        <UseReducer />
        </statecontext.Provider>
    </div>
  )
  }
  
export default App

