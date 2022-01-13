import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import RiskReversal from './riskReversalTable';
import FutureOptions from './futureOptions';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
// import { Icon } from '@mui/material';

const CHANNEL_INFO = {
    "event": "subscribe",
    "channel": "trade",
    "symbol": "currency"
};

export function CurrencyGrid() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container style={{margin: "10px 0 0 10px"}}>
            <Grid item xs={7}>
                <Typography style={{textAlign: 'left', marginBottom: '15px'}}><KeyboardDoubleArrowRightIcon style={{verticalAlign: "bottom"}}/> <span>Single Currency Grid</span></Typography>
                <Box>
                    <Tabs value={value} onChange={handleChange} aria-label="Currency Trade Grid Tabs" style={{minHeight: '10px'}}>
                        <Tab label="RR/BF Table" style={{padding: '7px', border:'1px solid lightgrey', color: "white", minWidth: '140px', minHeight: '10px'}}/>
                        <Tab label="Call/Put Table" style={{padding: '7px', border:'1px solid lightgrey', color: "white", minWidth: '140px', minHeight: '10px'}} />
                        <Tab label="Vol Curve" style={{padding: '7px', border:'1px solid lightgrey', color: "white", minWidth: '140px', minHeight: '10px'}} />
                        <Tab label="Vol Smile" style={{padding: '7px', border:'1px solid lightgrey', color: "white", minWidth: '140px', minHeight: '10px'}} />
                        <Tab label="Heatmaps" style={{padding: '7px', border:'1px solid lightgrey', color: "white", minWidth: '140px', minHeight: '10px'}} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <RiskReversal />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <FutureOptions />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Volumne Curve Chart 
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Volume Smile
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Heat Maps
                </TabPanel>
            </Grid>
        </Grid>
    )
}


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index ? (
          <Box style={{maxHeight: '400px', marginTop: '10px', overflowX: 'hidden', marginBottom: '30px'}}>
            <Typography>{children}</Typography>
          </Box>
        ): (
            <Box style={{maxHeight: '400px', marginTop: '10px', overflowX: 'hidden'}} styles={{display: 'none'}}>
                <Typography>{children}</Typography>
            </Box>
        )}
      </div>
    );
  }