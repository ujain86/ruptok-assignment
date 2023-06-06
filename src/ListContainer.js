import React from 'react'
import List from './List'

function Lists(props) {

  const {data} = props;

  return (
    <div id='list-container'>
      <div id='tab'>
        <p>Customer List</p>
        <button>Add Customer</button>
      </div>
      <div id='headings'>
        <p></p>
        <p>NAME</p>
        <p>EMAIL</p>
        <p>PHONE</p>
        <p>ADDRESS</p>
      </div>
      {data?.users?.map((item, index) =>  {
          return <List data={item} key={index}/>
      })}

    </div>
  )
}

export default Lists