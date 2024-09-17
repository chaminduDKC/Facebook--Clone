import React from 'react'
import PageProPhoto from '../home assests/ronaldo-pro-pic.webp'
import './home-right-sidebar.css'
import requestProPic from '../middle-section/story-section/story assests/friend-5.jpg'
import mutualPic1 from '../middle-section/story-section/story assests/friend-10.jpg'
import mutualPic2 from '../middle-section/story-section/story assests/friend-9.jpg'
import EachFriendRequest from './eachFriendRequest'
import friendRequest from './friendRequests'
import FriendList from '../../Friends'

function HomeRightSidebar() {
  const [seeAllFriends,setSeeAllFriends] = React.useState(false);

  const handleSeeAll =()=>{
    setSeeAllFriends(true)
  }

  const handleHide = ()=>{
    setSeeAllFriends(false)
  }
  return (
    <div className='home_right_sidebar'>
      <div className="right_bar_pages">
      <div className="your_pages">
        <p>Your Pages and profiles</p>
        <button>...</button>
        
      </div>
      <div className="page_name">
        <img src={PageProPhoto} alt="" />
        <p>World Champions</p>
      </div>
      <div className="page_options">
        <div className="switch_page">
          <img src="" alt="" />
          <p>Switch to page</p>
        </div>
        <div className="create_promotion">
          <img src="" alt="" />
          <p>Create promotion</p>
        </div>
      </div>
      </div>


      <div className="requests">
        <div className="title">
          <p>Friend requests</p>
          {seeAllFriends ? <p onClick={()=>{handleHide()}} >Hide</p> : <p onClick={()=>{handleSeeAll()}} >See All</p> }
          
        </div>
        <div className="request">
          <div className="description">
            <img src={requestProPic} alt="loading" />
            <div className="name_mutual">
              <p className="name">Henry Wills</p>
              <div className="mutual">
                <img src={mutualPic1} alt="" />
                <img className='mutual_image' src={mutualPic2} alt="" />
                <p className="mutual_text">50 mutual friends</p>
              </div>
            </div>
            <p className="days">1d</p>

          </div>
          <div className="buttons">
            <button>Confirm</button>
            <button>Delete</button>
          </div>
        </div>
       {friendRequest.map(each=>(
       seeAllFriends ?  <EachFriendRequest eachData = {each}/> : ''
       )) }
       
       
      </div>

      <div className="birthdays">
        <p className="title">Birthdays</p>
        <div>
        <i className="fa-solid fa-gift"></i>
        <p className='text'><b>Henry Wills</b> and <b>3 others </b> have their birthdays today.</p>
        </div>
      </div>

      <div className="right_bar_contacts">
        <div className="contact_title">
          <p>Contacts</p>
          <div className='icon_search'>
          <i class="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
        {FriendList.map(eachFriend =>(
          <div className="contact">
          <div className='img_online'>
          <img src={eachFriend.imgUrl} alt="Profile Photo" />
          <div className='online_circle'></div>
          </div>
          <p className="name">{eachFriend.name}</p>
        </div>
        ))}
      </div>
    </div>
  )
}

export default HomeRightSidebar
