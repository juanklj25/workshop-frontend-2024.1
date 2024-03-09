'use client'
import React, { useState, useEffect } from "react"


export default function Home() {
  const [shows, setShows] = useState([])
  const [search, setSearch] = useState("")
  
  useEffect (() => {
    fetch('https://api.tvmaze.com/shows')
    .then((response) => response.json())
    .then((data) => setShows(data))
    .catch((error) => console.log('error', error))
  }, [])
  
  console.log(shows)

  return (
    <main className="flex min-h-screen flex-col justify-between p-24 bg-black"> 
     <input type="text" className=" flex  w-80 p-2 rounded-lg  font-bold text-lg bg-black  text-white absolute top-1 right-1 border-2 border-s-white" onChange={(e) => setSearch(e.target.value)}/>
      <div className="flex flex-row flex-wrap justify-around gap-10 py-8">
        {shows.filter((show) => show.name.toLowerCase().includes(search.toLowerCase())).map((show) =>(
          <div key={show.id}>
            <img src={show.image.medium} alt="show imagen" />
            <h2 className="flex flex-col gap-y-110 text-right ">{show.name}</h2>
            <h2 className="py-5  font-bolt text-x1 rounded-xl text-right">{show.summary}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}