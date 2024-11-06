import { createContext, useContext, useEffect, useState } from "react";

// heartlist.js
const HeartContext=createContext();
const HeartProvider=({children})=>{
    const [heart,setHeart]=useState([])
    useEffect(()=>{
        let existingheartitem=localStorage.getItem('heart')
        if(existingheartitem) setHeart(JSON.parse(existingheartitem))
    },[])
    return(
        <HeartContext.Provider value={[heart,useHeart]}>
            {children}
        </HeartContext.Provider>
    )

}
const useHeart=()=>useContext(HeartContext)
export {useHeart,HeartProvider}