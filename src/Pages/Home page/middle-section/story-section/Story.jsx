import React from 'react'
import './story.css'
import storyData from './storyData'
import StoryProfilePhoto from '../../home assests/ronaldo-pro-pic.webp'
import EachStory from './EachStory'

function Story() {
  return (
    <div className='story-container'>
      <button className='prev-btn'>Previous</button>
    <div className='story-section'>
      
      <div className="add-to-story">
        <img src={StoryProfilePhoto} alt="" />
        <i className="fa-solid fa-circle-plus"></i>
        <p>Add to story</p>
      </div>
      {storyData.map(eachData=>{
        return(
          <EachStory eachData={eachData}/>
        )
      })}
      

    </div>
    <button className='next-btn'>Next</button>
    </div>
  )
}

export default Story
