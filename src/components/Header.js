'use client'
import Link from "next/link";
import Nav from './Nav';


export default function Header() {
    
    return (
        <main>
        <img src='https://t.ctcdn.com.br/tBiOezzZAuJtYldGP2IUl6ANKzs=/i489931.jpeg'className="flex bg-black flex-icon w-12 h-12 py-0 px-0 " />
        <div className='flex bg-black justify-center'>
            <Nav titulo="inicio" url="/" className = 'flex gap-x-4 absolute top-5 justify-center p-4 '/>
        </div>
        </main>
    );
}