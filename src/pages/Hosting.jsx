import React from 'react'
import { useSEO } from '../hooks/useSEO'

const Hosting = () => {
  useSEO({
    title: 'Web Hosting Africa | Shared, VPS, Cloud & WordPress Hosting | Wefithost Africa',
    description: 'Explore Wefithost Africa\'s hosting solutions: shared hosting, VPS, cloud hosting, and WordPress hosting. Fast, secure and optimized for African businesses.',
    canonical: 'https://africa.wefithost.com/hosting'
  });

  return (
    <div>
      Hosting
    </div>
  )
}

export default Hosting
