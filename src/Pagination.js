import React, { useState } from 'react'

function Pagination(props) {

    const {setSkip, limit} = props;

    const [number, setNumber] = useState(2);
    console.log("number", number);

    const handleClick = (e) => {
        
        var num = Number(e.target.value);
        setNumber(num);
        // console.log("type" , typeof(num));
        setSkip((e.target.value - 1) * limit);
        
    }

    

  return (
    <div id="pagination">
    <button onClick={handleClick} value={1}>First</button>
    <button onClick={handleClick} value={number}>{number}</button>
    <button onClick={handleClick} value={number+1}>{number+1}</button>
    <button onClick={handleClick} value={number+2}>{number+2}</button>
    <button onClick={handleClick} value={12}>Last</button>
    
    </div>
  )
}

export default Pagination