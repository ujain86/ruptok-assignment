import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import ListContainer from './ListContainer';
import Pagination from './Pagination';

function App() {

  const [data, setData] = useState("");
  const limit = 7;
  const [skip, setSkip] = useState(0);

  useEffect(()=>  {
    const API = async () => {
      const url = "https://dummyjson.com/users?limit=" + limit + "&skip=" + skip + "&select=image,firstName,lastName,email,address,phone";
      const data = await fetch(url);
      const parsedData = await data.json();
      setData(parsedData);
    }
    
    API();

  },[skip]);

  return (
    <div id='container'>
      <div id='left-div'></div>
      <div id='right-div'>
        <Navbar />
        <ListContainer data={data} />
        <Pagination setSkip={setSkip} limit={limit} />
      </div>
      
    </div>
  )
}

export default App