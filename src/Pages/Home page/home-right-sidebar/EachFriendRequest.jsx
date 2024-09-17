import React from 'react'

function EachFriendRequest({eachData}) {
  return (
    <div>
      <div className="request">
          <div className="description">
            <img src={eachData.imgUrl} alt="loading" />
            <div className="name_mutual">
              <p className="name">{eachData.name}</p>
              <div className="mutual">
                <img src={eachData.mutualImg1} alt="" />
                <img className='mutual_image' src={eachData.mutualImg1} alt="" />
                <p className="mutual_text">{eachData.mutualAmount} mutual friends</p>
              </div>
            </div>
            <p className="days">{eachData.days}d</p>

          </div>
          <div className="buttons">
            <button>Confirm</button>
            <button>Delete</button>
          </div>
        </div>
    </div>
  )
}

export default EachFriendRequest;
