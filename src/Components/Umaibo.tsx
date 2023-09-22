import React from 'react'

export default function Umaibo() {
  return (
    <div className='text-center'>
        <p className=''>うまい棒何本分？</p>
        <form action="">
            <input 
                type="number" 
                placeholder='何円？'
            />
            <input type="submit" />
        </form>
    </div>
  )
}
