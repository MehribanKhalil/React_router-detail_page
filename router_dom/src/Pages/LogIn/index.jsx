import React from 'react'
import { useNavigate } from 'react-router'
import Button from '../../components/Button'

const LogIn = () => {
    const navigate=useNavigate()

    const handleClick =()=>{
        navigate('/');
    }
  return (
    <div>
      login Page
      <button onClick={handleClick}>go to home page</button>
    </div>
  )
}

export default LogIn
