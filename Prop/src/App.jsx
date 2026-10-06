import React from 'react'
import {Bookmark} from 'lucide-react'
const App = () => {
  return (
      <div className="parent">

        <div className="card">
          <div className="top">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0LqqItjj6kjPy2bhfx_Cs3kIqIEesiN8aMbEXoL-zw&s" alt="" />
            <button>SAVE <Bookmark /> </button>
          </div>
          <div className="center">
              <h3>Google <span>30 days ago</span></h3>
              <h2>Senior UI/UX designer</h2>
              <div>
                <h4>Full-Time</h4>
                <h4>Snenior Level</h4>
              </div>
          </div>
          <div className="buttom">
              <div>
                <h3>$230/hr</h3>
                <p>Kathmandu, Nepal</p>
              </div>
              <button>Apply now</button>
          </div>
        </div>

      </div>
      
  )
}

export default App
