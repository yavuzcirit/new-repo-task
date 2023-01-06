import React, { useEffect, useState } from "react";
import axios from "axios";
import './style.scss'

const Main = () => {
  const [datas, setDatas] = useState([]);

  const getData = async (id: string) => {
    const  data  = await axios.get(`http://openlibrary.org/search.json?author=OL${id}`);
    const {docs} = data?.data
    //console.log(docs.sort((a:any)=>a.first_publish_year));
    const result = docs?.reduce(function (r: { [x: string]: any[]; }, a: { first_publish_year: string | number; }) {
      r[a.first_publish_year] = r[a.first_publish_year] || [];
      r[a.first_publish_year].push(a);
      return r;
  }, Object.create(null));
  console.log("**************",result)
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