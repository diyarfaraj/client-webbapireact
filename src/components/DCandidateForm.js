import React, {useState} from 'react';
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, withStyles  } from "@material-ui/core";
import useForm from './useForm';

const styles = theme => ({
    root: {
        "& MuiTextField-root": {
            margin: theme.spacing(1),
            minWidth: 230
        }
    },

    formControl: {
     
        minWidth: 193
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

     console.log(classes);

    const {
        values,
        setValues,
        handleInputChange

    } = useForm(initialFieldValues);

  
    return (
      <form autoComplete="off" noValidate    >
            <Grid container>
                <Grid item xs={6}>
                    <TextField 
                    name="FullName"
                    
                    label="Full Name"
                    value={values.fullName}
                    onChange={handleInputChange}
                    />
                     <TextField 
                    name="email"
                    vairant="outlined"
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
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    name="age"
                    vairant="outlined"
                    label="Age"
                    value={values.age}
                    onChange={handleInputChange}
                    />
                      <TextField 
                    name="mobile"
                    vairant="outlined"
                    label="Mobile"
                    value={values.mobile}
                    onChange={handleInputChange}
                    />
                      <TextField 
                    name="adress"
                    vairant="outlined"
                    label="Email"
                    value={values.adress}
                    onChange={handleInputChange}
                    />
                </Grid>
                
            </Grid>
      </form>
    );
}

export default  (withStyles(styles)(DCandidateForm));