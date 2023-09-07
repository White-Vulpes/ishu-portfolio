import React from 'react'
import SwipeableViews from 'react-swipeable-views';
import PinterestLayout from '../PinterestLayout';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import { styled } from '@mui/material';
import Tab from '@mui/material/Tab';
import './tabby.css'

function Tabby() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (i, index) => {
        setValue(index);
    }

    const StyledTab = styled((props) => <Tab {...props} />)(
        () => ({
        textTransform: 'none',
        '&.Mui-active':{
            color: 'white', 
            fontFamily: 'Montserrat', 
            fontSize: '20px',
        },
        '&.Mui-selected': {
            background: 'linear-gradient(90deg, rgba(123,67,151,1) 0%, rgba(220,36,48,1) 100%)',
            backgroundClip: 'text',
            textFillColor: 'transparent'
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
        }),
    );

    return (
        <div>
            <div className='tabs' id='tabs'>
                <Box sx={{ width: '100%', marginTop: '50px'}}>
                    <Tabs value={value} onChange={handleChange} variant='scrollable' TabIndicatorProps={{style: {borderRadius: '10px',   background: 'linear-gradient(90deg, rgba(123,67,151,1) 0%, rgba(220,36,48,1) 100%)'}}}>
                        <StyledTab label="JEWELLERY" sx={{color: 'white', fontFamily: 'Montserrat', fontSize: '18px', fontStyle: 'bold',}}/>
                        <StyledTab label="PRODUCTS" sx={{color: 'white', fontFamily: 'Montserrat', fontSize: '18px', fontStyle: 'bold',}}/>
                        <StyledTab label="MODEL" sx={{color: 'white', fontFamily: 'Montserrat', fontSize: '18px', fontStyle: 'bold',}}/>
                        <StyledTab label="WILDLIFE" sx={{color: 'white', fontFamily: 'Montserrat', fontSize: '18px', fontStyle: 'bold',}}/>
                        <StyledTab label="SCENERY" sx={{color: 'white', fontFamily: 'Montserrat', fontSize: '18px', fontStyle: 'bold',}}/>
                        <StyledTab label="NATURE" sx={{color: 'white', fontFamily: 'Montserrat', fontSize: '18px', fontStyle: 'bold',}}/>
                    </Tabs>
                </Box>
            </div>
            <div className='tabContent'>
                <SwipeableViews index={value} disableLazyLoading={true} onChangeIndex={handleChangeIndex} disabled>
                    <div className='itemPhoto' index={0} style={{color: 'white'}}>
                        <PinterestLayout />
                    </div>
                    <div className='itemPhoto' key={1} index={1} style={{color: 'white'}}>
                        <PinterestLayout />
                    </div>
                    <div className='itemPhoto' index={2} style={{color: 'white'}}>
                        <PinterestLayout />
                    </div>
                    <div className='itemPhoto' index={3} style={{color: 'white'}}>
                        <PinterestLayout />
                    </div>
                    <div className='itemPhoto' index={4} style={{color: 'white'}}>
                        <PinterestLayout />
                    </div>
                    <div className='itemPhoto' index={5} style={{color: 'white'}}>
                        <PinterestLayout />
                    </div>
                </SwipeableViews>
            </div>
        </div>
    )
}

export default Tabby
