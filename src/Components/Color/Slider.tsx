import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

import Grid from '@mui/material/Grid';

type Prop = {
    color: string,
    slidervalue: number,
    onSliderValueChange: (newValue: number) => void,
    max: number
}

export default function SliderColor({ color, slidervalue, onSliderValueChange,max }:Prop) {
    function valuetext(value: number) {
        return `${value}`;
    }

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        onSliderValueChange(newValue as number);
    };


    return (
        <Box sx={{ width: 300 }}>
            {/* コンポーネント内でslidervalueを使用 */}
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    {color}
                </Grid>
                <Grid item xs>
                    <Slider
                        aria-label="Temperature"
                        value={slidervalue}
                        onChange={handleSliderChange}
                        defaultValue={30}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        min={0}
                        max={max}
                    />
                </Grid>
                <Grid item>
                    <Typography>{valuetext(slidervalue)}</Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
