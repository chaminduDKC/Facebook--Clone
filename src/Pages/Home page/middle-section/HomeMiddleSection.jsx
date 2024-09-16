import React from 'react'
import './home-middle-section.css'
import StorySection from './story-section/Story'
import Story from './story-section/Story'
import WhatsOnYourMind from './whats on your mind/WhatsOnYourMind'

function MiddleSection() {
  return (
    <div className='main_container'>
    <div className='story_div'>
      <Story/>
    </div>
    <div className="whats_on_your_mind_div">
    <WhatsOnYourMind/>
    </div>
    </div>
  )
}

export default MiddleSection
