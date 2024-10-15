import React from 'react'
import { useAuth } from '../context/auth'

function Home() {
  const [auth,setAuth] = useAuth();
  return (
    <div>{JSON.stringify(auth)}</div>
  )
}

export default Home