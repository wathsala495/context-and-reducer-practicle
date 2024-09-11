import React, { createContext, useContext, useState } from 'react'

export const userData=createContext({})

export default function UserAuth({children}) {
    const [userDetails,setUserDetails]=useState({
        name:"",
        password:"",
        userId:"",
    })
  return (
    <userData.Provider value={{userDetails,setUserDetails}}>
      {children}
    </userData.Provider>
  )
}
