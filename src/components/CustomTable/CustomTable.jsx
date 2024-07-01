import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import CandlestickChartIcon from '@mui/icons-material/InsertChartOutlined'; // Example import
import { rows } from './data';
// CSS file for styles
import './styles.css'; // Import your CSS file

// Assuming rows are defined elsewhere

export default function BasicTable({ isEven }) {
  return (
    <div>
      <div className="label">01-10</div>
      <TableContainer component={Paper} className="tableContainer">
        <Table className="table" aria-label="simple table">
          <TableHead className={isEven ? 'headEven' : 'headOdd'}>
            <TableRow>
              <TableCell className="cell">Account</TableCell>
              <TableCell className="cell alignCenter">Magic Number</TableCell>
              <TableCell className="cell alignRight">Avg. Lose</TableCell>
              <TableCell className="cell alignRight">Avg. Lose Pips</TableCell>
              <TableCell className="cell alignRight">Avg. Net Pips</TableCell>
              <TableCell className="cell alignRight">Avg. Trade</TableCell>
              <TableCell className="cell alignRight">Avg. Trade Time</TableCell>
              <TableCell className="cell alignRight">Avg. Win</TableCell>
              <TableCell className="cell alignRight">Avg. Win Pips</TableCell>
              <TableCell className="cell alignRight">Best Trade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index} className={index % 2 === 0 ? 'rowEven' : 'rowOdd'}>
                <TableCell className="cell" component="th" scope="row">
                  {row.account}
                </TableCell>
                <TableCell className="cell magicNumberCell alignCenter">
                  {row.magicNumber}
                  <CandlestickChartIcon fontSize="small" />
                </TableCell>
                <TableCell className={`${row.avgLose < 0 ? 'redText' : 'greenText'} alignCenter`}>
                  {row.avgLose}
                </TableCell>
                <TableCell className={`${row.avgLosePips < 0 ? 'redText' : 'greenText'} alignCenter`}>
                  {row.avgLosePips}
                </TableCell>
                <TableCell className={`${row.avgNetPips < 0 ? 'redText' : 'greenText'} alignCenter`}>
                  {row.avgNetPips}
                </TableCell>
                <TableCell className={`${row.avgTrade < 0 ? 'redText' : 'greenText'} alignCenter`}>
                  {row.avgTrade}
                </TableCell>
                <TableCell className="cell alignCenter">{row.avgTradeTime}</TableCell>
                <TableCell className="cell alignCenter">{row.avgWin}</TableCell>
                <TableCell className="cell alignCenter">{row.avgWinPips}</TableCell>
                <TableCell className={`${row.bestTrade < 0 ? 'redText' : 'greenText'} alignCenter`}>
                  {row.bestTrade}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
