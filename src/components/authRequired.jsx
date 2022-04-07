
import React , {useState , useEffect} from "react"
import {useNavigate , Navigate} from "react-router-dom"
import {useAuthMe} from '../contexts/authContext'
export default function AuthRequired({children}) {

    const {userObject} = useAuthMe()

    if(!userObject)
    {
        
        return <Navigate state={{path : window.location.pathname}} to={'/auth'} />
    }
  return (
    <>
        {
            children
        }
    </>
  )
}
