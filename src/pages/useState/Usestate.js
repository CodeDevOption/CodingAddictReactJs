import React, { useEffect } from 'react';
import { useState } from 'react';

const Usestate = () => {
  const [name, setName] = useState('');
  const [animals,setAnimals] = useState({});
  const [fruits,setFruits] = useState(["Apple"]);


  useEffect(() =>{
       setName("lahiru");
    // setAnimals((a) => {
    //  return {...a,age:2}
    // })
    setAnimals((a) => { return {...a,age:2}})
    setFruits([...fruits,"babanas"]);
  },[])

  return (    
    <div>
      {name}
      <br />
      {
      animals.name
      }
      {
        animals.age
      }
      {
        fruits.map((fruits)=>(
          <li>{fruits}</li>
        ))
      }
    </div>
  )
}

export default Usestate