
import React,{useState, useEffect} from 'react';

//custom hooks
 const useForm = (initialFieldValues) => {
   const [values, setValues] = useState(initialFieldValues)

  //handle inputChange
     const handleInputChange = (e) => {
         const {name, value} = e.target;
    setValues({
        ...values,
        [name]: value,

    })
    }

    return {
        values, 
        setValues,
        handleInputChange
    }
}

export default useForm;