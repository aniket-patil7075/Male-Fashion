import { useState,useEffect } from "react";
import { useAuth } from "../context/auth";
import { Outlet } from "react-router-dom";
export default function AdminRoute()
{
    const [ok,setOk]=useState(false)
    const [auth,setAuth]=useAuth()
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    useEffect(()=>{
        const authCheck=()=>{
            fetch("https://male-fashion-pi.vercel.app/api/auth/adminauth",{
                headers:{
                    "authorization":auth?.token
                }
            }).then((res)=>{
                res.json().then((res1)=>{
                    console.log(res1)
                    if(res.ok)
                        {
                            setOk(true)
                        }
                        else
                        {
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