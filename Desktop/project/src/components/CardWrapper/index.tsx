import Card from '../Card'
import './style.scss'
import randomColor from "randomcolor"
interface CardWrapperProps {
    data?: any
    header?: string
  }

const CardWrapper: React.FC<CardWrapperProps>  = ({data, header}) => {
  //console.log("CarWrapper",data)

const color = randomColor();

  return (
    <div className='card-wrapper' style={{borderTop:`4px solid ${color}`}}>
        <div className='card-header-year'>{header  ? header : ""}</div>
        {data && data?.map((item: any,index: any) => <Card data={item} key={index}/>)}
        <div className='elements'></div>
    </div>
  )
}

export default CardWrapper