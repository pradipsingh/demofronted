import React, { useState, useEffect } from 'react'
import { useQuery } from "react-query";
import { fetchData, fetchDelete } from './Services/services';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
function Home() {
    const [users, setUsers] = useState()
    const { data, refetch } = useQuery('GET_API', fetchData)
    useEffect(() => {
        setUsers(data)
    }, [data])

    const getDelete = (e) => {
        const deleteId = e.currentTarget?.id
        if (parseInt(deleteId) > 0) {
            fetchDelete(deleteId)
            refetch()
        }
    }
    return (
        <div style={{
            width: '50%',
            marginLeft: '25%',
            marginTop: '5%'
        }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidTableCell: 400 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                {'First Name'}
                            </TableCell>
                            <TableCell>
                                {'Last Name'}
                            </TableCell>
                            <TableCell>
                                {'Description'}
                            </TableCell>
                            <TableCell>
                                {'Quantity'}
                            </TableCell>
                            <TableCell>

                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            users?.map((user, index) => (
                                <TableRow key={index}>
                                    <TableCell >{user.firstName}</TableCell >
                                    <TableCell >{user.lastName}</TableCell >
                                    <TableCell >{user.description}</TableCell >
                                    <TableCell >{user.quantity}</TableCell >
                                    <TableCell >
                                        <Button id={user.id} variant="contained" 
                                          onClick={getDelete}>{'Delete'}</Button>
                                    </TableCell >
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
export default Home