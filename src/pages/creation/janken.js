import Header from '@/Components/Common/Header';
import React, { useState } from 'react'

export default function Janken() {
    const enemy = [
        "✊","✌️","✋"
    ]

    const [count,setCount ] = useState(null);
    const [answer,setAnswer] = useState();

   
  return (
    <div>
        <Header title='じゃんけん'/>
        <p className='flex justify-center'>{enemy[count]}</p>
        <div className='flex justify-between mx-32 mt-12'>
            {enemy.map((ja,index) =>{
                return <button onClick={function answerClick(){
                    setAnswer(index)
                    setCount(Math.ceil(Math.random()*3)-1);
                    }} key={index}>{ja}</button>
            })}
        </div>
        <Kekka  answer={answer} count={count}/>
    </div>
  )
}

function Kekka({answer,count}){
    if(answer === count) {
        return <p className="flex justify-center">aiko</p>
    }
    else if((answer ===0 && count === 1)||(answer ===1 && count === 2)||(answer ===2 && count === 0)) {
        return <p className="flex justify-center">勝ち</p>
    }
    else if((answer ===0 && count === 2)||(answer ===1 && count === 0)||(answer ===2 && count === 1)) {
        return <p className="flex justify-center">負け</p>
    }
}