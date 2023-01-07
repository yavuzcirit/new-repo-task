import React from 'react'
import { ReactComponent as NotFoundedImage } from '../../assets/notFounded.svg'
import './style.scss'

const NotFound = () => {
  return (
    <div className='frame'>
        <div className='image-state'><NotFoundedImage/></div>
        <div className="message">There is no board to show</div>
    </div>
  )
}

export default NotFound