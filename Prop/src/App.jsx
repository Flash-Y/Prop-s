import React from 'react'
import {Bookmark} from 'lucide-react'
import Card from './components/card'
// import Array from './components/Array'

const App = () => {

  

const jobs = [
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    companyName: "Google",
    datePosted: "2 days ago",
    location: "Mumbai, India",
    pay: "$18/hr",
    post: "UI/UX Designer",
    tag1: "Full-time",
    tag2: "Junior Level",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    companyName: "Microsoft",
    datePosted: "3 days ago",
    location: "Mumbai, India",
    pay: "$35/hr",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    companyName: "Adobe",
    datePosted: "1 day ago",
    location: "Mumbai, India",
    pay: "$22/hr",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=figma.com&sz=128",
    companyName: "Figma",
    datePosted: "5 days ago",
    location: "Mumbai, India",
    pay: "$25/hr",
    post: "Product Designer",
    tag1: "Part-time",
    tag2: "Mid Level",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=atlassian.com&sz=128",
    companyName: "Atlassian",
    datePosted: "4 days ago",
    location: "Mumbai, India",
    pay: "$28/hr",
    post: "React Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    companyName: "Amazon",
    datePosted: "6 days ago",
    location: "Mumbai, India",
    pay: "$32/hr",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
    companyName: "NVIDIA",
    datePosted: "Today",
    location: "Mumbai, India",
    pay: "$40/hr",
    post: "AI/ML Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=spotify.com&sz=128",
    companyName: "Spotify",
    datePosted: "2 days ago",
    location: "Mumbai, India",
    pay: "$20/hr",
    post: "Motion Graphics Designer",
    tag1: "Part-time",
    tag2: "Junior Level",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=salesforce.com&sz=128",
    companyName: "Salesforce",
    datePosted: "3 days ago",
    location: "Mumbai, India",
    pay: "$26/hr",
    post: "Data Analyst",
    tag1: "Full-time",
    tag2: "Mid Level",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
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

        {jobs.map(function(com,idx){  //idx is index which provides a key 

          return <div key={idx}>
            <Card company={com.companyName} post={com.post} date={com.datePosted} img={com.brandLogo} pays={com.pay} tag1={com.tag1} tag2={com.tag2} loct={com.location} />
          </div>
        })}

      </div>
      
  )
}

export default App
