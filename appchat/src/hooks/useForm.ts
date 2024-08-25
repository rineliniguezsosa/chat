import React, { useState } from "react"

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