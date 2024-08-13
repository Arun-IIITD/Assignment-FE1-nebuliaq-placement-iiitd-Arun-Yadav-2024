import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, TableSortLabel, TablePagination } from '@mui/material';

function MetricsTable({ data }) {
    const [filterText, setFilterText] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const filteredData = data.filter(item =>
        item.service.toLowerCase().includes(filterText.toLowerCase())
    );

    const sortedData = [...filteredData].sort((a, b) => {
        if (!sortConfig.key) return 0;

        const [aKey, bKey] = [sortConfig.key.split('.'), sortConfig.key.split('.')];
        const aValue = aKey.length > 1 ? a[aKey[0]][aKey[1]] : a[aKey[0]];
        const bValue = bKey.length > 1 ? b[bKey[0]][bKey[1]] : b[bKey[0]];

        if (aValue < bValue) {
            return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
            return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
    });

    const requestSort = key => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const handleRowsPerPageChange = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Paper>
            <TextField
                label="Filter by service name"
                variant="outlined"
                value={filterText}
                onChange={e => setFilterText(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <TableSortLabel
                                    active={sortConfig.key === 'service'}
                                    direction={sortConfig.direction}
                                    onClick={() => requestSort('service')}
                                >
                                    Service
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>Side</TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortConfig.key === 'client.requests'}
                                    direction={sortConfig.direction}
                                    onClick={() => requestSort('client.requests')}
                                >
                                    Client Requests
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortConfig.key === 'client.rate'}
                                    direction={sortConfig.direction}
                                    onClick={() => requestSort('client.rate')}
                                >
                                    Client Rate
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortConfig.key === 'client.p75'}
                                    direction={sortConfig.direction}
                                    onClick={() => requestSort('client.p75')}
                                >
                                    Client p75
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortConfig.key === 'client.p90'}
                                    direction={sortConfig.direction}
                                    onClick={() => requestSort('client.p90')}
                                >
                                    Client p90
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortConfig.key === 'client.p99'}
                                    direction={sortConfig.direction}
                                    onClick={() => requestSort('client.p99')}
                                >
                                    Client p99
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortConfig.key === 'client.error'}
                                    direction={sortConfig.direction}
                                    onClick={() => requestSort('client.error')}
                                >
                                    Client Error
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortConfig.key === 'server.requests'}
                                    direction={sortConfig.direction}
                                    onClick={() => requestSort('server.requests')}
                                >
                                    Server Requests
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortConfig.key === 'server.rate'}
                                    direction={sortConfig.direction}
                                    onClick={() => requestSort('server.rate')}
                                >
                                    Server Rate
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortConfig.key === 'server.p75'}
                                    direction={sortConfig.direction}
                                    onClick={() => requestSort('server.p75')}
                                >
                                    Server p75
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortConfig.key === 'server.p90'}
                                    direction={sortConfig.direction}
                                    onClick={() => requestSort('server.p90')}
                                >
                                    Server p90
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortConfig.key === 'server.p99'}
                                    direction={sortConfig.direction}
                                    onClick={() => requestSort('server.p99')}
                                >
                                    Server p99
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortConfig.key === 'server.error'}
                                    direction={sortConfig.direction}
                                    onClick={() => requestSort('server.error')}
                                >
                                    Server Error
                                </TableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(item => (
                            <React.Fragment key={item.service}>
                                <TableRow>
                                    <TableCell rowSpan={2}>{item.service}</TableCell>
                                    <TableCell>Client</TableCell>
                                    <TableCell>{item.client.requests}</TableCell>
                                    <TableCell>{item.client.rate}</TableCell>
                                    <TableCell>{item.client.p75}</TableCell>
                                    <TableCell>{item.client.p90}</TableCell>
                                    <TableCell>{item.client.p99}</TableCell>
                                    <TableCell>{item.client.error}</TableCell>
                                    <TableCell>{item.server.requests}</TableCell>
                                    <TableCell>{item.server.rate}</TableCell>
                                    <TableCell>{item.server.p75}</TableCell>
                                    <TableCell>{item.server.p90}</TableCell>
                                    <TableCell>{item.server.p99}</TableCell>
                                    <TableCell>{item.server.error}</TableCell>
                                </TableRow>
                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={sortedData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
            />
        </Paper>
    );
}

export default MetricsTable;
