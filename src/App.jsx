import React, { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import { FiSearch  } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import {collection, getDocs, onSnapshot} from "firebase/firestore";
import {db} from './config/firebase';
import ContactCard from './components/ContactCard';
import Modal from './components/Modal';
import AddAndUpdateContact from './components/AddAndUpdateContact';
import useDisclose from './hooks/useDisclose';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from './components/NotFoundContact';

const App = () => {
  const [contacts, setcontacts] = useState([]);
  const {onClose,isopen,onOpen} = useDisclose();





  useEffect(() => {
    const getContacts = async ()=>{
      try {
        const contanctsRef = collection(db,"contacts");
        
        onSnapshot(contanctsRef,(snapshot)=>{
          const contactLists = snapshot.docs.map((doc)=>{
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          

          setcontacts(contactLists)
          return contactLists
        })



        
      } catch (error) {
        console.log(error)
        
      }
    };

    getContacts();
  
  }, [])
  

  const filterContact = (e)=>{
    const searchCont = e.target.value;
    const contanctsRef = collection(db,"contacts");
        
        onSnapshot(contanctsRef,(snapshot)=>{
          const contactLists = snapshot.docs.map((doc)=>{
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          


          const filteredContact = contactLists.filter(contact => contact.name.toLowerCase().includes(searchCont.toLowerCase()))
          setcontacts(filteredContact)
          return filteredContact
        })


  }



  return (
    <>
    <div className='mx-auto max-w-[370px] px-4'>
      <Navbar />
      <div className='flex relative items-center'>
      <FiSearch  className='ml-1 text-white text-xl absolute '/>
        <input type="text" onChange={filterContact} className=' h-10 flex-grow rounded-md border border-white bg-transparent text-white pl-9' />
      
      <FaPlusCircle onClick={onOpen} className='cursor-pointer ml-4 text-4xl gap-2 text-white' />
    
      </div>
      <div className='mt-4'>
        {contacts.length<=0 ? <NotFoundContact/>: contacts.map((contact)=>(
          <ContactCard key={contact.id} contact={contact}/>
        ))}
      </div>
    </div>
      <AddAndUpdateContact isOpen = {isopen} onClose = {onClose} />
      <ToastContainer  position='bottom-center'/>
    </>
    
  )
}

export default App
