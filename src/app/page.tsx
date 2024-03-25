import CustomSlider from '../components/customSlider/CustomSlider'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'

export default function Home() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                flexDirection: 'column',
            }}
        >
            <Typography fontWeight={600} variant="h1">
                Testing React Components With Jest
            </Typography>
            <CustomSlider />
        </Box>
    )
}
