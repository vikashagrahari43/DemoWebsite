import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
    const {user} = useParams()
  return (
    <div className='bg-zinc-700 text-white p-5 '>User : {user}</div>
  )
}

export default User