import React from "react"

export const AuthContext = React.createContext(null)

export const AuthProvider = ( {children }) =>{
    return (
    <AuthContext.Provider value={"hello"}> 
       {children}
    </AuthContext.Provider>
    )
}
