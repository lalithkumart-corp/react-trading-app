import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FutureOptionsSocket from '../../websockets/futureOptions';

export default function FutureOptions() {
    let [currencyData, setRows] = useState([]);

    useEffect(() => {
        initSocketConn();
    }, []);

    const initSocketConn = () => {
        let ws = new FutureOptionsSocket();
        ws.onopen = () => {
            console.log('FutureOptionsSocket WS Open');
        };
        ws.onmessage = (event) => {
            let parsedMsg = JSON.parse(event.data);
            parsedMsg = parsedMsg.slice(0,100); // Have to trim or else to throttle , else page will get slow
            setRows(currencyData => currencyData.concat(parsedMsg));
        }
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} stickyHeader size="small" aria-label="simple table">
                <TableHead className="material-ui-table-header">
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="center" style={{color: "red"}}>Exp Date</TableCell>
                        <TableCell align="center" style={{color: "red"}}>ATM</TableCell>
                        <TableCell align="center" style={{color: "red"}}>25d R/R</TableCell>
                        <TableCell align="center" style={{color: "red"}}>10d R/R</TableCell>
                        <TableCell align="center" style={{color: "red"}}>25d B/R</TableCell>
                        <TableCell align="center" style={{color: "red"}}>10d B/F</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className="material-ui-table-body">
                    {
                        currencyData.map((row, index)=> (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    style ={ index % 2? { background : "rgb(11 28 94)" }:{ background : "#0d1b54" }}
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
    )
}