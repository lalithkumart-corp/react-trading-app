import { useContext } from 'react';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Legend} from 'recharts';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { GsContext } from '../../gsContext.js';

export const CarrierChart = () => {
    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300
        }
    ];

    let tt = useContext(GsContext);

    const CustomTooltipComp = ({ payload }) => {
        return (
            <div style={{width: '100px'}}>
                <p>name: {payload.name}</p>
                <p>{payload.uv}, {payload.pv}</p>
            </div>
        )
    }
    
    return (
        <Grid>
            <Paper>
                <p>username: {tt.userNameFromCtx}</p>
            </Paper>
            <Paper>
                <BarChart width={300} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltipComp/>}/>
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </Paper>
        </Grid>
    )
}

