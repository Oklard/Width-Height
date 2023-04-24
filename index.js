import React, { useEffect, useState } from "react";

// interface Item {
//   id : Number
// }

export default function App(){
  const [windowWidth, setwindowWidth] = useState(window.innerWidth)
  const [windowHeight, setwindowHeight] = useState(window.innerHeight)
  const handleResize = () => {
    setwindowWidth(window.innerWidth)
    setwindowHeight(window.innerHeight)
  }
  useEffect(()=>{
    window.addEventListener('resize', handleResize)

    //PARA NAO LAGAR A APLICAÇÂO
    return()=> {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  return(
    <div>
      <h1>Sua resolução da página é :</h1>
      {windowWidth}
         X   
      {windowHeight}
    </div>
  )
}
