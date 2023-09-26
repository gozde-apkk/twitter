import React from 'react'
import { useParams } from 'react-router-dom'

const {slug} = useParams


function Profile() {
  return (
    <div>Profile page -{slug} </div>
  )
}

export default Profile