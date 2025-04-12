import React, { useState, useEffect } from 'react'
import { ImagesSliderDemo } from '../../UI/ImagesSliderDemo'
import { InfiniteMovingCardsDemo } from '../../UI/InfiniteMovingCardsDemo'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate checking if ImagesSliderDemo is ready
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Adjust timing as needed
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center h-64 w-full">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          <p className="ml-3 text-lg text-gray-700">Loading slider...</p>
        </div>
      ) : (
        <ImagesSliderDemo />
      )}
      <InfiniteMovingCardsDemo />
    </div>
  )
}

export default Home