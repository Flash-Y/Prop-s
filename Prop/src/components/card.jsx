import React from 'react'
import {Bookmark} from 'lucide-react'

const card = (props) => {
  return (
    <div className="card">
      <div>

          <div className="top">
            <img src={props.img} alt="" />
            <button>SAVE <Bookmark /> </button>
          </div>
          
          <div className="center">
              <h3>{props.company} <span>30 days ago</span></h3>
              <h2>{props.role}</h2>

              <div>
                <h4>Full-Time</h4>
                <h4>Snenior Level</h4>
              </div>
          </div>

          <div className="buttom">
              <div>
                <h3>{props.salary}</h3>
                <p>Kathmandu, Nepal</p>
              </div>
              <button>Apply now</button>
          </div>

        </div>
    </div>
  )
}

export default card
