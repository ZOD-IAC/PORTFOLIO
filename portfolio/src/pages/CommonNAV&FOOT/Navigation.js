import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdHome } from "react-icons/md";

function Navigation() {
  return (
    <>
    <div className='flex justify-between bg-slate-900  p-4 items-center '>
        <div className=''>
            <ul className='flex space-x-14  '>
                <li>
                  <Link href="/">HOME</Link>
                </li>
                <li>
                    <Link href="/">ABOUT</Link>
                </li>
                <li>
                    <Link href="/">RESUME</Link>
                </li>
            </ul>
        </div>
        <div>
        <Image 
         src='/image/psyduck_icon-icons.com_67509.ico'
         alt="avatar"
         height={50}
         width={50}/>
        </div>
    </div>
    </>
  )
}

export default Navigation
