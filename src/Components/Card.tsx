import Link from 'next/link'
import React from 'react'

type Prop = {
    href: string,
    text: string,
    title: string
  }

export default function Card({ title,href,text }:Prop) {
    return (
      <div className="bg-gray-100 p-20 m-10 rounded-md text-center">
        <Link href={href}>
            <h1>{title}</h1>
            <p className='text-gray-400'>{text}</p>
        </Link>
      </div>
    )
  }