import React from 'react'

const UserCard = (props) => {
    
  return (
    <div className='usercard'>
        <img className='user-img' src = {props.data.picture.medium} alt='no profile found' />
        <h3>{props.data.name.first}</h3>
        <p>{props.data.phone}</p>
        <p>{props.data.location.city}</p>
        

    </div>
  )
}

export default UserCard;