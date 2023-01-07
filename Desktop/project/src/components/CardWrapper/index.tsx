import Card from '../Card'
import './style.scss'

interface CardWrapperProps {
    data?: any
    header?: string
  }

const CardWrapper: React.FC<CardWrapperProps>  = ({data, header}) => {
  console.log("CarWrapper",data)
  return (
    <div className='card-wrapper'>
        <div className='card-header-year'>{header}</div>
        {data && data?.map((item: any,index: any) => <Card data={item} key={index}/>)}
        <div className='elements'></div>
    </div>
  )
}

export default CardWrapper