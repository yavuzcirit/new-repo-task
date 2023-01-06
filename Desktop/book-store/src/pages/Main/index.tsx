import React, { useEffect, useState } from "react";
import axios from "axios";
import './style.scss'

const Main = () => {
  const [datas, setDatas] = useState([]);

  const getData = async (id: string) => {
    const  data  = await axios.get(`http://openlibrary.org/search.json?author=OL${id}`);
    console.log(data);
  };

  useEffect(() => {
   try{ 
    getData("26320A")
  }
   catch(err){
    console.log(err)
   }
  }, []);
  return (
    <div className='main-page'>Main</div>
  )
}

export default Main