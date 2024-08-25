import React, { useState } from "react"
import axios from 'axios';

interface FormState<T> {
    [key: string]: T;
}

export const useForm = <T extends FormState<string>>(initialForm: T) =>{
    const [form, setform] = useState(initialForm)
    
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = e.target

        setform(prevState => ({
            ...prevState,
            [name]: value
        }));
    } 

    const SendForm = () =>{
        const isValid = !form.name || !form.email || !form.phone || !form.middlename || !form.paternalsurname || !form.maternalsurname || !form.day || !form.month || !form.year
        if (isValid) {
            alert('Todos los campos son requeridos!!');
            return;
        }
        console.log('value of form',form);
        
    }
    
    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>)=>{
        if (e.key == 'Enter') {
          e.preventDefault();
          SendForm()
        }
    }
    return {
        form,
        handleInputChange,
        handleKeyDown 
    }
}