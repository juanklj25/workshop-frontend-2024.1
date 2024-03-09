'use client'
import React, { useState, useEffect } from "react";

export default function Home() {
  
  const mainEstilizar ={
    className : 'flex' ,
    backgroundColor: 'black',
  }
  const [shows, setShows] = useState([]);
  
  useEffect (() => {
    fetch('https://api.tvmaze.com/shows')
    .then((response) => response.json())
    .then((data) => setShows(data))
    .catch((error) => console.log('error', error))
  }, [])
  
  console.log(shows);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black"> 
      <div className="flex flex-row flex-wrap justify-around gap-10 py-8">
        {shows.map((show) => (
          <div key={show.id}>
            <h2 className="flex flex-col gap-y-5 text-center">{show.name}</h2>
            <h2 className="py-5 text-white font-bolt text-x1 rounded-xl text-center">{show.summary}</h2>
            <img src={show.url} alt="show imagen"></img>
          </div>
        ))}
      </div>
    </main>
  );
}