import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {createPortal} from "react-dom"


const Modal = ({onClose,isOpen,children}) => {
  return createPortal(
    <>
    {isOpen &&(
        <div className='grid place-item-center absolute top-0 z-40  h-screen w-screen backdrop-blur'>
        <div className='relative z-50 min-h-[200px] min-w-[50%] bg-white m-auto '>
        <div className='flex justify-end'>
            <AiOutlineClose onClick={onClose} className='self-end text-2xl' />
        </div>
          {children}
    </div>
        </div>
      )}
    </>,
  document.getElementById("modal-root"));
};

export default Modal
