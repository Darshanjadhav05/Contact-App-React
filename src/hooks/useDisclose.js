import React, { useState } from 'react'

const useDisclose = () => {
  
    const [isopen, setisopen] = useState(false);


    const onOpen = ()=>{
      setisopen(true)
    }
  
    const onClose = ()=>{
      setisopen(false)
    }

    return {onClose,isopen,onOpen}
}
 

export default useDisclose;