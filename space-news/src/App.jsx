import { useEffect, useState } from "react"
import "./App.css"

function App() {
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch("https://api.spaceflightnewsapi.net/v3/articles")
      const data = await res.json()
      setNews(data)
    }
    fetchNews()
  }, [])
  return (
    <div className="flex flex-col items-center bg-slate-900 text-white min-h-screen">
      <span className="text-5xl font-bold mt-8">Space News</span>
      <div className="mt-10 flex flex-col space-y-4 mb-10">
        {news.map((data) => (
          <a
            href={data.url}
            target="blank"
            key={data.id}
            className="bg-slate-950 p-4 mx-4 my-4 rounded-xl flex space-x-4 relative min-h-[300px]"
          >
            <img
              className="w-96 rounded-xl"
              src={data.imageUrl}
              alt={data.title}
            />
            <div className="flex flex-col space-y-2">
              <span className="text-xl font-bold">{data.title}</span>
              <span className="text-sm">{data.summary}</span>
              <span className="text-sm">Published at: {data.publishedAt}</span>
              <span className="text-sm">Updated at: {data.updatedAt}</span>
            </div>
            <div className="absolute bottom-5 right-5 p-2 bg-slate-800 rounded">
              {data.newsSite}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default App
