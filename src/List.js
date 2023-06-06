import React from 'react'

function List(props) {

    const{data} = props;

  return (
    <div className='list-item'>
       <img className="user-img" src={data.image}></img>
        <p className="name">{data.firstName + " " + data.lastName}</p>
        <p className='email'>{data.email} </p>
        <p className='phone'>{data.phone} </p>
        <p className='address'>{data.address.address + ", " + data.address.city} </p>
    </div>
  )
}

export default List