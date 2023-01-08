import { useEffect, useState } from "react";
import axios from "axios";
import './style.scss'
import CardWrapper from "../../components/CardWrapper";
import { ReactComponent as Loading } from '../../assets/loading.svg'
import NotFound from "../../components/NotFound";

const Main = () => {
  const [datas, setDatas] = useState<any>([]);
  const [items, setItems] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false)
  const [searchValue, setSearchValue ] = useState<string>("")

  const getData = async (id: string) => {
    setLoading(true)
    const  data  = await axios.get(`http://openlibrary.org/search.json?author=${id}`);
    const {docs} = data?.data
    //console.log(docs.sort((a:any)=>a.first_publish_year));
    const result = docs?.reduce(function (r: { [x: string]: any[]; }, a: { first_publish_year: string | number; }) {
      r[a.first_publish_year] = r[a.first_publish_year] || [];
      r[a.first_publish_year].push(a);
      return r;
  }, Object.create(null));
  console.log("**************", (Object.keys(result)))
  setItems(result)
  setDatas(Object.keys(result))
  Object.keys(result)?.length>0 && setLoading(false)
  };

  const getDetails = () => {
   try{ 
    getData(searchValue)
  }
   catch(err){
    console.log(err)
   }
  }
  return (
    <>
   <div className='main'>
     <div className="main-top">
     <div className="main-header">Lorem Board</div>
      <p className="main-input-label">books of</p>
      <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="main-input" type="text" />
      <button disabled={searchValue?.length === 0} onClick={()=>{
        setLoading(true)
        getDetails()}} className="main-submit-button">Submit</button>
      {loading && <div className="loading-icon"><Loading /></div>}
     </div>
     {datas?.length>0  ?  <div className="main-page">
        {datas && datas.map((item:any,index:number)=> <CardWrapper header={item} data={items[item]} key={index} />)}
     </div>: <NotFound/>}
    </div> 
    </>
  )
}

export default Main