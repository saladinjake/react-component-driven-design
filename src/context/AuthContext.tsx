import React from "react"

export const AuthContext = React.createContext(null)


export const useAuth = () =>{
    return {
        userProfile: {
            username:"",
            picture:"",
            email:"",
            token:"",
            auditData:{

            }
        },
        googleProfile:{
            picture:"",
            name:"",
            email:"",
            
        },
        
    }
}
export const AuthProvider = ( {children }) =>{

    return (
    <AuthContext.Provider value={"hello"}> 
       {children}
    </AuthContext.Provider>
    )
}
