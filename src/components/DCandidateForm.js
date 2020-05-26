import React, {useEffect} from 'react';
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, withStyles, Button, FormHelperText  } from "@material-ui/core";
import useForm from './useForm';
import {connect} from "react-redux";
import * as actions from './../actions/dCandidatesStore';


const styles = theme => ({
    root: {
        "& MuiTextField-root": {
            margin: theme.spacing(1),
            minWidth: 230
        }
    },

    formControl: {
     
        minWidth: 193
    },

    smMargin: {
      margin: theme.spacing(1)
    }
   
}) 



const initialFieldValues = {
    fullName: "",
    mobile: "",
    email: "",
    age: "",
    bloodGroup:"",
    adress:""
}


 const DCandidateForm = ({classes, ...props}) => {

   //validate form
   const validate = (fieldValues = values) => {
     let temp = {...errors};
    if('fullName' in fieldValues)
     temp.fullName = fieldValues.fullName? "" : "This field is required";
     if('mobile' in fieldValues)
     temp.mobile = fieldValues.mobile? "" : "This field is required";
     if('bloodGroup' in fieldValues)
     temp.bloodGroup = fieldValues.bloodGroup? "" : "This field is required";
     //temp.email = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/).test(values.email) ? " ": "Email is not valid" ;

     setErrors({
       ...temp
     })

      if(fieldValues === values)
     return Object.values(temp).every(x => x==="")

   }


    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm


    } = useForm(initialFieldValues, validate, props.setCurrentId);

  //handle submit
  const handleSubmit = e => {
    e.preventDefault();
    if(validate()){
      if(props.currentId === 0)
      props.createDCandidate(values, () => {window.alert("inserted")})
       else
       props.updateDCandidate(props.currentId.values, () => {window.alert("updated")})
    } else {
      console.log("validare not working");
    }

    resetForm();
  }

  //useEffect
  useEffect(() => {
    if(props.currentId !== 0){
      setValues({
        ...props.dCandidateList.find(x=> x.id === props.currentId)
      })
      setErrors({})
    }

  }, [props.currentId])
  
  //return
    return (
      <form autoComplete="off" noValidate onSubmit={handleSubmit}   >
      <div style={{color:"grey"}}>Please fill in you personal information:</div>
            <Grid container>
            
                <Grid item xs={6}>
                    <TextField 
                    name="fullName"
                    label="Full Name"
                    value={values.fullName}
                    onChange={handleInputChange}
                    
                    {...(errors.fullName && {error: true, helperText: errors.fullName})}
                    />
                     <TextField 
                    name="email"
                    
                    label="Email"
                    value={values.email}
                    onChange={handleInputChange}
                    />
                  <FormControl   className={classes.formControl} >
                    <InputLabel>Blood Group</InputLabel>
                        <Select 
                        name="bloodGroup"
                        value={values.bloodGroup}
                        onChange={handleInputChange}
                        {...(errors.bloodGroup && {error: true})}
                                >
                        <MenuItem value="">Select Blood Group</MenuItem>
                        <MenuItem value="A-">A-</MenuItem>
                        <MenuItem value="A+">A+</MenuItem>
                        <MenuItem value="B+">B+</MenuItem>
                        <MenuItem value="B-">B-</MenuItem>
                        <MenuItem value="AB+">AB+</MenuItem>
                        <MenuItem value="AB-">AB-</MenuItem>
                        <MenuItem value="O+">O+</MenuItem>
                        <MenuItem value="O-">O-</MenuItem>
                        </Select>
                        {errors.bloodGroup && <FormHelperText>{errors.bloodGroup}</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    name="age"
                    
                    label="Age"
                    value={values.age}
                    onChange={handleInputChange}
                    />
                      <TextField 
                    name="mobile"
                    
                    label="Mobile"
                    value={values.mobile}
                    onChange={handleInputChange}
                    {...(errors.mobile && {error: true, helperText: errors.mobile})}
                    />
                      <TextField 
                    name="adress"
                    vairant="outlined"
                    label="Adress"
                    value={values.adress}
                    onChange={handleInputChange}
                    />
                    <div >
                    <Button className={classes.smMargin} type="submit" variant="contained" color="primary">
                    Submit
                    </Button>
                    <Button onClick={resetForm} className={classes.smMargin} variant="contained" color="secondary">
                    Reset
                    </Button>
                    </div>
                </Grid>
                
            </Grid>
      </form>
    );
}

const mapStateToProps = state => ({
        dCandidateList:state.dCandidate.list
})

const mapActionsToProps = {
    createDCandidate: actions.create,
    updateDCandidate: actions.update,
    

}

export default  connect(mapStateToProps, mapActionsToProps) (withStyles(styles)(DCandidateForm));