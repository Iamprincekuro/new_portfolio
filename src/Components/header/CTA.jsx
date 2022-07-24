import React from 'react'
import cv from '../../assets/cv.pdf'

const CTA = () => {
  return (
    // the download attribute is what makes a file downloadable
    <div className='cta'>
       <a href={cv} download className='btn' >Download CV</a> 
       <a href='#contact' className='btn btn-primary'>Let's have a chat</a>
    </div>
  )
}

export default CTA