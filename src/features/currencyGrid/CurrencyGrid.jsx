import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import RiskReversal from './riskReversalTable';
import FutureOptions from './futureOptions';
// import { Icon } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {CurrencySymbols} from './CurrencyToggle.style';
import {GsCurrencyCard} from './CurrencyGrid.style';
import GsCard from '../../components/gsCard/gsCard';
import { GsTabsWrapper } from '../../components/gsTabs/gsTabs.style';
import { GsContext } from '../../gsContext.js';
import { useContext } from 'react';
const CHANNEL_INFO = {
    "event": "subscribe",
    "channel": "trade",
    "symbol": "currency"
};

export function CurrencyGrid() {
    let tt = useContext(GsContext);

    const [value, setValue] = useState(0);
    // let myTheme = useSelector((state) => state.gsTheme.themeName=='dark'?darkTheme:lightTheme);

    const myTheme = useTheme();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container style={{margin: "10px 0 0 10px"}}>
            <Grid item xs={7}>
                <p>{tt.userName}</p>
                {/* <GsCurrencyCard myTheme={myTheme}> */}
                <GsCard cardHeader="Single Currency Grid" myTheme = {myTheme}>
                        {/* <p className="currency-grid-header-text">Currency grid</p> */}
                        <GsTabsWrapper>
                            <Box>
                                <Tabs value={value} onChange={handleChange} aria-label="Currency Trade Grid Tabs" style={{minHeight: '10px'}}>
                                    <Tab label="RR/BF Table" />
                                    <Tab label="Call/Put Table"  />
                                    <Tab label="Vol Curve"  />
                                    <Tab label="Vol Smile"  />
                                    <Tab label="Heatmaps"  />
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
                        </GsTabsWrapper>
                {/* </GsCurrencyCard> */}
                </GsCard>
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