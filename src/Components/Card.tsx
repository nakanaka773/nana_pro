import Link from 'next/link'
import React from 'react'

type Prop = {
    href: string,
    text: string,
    title: string
  }

export default function Card({ title,href,text }:Prop) {
    return (
      <div className="bg-gray-100 p-4 m-10 rounded-md text-center">
        <Link href={href}>
            <h1 className='text-xl'>{title}</h1>
            <p className='text-gray-400 text-sm mt-4'>{text}</p>
        </Link>
      </div>
    )
  }