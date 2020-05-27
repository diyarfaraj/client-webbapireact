
import React,{useState, useEffect} from 'react';

//custom hooks
 const useForm = (initialFieldValues, validate, setCurrentId) => {
   const [values, setValues] = useState(initialFieldValues)
   const [errors, setErrors] = useState({})

  //handle inputChange
     const handleInputChange = (e) => {
         const {name, value} = e.target;
         const fieldValue = {[name]: value}
    setValues({
        ...values,
        ...fieldValue
    })
    validate(fieldValue);

    }

    const resetForm = () => {
        setValues({
            ...initialFieldValues
        })
        setErrors({})
        setCurrentId(0)
    }

    return {
        values, 
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }
}

export default useForm;