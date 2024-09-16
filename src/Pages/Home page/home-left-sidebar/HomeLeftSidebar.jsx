import React from "react";
import "./home-left-sidebar.css";
import leftbarProPic from "../home assests/ronaldo-pro-pic.webp";

function HomeLeftSidebar() {
  const [showMore,setShowMore] = React.useState(false)
  return (
    <div className="home_left_sidebar">
      
      <div className="top_section">
      <div className="left_name">
        <img src={leftbarProPic} alt="" />
        <p>Christiano Ronaldo</p>
      </div>
      <div>
      <i class="fa-solid fa-user-group"></i>
        <p>Friends</p>
      </div>
      <div>
        <i class="fa fa-users" aria-hidden="true"></i>
        
        <p>Groups</p>
      </div>
      <div>
      <i class="fa-solid fa-store"></i>
      <p>Marketplace</p>
      </div>
      <div>
      <i class="fa-solid fa-clock-rotate-left"></i>
      <p>Memories</p>
      </div>
      <div>
      <i class="fa-solid fa-tag"></i>
      <p>Saved</p>
      </div>
      </div>
      {showMore && <div className="bottom_section">
        <div>
      <i class="fa-solid fa-chart-simple"></i>
      <p>Ads Manager</p>
      </div>
      <div>
      <i class="fa-solid fa-cloud-sun-rain"></i>
      <p>Climate science centre</p>
      </div>
      <div>
      <i class="fa-solid fa-calendar-check"></i>
      <p>Events</p>
      </div>
      <div>
      <i class="fa-solid fa-table"></i>
      <p>Feeds</p>
      </div>
      <div>
      <i class="fa-solid fa-kit-medical"></i>
      <p>Fundraises</p>
      </div>
      <div>
      <i class="fa-solid fa-dice-d6"></i>
      <p>Gaming video</p>
      </div>
      <div>
      <i class="fa-brands fa-facebook-messenger"></i>
      <p>Messenger</p>
      </div>
      <div>
      <i class="fa-brands fa-signal-messenger"></i>
      <p>Messenger kids</p>
      </div>
      <div>
      <i class="fa-brands fa-cc-mastercard"></i>
      <p>Orders and payments</p>
      </div>
      <div>
      <i class="fa-solid fa-flag"></i>
      <p>Pages</p>
      </div>
      <div>
      <i class="fa-solid fa-gamepad"></i>
      <p>Gaming</p>
      </div>
      <div>
      <i class="fa-solid fa-chart-line"></i>
      <p>Recent activity</p>
      </div>
      <div>
      <i class="fa-solid fa-chart-line"></i>
      <p>Reels</p>
      </div>
      <div>
      <i class="fa-solid fa-tv"></i>
      <p>Video</p>
      </div>
        </div>}
      
        {!showMore && <div onClick={()=>setShowMore(true)} className="left_sidebar_seemore">
      <i class="fa-solid fa-angle-down"></i>
      <p>See more</p>
      </div>}


      {showMore && <div onClick={()=>setShowMore(false)} className="left_sidebar_seemore">
      <i class="fa-solid fa-angle-up"></i>
      <p>See less</p>
      </div>}
    </div>
  );
}

export default HomeLeftSidebar;
