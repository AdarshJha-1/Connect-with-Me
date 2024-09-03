import { Card } from './Card'
import './App.css'

function App() {
  const allData = [
    {
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/in/adarsh2005/",
      "logo": "https://imgs.search.brave.com/bDgXzdDkusXSvSnrnflVPp1YIokwifBW_buFfOWkLtQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/Ny9MaW5rZWRpbi1U/cmFuc3BhcmVudC5w/bmc",
      "emoji": "🧑‍💻"
    },
    {
      "platform": "GitHub",
      "url": "https://github.com/AdarshJha-1",
      "logo": "https://imgs.search.brave.com/tImca2VIIdOco6cvCipn5tWDw7_ZjWmGEHqOgzC5_YY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvMjUvMjUyMzEu/cG5n",
      "emoji": "🤖"
    },
    {
      "platform": "Instagram",
      "url": "https://www.instagram.com/adarshjha__1",
      "logo": "https://imgs.search.brave.com/sj2qX7fJgF3QkXKXo_dektzz9u9Itwmyaet5WHBcUGE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1MjEu/cG5n",
      "emoji": "🫣"
    },
    {
      "platform": "Twitter",
      "url": "https://x.com/AdarshJha___",
      "logo": "https://imgs.search.brave.com/QqCCr7WBdAV26DZGWoZsMmQGzOQI3QEXfida6YyTEvE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/Ny9Ud2l0dGVyLnBu/Zw",
      "emoji": "🙄"
    },
  ]

  return (

    <div className="bg-gray-800 w-full min-h-screen text-white p-5 flex flex-col items-center">
      <h1 className='text-3xl sm:text-5xl  mt-5 font-extrabold font-mono'>Connect with Me</h1>
      {allData.map(({url, logo, emoji, platform}) => (
        <Card emoji={emoji} logo={logo} platform={platform} url={url} key={logo}/>
      ))}
    </div>
  )
}

export default App
