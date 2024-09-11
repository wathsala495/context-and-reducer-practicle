import React, { useContext, useRef } from 'react'
import { userData } from '../Context/UserAuth'
import {submitHandle} from '../Utils/authValidate'

export default function Login() {

 const {userDetails,setUserDetails}=useContext(userData)
 const usernameRef = useRef()
 const passwordRef=useRef()

 
  return (
    <div>
      {userDetails.userId?(<p>your are logged in your name is:{userDetails.name}</p>):<>
      
        <span>Username:</span>
      <input type="text" placeholder='Your username' ref={usernameRef} />
      <br/>
      <span>Password:</span>
      <input type="password" placeholder='ypur password' ref={passwordRef}/>
      <button onClick={()=>submitHandle(usernameRef,passwordRef,setUserDetails)}>Submit</button>
      
      </>}
     
    </div>
  )
}
