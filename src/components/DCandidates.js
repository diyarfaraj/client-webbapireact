import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import * as actions from './../actions/dCandidatesStore';
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import  DCandidateForm  from "./DCandidateForm";

const DCandidates = (props) => {

    useEffect(() => {
       props.fetchAllDCandidates();
    }, [])


    return (
        <Paper>
        <Grid container>
            <Grid item xs={6}>
                <DCandidateForm/>
            </Grid>
            <Grid item xs={6}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell> Name</TableCell>
                                <TableCell> Mobile</TableCell>
                                <TableCell> BloodGroup</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                props.dCandidateList.map((record, index) => {
                                    return(
                                        <TableRow key={index}>
                                            <TableCell >{record.fullname}</TableCell>
                                            <TableCell >{record.mobile}</TableCell>
                                            <TableCell >{record.bloodGroup}</TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
              
            </Grid>
        </Grid>
        </Paper>
    )
}

const mapStateToProps = state => ({
        dCandidateList:state.dCandidate.list
})

const mapActionsToProps = {
    fetchAllDCandidates: actions.fetchAll
}
 

export default connect(mapStateToProps, mapActionsToProps)(DCandidates);
