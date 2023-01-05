import { CSSProperties } from 'react'
import '/style.scss'

interface CardWrapperProps {
    header: string
    borderColor?: CSSProperties | undefined | any
    children: any
  }

const CardWrapper: React.FC<CardWrapperProps>  = ({header,borderColor,children}) => {
  return (
    <div className='card-wrapper' style={borderColor && {borderTop:`4px solid ${borderColor}`}}>
        <div className='card-header-year'>{header}</div>
        <div className='elements'>{children}</div>
    </div>
  )
}

export default CardWrapper