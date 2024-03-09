'use client'
import Link from "next/link";
import Nav from './Nav';

export default function Header() {
    
    return (
        <main>
        <div className='flex bg-black'>
            <img src='https://t.ctcdn.com.br/tBiOezzZAuJtYldGP2IUl6ANKzs=/i489931.jpeg'className="flex bg-black flex-icon w-12 h-12 py-0 px-0" />
            <Nav titulo="inicio" url="/" className = 'flex gap-x-4 justify-center p-4'/>
        </div>
        </main>
    );
}