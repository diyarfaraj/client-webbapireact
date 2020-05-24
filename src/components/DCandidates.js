import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import * as actions from './../actions/dCandidatesStore';


const DCandidates = (props) => {

    useEffect(() => {
       props.fetchAllDCandidates();
    }, [])


    return (
        <div>
            from DCandidates
        </div>
    )
}

const mapStateToProps = state => ({
        dCandidateList:state.dCandidate.list
})

const mapActionsToProps = {
    fetchAllDCandidates: actions.fetchAll
}
 

export default connect(mapStateToProps, mapActionsToProps)(DCandidates);
