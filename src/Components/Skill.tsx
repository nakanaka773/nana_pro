import React from 'react'
import Face3Icon from '@mui/icons-material/Face3';

export default function Skill() {
  return (
    <div className='w-4/12 bg-[#fcfcfc] rounded-l-3xl ml-[-52px] shadow-md shadow-black'>
        <div className='flex justify-center'>
            <Face3Icon />
            <div>
               <h1>なかなみ</h1>
               <p className=''>コーラが大好き</p>
            </div>
        </div>
        <div className=''>
            <h1>経験</h1>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>Next.js</li>
                <li>TypeScript</li>
            </ul>
        </div>

    </div>
  )
}
