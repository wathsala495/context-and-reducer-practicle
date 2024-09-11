import React,{useContext, useRef} from 'react'
import userActivity from '../Context/UserActivity'
import { userData } from '../Context/UserAuth'

const UserInput = () => {
    
    //const { image,name,city,position,setImage,setName,setCity,setPosition }=useContext(userActivity)
    const {userDetails}=useContext(userData)
    const { image,name,city,position,setImage,setName,setCity,setPosition}=useContext(userActivity)
    
    
    
    const imageRef=useRef()
    const nameref=useRef()
    const cityRef=useRef()
    const positionRef=useRef()

  return (
    <div>
       input
    </div>
  )
}

export default UserInput
