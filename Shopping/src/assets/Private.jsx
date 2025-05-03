import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../context/auth'

export default function PrivateRoute() 
{
    const [ok,setOk]=useState(false)
    const [auth,setAuth]=useAuth()
    useEffect(()=>{
        const authCheck=()=>{
            fetch("http://localhost:4300/api/auth/userauth",{
                headers:{
                    "authorization":auth?.token
                }
            }).then((resp)=>{
                resp.json().then((resp1)=>{
                    console.log(resp1)
                    if(resp.ok){
                        setOk(true)
                    }
                    else{
                        setOk(false)
                    }
                })
            })
            
        }
        if(auth?.token)
            
                authCheck()
            
    },[auth?.token])
   
  return ok?<Outlet/>:null
}