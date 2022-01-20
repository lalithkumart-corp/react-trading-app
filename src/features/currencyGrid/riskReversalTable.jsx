import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RiskReversalSocket from '../../websockets/riskReversal';
import GsTradeTableWrapper from '../../components/gsTable/gsTable';

export default function RiskReversal() {
    let [currencyData, setRows] = useState([
        {
            range: '1m',
            expDate: new Date().toDateString(),
            atm: 7.10,
            rr25: -0.2,
            rr10: -0.2,
            br25: -0.2,
            bf10: -0.2,
        },
        {
            range: '1m',
            expDate: new Date().toDateString(),
            atm: 9.10,
            rr25: +0.2,
            rr10: -0.2,
            br25: -0.2,
            bf10: -0.2,
        }
    ]);

    useEffect(() => {
        initSocketConn();
    }, []);

    const initSocketConn = () => {
        let ws = new RiskReversalSocket();
        ws.onopen = () => {
            console.log('RiskReversalSocket WS Open');
        };
        ws.onmessage = (event) => {
            let parsedMsg = JSON.parse(event.data);
            parsedMsg = parsedMsg.slice(0,100); // Have to trim or else to throttle , else page will get slow
            setRows(currencyData => currencyData.concat(parsedMsg));
        }
    };

    return (
        <GsTradeTableWrapper>
            <Grid container>
                <Grid item>
                    <Paper>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} stickyHeader size="small" aria-label="simple table">
                            <TableHead className="gs-table-head">
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="center">Exp Date</TableCell>
                                    <TableCell align="center">ATM</TableCell>
                                    <TableCell align="center">25d R/R</TableCell>
                                    <TableCell align="center">10d R/R</TableCell>
                                    <TableCell align="center">25d B/R</TableCell>
                                    <TableCell align="center">10d B/F</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className="material-ui-table-body">
                                {
                                    currencyData.map((row, index)=> (
                                            <TableRow
                                                key={index}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                // style ={ index % 2? { background : "rgb(11 28 94)" }:{ background : "#0d1b54" }}
                                                >
                                                <TableCell scope="row">
                                                    {row.range}
                                                </TableCell>
                                                <TableCell align="center">{row.expDate}</TableCell>
                                                <TableCell align="center">{row.atm}</TableCell>
                                                <TableCell align="center">{row.rr25}</TableCell>
                                                <TableCell align="center">{row.rr10}</TableCell>
                                                <TableCell align="center">{row.br25}</TableCell>
                                                <TableCell align="center">{row.bf10}</TableCell>
                                            </TableRow>
                                        ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </GsTradeTableWrapper>
    )
}