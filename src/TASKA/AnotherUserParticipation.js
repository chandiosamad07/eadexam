import React from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function AnotherUserParticipation(props) {
  return (
    <>
    <button type='submit' >
    <Link to='user'>
    {props.submit}</Link></button>
    </>
  )
}

export default AnotherUserParticipation
