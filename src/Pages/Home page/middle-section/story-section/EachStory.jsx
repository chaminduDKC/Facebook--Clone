import React from 'react'
import './story.css'


function EachStory({eachData}) {

    return(
        <div className='story'>
            <img src={eachData.url} alt="image" />
            <p>{eachData.name}</p>
        </div>
    )
  
}

export default EachStory
