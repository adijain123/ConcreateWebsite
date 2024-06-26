import React from 'react'
import { ThreeDCardDemo } from '../../UI/ThreeDCardDemo'

const images = [
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1434394354979-a235cd36269d?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // Add more image URLs as needed
]

const TeamMembers = () => {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {images.map((image, index) => (
        <ThreeDCardDemo key={index} image={image}></ThreeDCardDemo>
      ))}
    </div>
    </>
  )
}

export default TeamMembers
