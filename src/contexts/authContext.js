import React , {createContext , useContext , useState , useEffect} from "react"


const userContext  = createContext(); 



export default function AuthProvider({children})
{   
    const [userObject, setuserObject] = useState(null)

  
    return <>
        <userContext.Provider value={{userObject , setuserObject}}>
            {
                children
            }
        </userContext.Provider>
    </>
}


export const useAuthMe = ()=>
{
    return useContext(userContext); 
}