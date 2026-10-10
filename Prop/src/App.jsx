import React from 'react'
import {Bookmark} from 'lucide-react'
import Card from './components/card'

const App = () => {
  return (
      <div className="parent">

        <Card company = "Google" salary="$230/hr" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0LqqItjj6kjPy2bhfx_Cs3kIqIEesiN8aMbEXoL-zw&s" role="Senior engineer"/>

        <Card company = "Amazon" salary="$130/hr" img="https://imgs.search.brave.com/-QlnopsS72o8z4m37MBvznkKqNpLr4D87VV3CRwrBjU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzk0LzU0LzA3/LzM2MF9GXzI5NDU0/MDcyMl9WSXdTV3ly/VTZxNzgxU2tIV1Ns/elVEWGpmb3VSbGo0/Ny5qcGc" role="Senior Sales Manager"/>

        <Card company = "Adobe" salary="$190/hr" img="https://coursera-university-assets.s3.amazonaws.com/d9/7ac5ee1c0247dab299ec6a8343f16d/Adobe-A-square.png" role="Senior UI/UX"/>

      </div>
      
  )
}

export default App
