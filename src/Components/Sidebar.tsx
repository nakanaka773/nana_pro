import React from 'react'
import data from './SidebarData'


export default function Sidebar() {
  return (
    <div className='bg-[#e6865a] w-1/12 h-screen '>
        {data.map((data) =>(
            <div className='flex mt-16 mb-12' key={data.id}>
                <div className='text-[#fffbf3] ml-8'>{data.icon}</div>
            </div>
        ))}

    </div>
  )
}
