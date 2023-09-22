import React from 'react'
import Slider from './Slider'
import { useState } from 'react';
import rgbHex from 'rgb-hex';


export default function Color() {
  const [slidervaluered, setSliderValueRed] = useState(30);
  const [slidervaluegreen, setSliderValueGreen] = useState(30);
  const [slidervalueblue, setSliderValueBlue] = useState(30);

  // slidervalueの値を設定するコールバック関数
  const handleSliderValueChangeRed = (newValueRed: number) => {
    setSliderValueRed(newValueRed);
  };
  const handleSliderValueChangeGreen = (newValueGreen: number) => {
    setSliderValueGreen(newValueGreen);
  };
  const handleSliderValueChangeBlue = (newValueBlue: number) => {
    setSliderValueBlue(newValueBlue);
  };

  

  return (

    <div className='mt-12 flex align-center justify-center flex-col items-center'>
      <Slider color="R" max={255} slidervalue={slidervaluered} onSliderValueChange={handleSliderValueChangeRed} />
      <p></p>
      <Slider color="G" max={255} slidervalue={slidervaluegreen} onSliderValueChange={handleSliderValueChangeGreen} />
      <p></p>
      <Slider color="B" max={255} slidervalue={slidervalueblue} onSliderValueChange={handleSliderValueChangeBlue} />
      <div className=' mt-8 w-1/2 h-96' style={{ backgroundColor: `rgb(${slidervaluered}, ${slidervaluegreen}, ${slidervalueblue})` }}>
      </div>
      <div className='flex mt-12'>
      <p className='mr-12'>カラーコード</p>
      <p className='text-2xl align-center '>{rgbHex(slidervaluered, slidervaluegreen, slidervalueblue)}</p>

      </div>
      

    </div>
  )
}
