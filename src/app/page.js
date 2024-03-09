'use client'
import React, { useState, useEffect } from "react";

export default function Home() {
  
  const [shows, setShows] = useState([]);
  const [imagen, setImages] = useState([]);
  
  useEffect (() => {
    fetch('https://api.tvmaze.com/shows')
    .then((response) => response.json())
    .then((data) => setShows(data))
    .catch((error) => console.log('error', error))
  }, [])


  useEffect (()=>{
    fetch('https://api.tvmaze.com/shows/1/images')
    .then((responsa) => responsa.json())
    .then((data)=> setImagen(data))
    .catch((error)=> console.log('erro',error))
  },[])
  
  console.log(shows);
  console.log(imagen);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black"> 
      <div className="flex flex-row flex-wrap justify-around gap-10 py-8">
        {shows.map((show) => (
          <div key={show.id} className="flex flex-col gap-y-5">
            <h2 className=" text-white py-5 font-bolt text-x1 rounded-xl text-center">{show.name}</h2>
            <h2 className="w-1 h-1 text-white font-bold text-x1 rounded-x1 justify-rigth">{show.summary}</h2>
          </div>
        ))}
        {imagen.map((image)=>(
          <div key={image.id} className="flex flex-col gap-y-5">
            <img src={image.url}></img>
        </div>
        )
        )}
      </div>
    </main>
  );
}