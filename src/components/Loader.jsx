import React from 'react'
import ContentLoader from 'react-content-loader'

function Loader() {
  return (
    <ContentLoader
      speed={4}
      width={290}
      height={448}
      viewBox='0 0 290 448'
      backgroundColor='#f2f2f2'
      foregroundColor='#d9d9d9'
    >
      <rect x='15' y='275' rx='10' ry='10' width='260' height='35' />
      <rect x='15' y='405' rx='10' ry='10' width='100' height='35' />
      <rect x='15' y='320' rx='10' ry='10' width='260' height='77' />
      <circle cx='144' cy='133' r='120' />
      <rect x='145' y='405' rx='10' ry='10' width='130' height='35' />
    </ContentLoader>
  )
}

export default Loader
