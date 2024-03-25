'use client'

import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'
import VolumeUp from '@mui/icons-material/VolumeUp'

export default function CustomSlider() {
    const [value, setValue] = useState<number>(30)

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number)
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value === '' ? 0 : Number(event.target.value))
    }

    const handleBlur = () => {
        if (value < 0) {
            setValue(0)
        } else if (value > 100) {
            setValue(100)
        }
    }

    return (
        <Box sx={{ width: 250 }}>
            <Grid container spacing={2} alignItems="center">
                <Grid
                    item
                    xs={12}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Typography
                        id="input-slider"
                        gutterBottom
                        fontFamily={'monospace'}
                        fontWeight={600}
                    >
                        Volume
                    </Typography>
                </Grid>
                <Grid item>
                    <VolumeUp />
                </Grid>
                <Grid item xs>
                    <Slider
                        value={value}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        data-testid="sliderComponent"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 10,
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                        variant="outlined"
                    />
                </Grid>
            </Grid>
        </Box>
    )
}
