'use client'
import Link from 'next/link'
import { Time } from './Time'

export const Navbar = () => {
  return (
    <div className='mx-auto md:w-11/12 px-6 bg-[#0d0d0d]'>
        <div className='flex flex-row justify-between items-center py-6 text-white'>
            <div>
            <Link href="/">
            <h1 className='font-bold text-3xl'>Princess.</h1>
            </Link>
            </div>
            <div className='flex flex-row gap-x-1 justify-center items-center md:w-3/12'>
                <Time />
                <hr className="text-purple-200 hover:text-neutral-500 w-3"  />
                <p>Lagos, NG</p>
            </div>
            <div className='hidden md:block'>
                Spotify
            </div>
        </div>
    </div>
  )
}
