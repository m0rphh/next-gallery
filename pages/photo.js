import React from 'react'
import Photo from '../components/frame'

export default ({ url: { query: { id } } }) => (
  <div className='permalink'>
    <div className='wrap'>
        <Photo id={id} />
    </div>
    <style jsx>{`

    `}</style>
  </div>
)
