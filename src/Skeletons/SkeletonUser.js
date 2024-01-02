import React from 'react'
import SkeletonElement from './SkeletonElement'
import Shimmer from './Shimmer'

const SkeletonUser = ({theme}) => {
     const themeClass= theme || 'light'
  return (
     <div className={`skeleton-wrapper ${themeClass}`}> 
    <div className='Skeleton-profile'>
     <div>

      <SkeletonElement type='avatar'/>
     </div>
     <div>

      <SkeletonElement type='title'/>
      <SkeletonElement type='text'/>
      <SkeletonElement type='text'/>
     </div>

    </div>
    <Shimmer/>
    </div>
  )
}

export default SkeletonUser
