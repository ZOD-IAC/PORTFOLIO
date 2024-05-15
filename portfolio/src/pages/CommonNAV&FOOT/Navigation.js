import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Navigation() {
  return (
    <>
    <div className='flex justify-between bg-slate-900  p-6'>
        <div className=''>
            <ul className='flex space-x-10  '>
                <li>
                  <Link href="/">HOME</Link>
                </li>
                <li>
                    <Link href="/">About</Link>
                </li>
                <li>
                    <Link href="/">Resume</Link>
                </li>
            </ul>
        </div>
        <div>
            <span><Image href="#" alt="Avatar"></Image></span>
        </div>
    </div>
    </>
  )
}

export default Navigation
