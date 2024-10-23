import React from 'react'
import Collections from './Collections'
import Hero from './Hero'
import LatestNews from './LatestNews'

function Blog() {
  return (
    <div>
      <div className='blogDiv'>
        <img src='/breadcrumb-bg.jpg' alt='' />
      </div>
      <LatestNews/>
    </div>
  )
}

export default Blog