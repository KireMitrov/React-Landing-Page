import React from 'react'
import "./subscribe.css"

const Subscribe = () => {


  return (
    <div className='subscribe-main'>
        <h2 className='subscribe-text'>Subscribe to get information, latest news and other
        interesting offers</h2>
        <div>
            <input type="email" name="email" id="email" placeholder='Your email' className='subscribe-input' />
            <button type="submit" className='subscribe-btn'>Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe