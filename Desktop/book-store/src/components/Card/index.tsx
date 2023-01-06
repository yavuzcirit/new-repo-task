import './style.scss'
import { useState } from "react"
import { ReactComponent as ArrowRight } from '../../assets/arrowRight.svg'
import { ReactComponent as ArrowDown } from '../../assets/arrowDown.svg'
import { ReactComponent as Pages } from '../../assets/pages.svg'
import { ReactComponent as Reading } from '../../assets/readingBook.svg'

interface Card {
  data?: any
}
const Card: React.FC<Card> = ({data}) => {
  const [open,setOpen] = useState<boolean>(true)
  const handleOpenCard = () => {
    setOpen(!open)
  }
  console.log("wwwwwwwwww",data)
  return (
<div className='card-container'>
  {open ? ( 
     <div className='card-one'>
      <div className='card-title'>{data?.title}</div>
      <div className='arrow-one' onClick={handleOpenCard}><ArrowRight /></div>
    </div>): (
    <div className='card-two'>
        <div className='title-part'>
            <div className='card-title-two'>{data?.title}</div>
            <div className='arrow-two' onClick={handleOpenCard}><ArrowDown /></div>
         </div>
         <div className='middle-data'>
            <div className='edition-data'>{data?.edition_count} Editions</div>
            <div className='first-published'>First Published: {data?.first_publish_year}</div>
         </div>
         <div className='last-data'>
            <div className='part-one'>
              <div className='page-icon'><Pages/></div>
              <div className='page-number'>{data?.number_of_pages_median} pages</div>
            </div>
            <div className='part-two'>
              <div className='reading-man'><Reading/></div>
              <div className='reading-time'>32 hours reading time</div>
            </div>
         </div>
    </div>
    )}
</div>
    
  )
}

export default Card