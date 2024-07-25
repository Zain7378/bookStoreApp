import React, { createContext, useContext, useState } from 'react'

export const authContext = createContext();
export default function AuthProvider({children}) {
    const initalAuthUser = localStorage.getItem('users');
    const [authUser , setInitalAuth] = useState(
        initalAuthUser?JSON.parse(initalAuthUser):undefined
    )

  return (
    <>
    <authContext.Provider value={[authUser , setInitalAuth]}>
        {children}
    </authContext.Provider>
    </>
  )
}
export const useAuth = ()=> useContext(authContext);