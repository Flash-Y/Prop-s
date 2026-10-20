import React from 'react'
import {Bookmark} from 'lucide-react'
import Card from './components/card'
import Array from './components/Array'

const App = () => {

  
const jobs = [
  {
    brandLogo: "https://www.google.com/favicon.ico",
    companyName: "Google",
    datePosted: "2 days ago",
    location: "Mumbai, India",
    pay: "$18/hr",
    post: "UI/UX Designer",
    tag1: "Full-time",
    tag2: "Junior Level",
  },
  {
    brandLogo: "https://www.microsoft.com/favicon.ico",
    companyName: "Microsoft",
    datePosted: "3 days ago",
    location: "Mumbai, India",
    pay: "$35/hr",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
  },
  {
    brandLogo: "https://www.adobe.com/favicon.ico",
    companyName: "Adobe",
    datePosted: "1 day ago",
    location: "Mumbai, India",
    pay: "$22/hr",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
  },
  {
    brandLogo: "https://www.figma.com/favicon.ico",
    companyName: "Figma",
    datePosted: "5 days ago",
    location: "Mumbai, India",
    pay: "$25/hr",
    post: "Product Designer",
    tag1: "Part-time",
    tag2: "Mid Level",
  },
  {
    brandLogo: "https://www.atlassian.com/favicon.ico",
    companyName: "Atlassian",
    datePosted: "4 days ago",
    location: "Mumbai, India",
    pay: "$28/hr",
    post: "React Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
  },
  {
    brandLogo: "https://www.amazon.com/favicon.ico",
    companyName: "Amazon",
    datePosted: "6 days ago",
    location: "Mumbai, India",
    pay: "$32/hr",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
  },
  {
    brandLogo: "https://www.nvidia.com/favicon.ico",
    companyName: "NVIDIA",
    datePosted: "Today",
    location: "Mumbai, India",
    pay: "$40/hr",
    post: "AI/ML Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
  },
  {
    brandLogo: "https://www.spotify.com/favicon.ico",
    companyName: "Spotify",
    datePosted: "2 days ago",
    location: "Mumbai, India",
    pay: "$20/hr",
    post: "Motion Graphics Designer",
    tag1: "Part-time",
    tag2: "Junior Level",
  },
  {
    brandLogo: "https://www.salesforce.com/favicon.ico",
    companyName: "Salesforce",
    datePosted: "3 days ago",
    location: "Mumbai, India",
    pay: "$26/hr",
    post: "Data Analyst",
    tag1: "Full-time",
    tag2: "Mid Level",
  },
  {
    brandLogo: "https://www.netflix.com/favicon.ico",
    companyName: "Netflix",
    datePosted: "1 week ago",
    location: "Mumbai, India",
    pay: "$24/hr",
    post: "Video Editor",
    tag1: "Part-time",
    tag2: "Junior Level",
  },
];

  return (
      <div className="parent">

        {jobs.map(function(prop){

          return <Card />
        })}

      </div>
      
  )
}

export default App
