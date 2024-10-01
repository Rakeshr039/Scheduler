import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const header = () => {
  return (
    <nav className='mx-auto px-4 py-2 flex justify-between '>
    <Link href="/">
        <Image href="/" className="flex items-center" />
        im
    </Link>
    </nav>
  )
}

export default header
