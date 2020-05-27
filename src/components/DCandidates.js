import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import * as actions from './../actions/dCandidatesStore';
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles, ButtonGroup, Button } from "@material-ui/core";
import  DCandidateForm  from "./DCandidateForm";
import  EditIcon  from "@material-ui/icons/Edit";
import  DeleteIcon  from "@material-ui/icons/Delete";


const styles = theme => ({
    root: {
        "& .MuiTableCell-head":{
           
            fontWeight:"bold"
        }
    },
    paper : {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
   
})


const DCandidates = ({classes,...props}) => {

    const [currentId, setCurrentId] = useState(0);



    useEffect(() => {
       props.fetchAllDCandidates();
    }, [props])

//delete function
    const onDelete = (id) => {
        if(window.confirm("are you sure??"))
        props.deleteDCandidate(id)
        
}

    return (
        <Paper className={classes.paper} elevation={3}>
        <Grid container>
            <Grid item xs={6}>
                <DCandidateForm {...({currentId, setCurrentId})}/>
            </Grid>
            <Grid item xs={6}>
                <TableContainer>
                    <Table>
                        <TableHead className={classes.root}>
                            <TableRow>
                                <TableCell> Name</TableCell>
                                <TableCell> Mobile</TableCell>
                                <TableCell> BloodGroup</TableCell>
                                <TableCell> </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                props.dCandidateList.map((record, index) => {
                                    return(
                                        <TableRow key={index} hover>
                                            <TableCell >{record.fullname}</TableCell>
                                            <TableCell >{record.mobile}</TableCell>
                                            <TableCell >{record.bloodGroup}</TableCell>
                                            <TableCell >
                                                <ButtonGroup variant="text">
                                                    <Button><EditIcon color="primary" onClick={()=>{setCurrentId(record.id)}}/></Button>
                                                    <Button><DeleteIcon color="secondary" onClick={() => onDelete(record.id)}/></Button>
                                                </ButtonGroup>
                                            </TableCell>
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
    fetchAllDCandidates: actions.fetchAll,
    deleteDCandidate:actions.deleteQ
}
 

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(DCandidates));
