import React, { useState } from "react"
import axios from 'axios';


interface FormState<T> {
    [key: string]: T;
}

export const useForm = <T extends FormState<string>>(initialForm: T) =>{
    const [form, setform] = useState(initialForm)
    const apiUrl = import.meta.env.VITE_API_URL;
    
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = e.target

        setform(prevState => ({
            ...prevState,
            [name]: value
        }));
    } 

    const SendForm = async() =>{
        const { name,email,phone,middlename,paternalsurname,maternalsurname,day,month,year  } = form
        const isValid = !name || !email || !phone || !middlename || !paternalsurname || !maternalsurname || !day || !month || !year
    
        const data = {
            name,
            middlename,
            paternalsurname,
            maternalsurname,
            email,
            phone,
            birthdate:`${year}-${month}-${day}`
        }
        
        if (isValid) {
            alert('Todos los campos son requeridos!!');
            return;
        }

        try {
            const req = await axios.post(`${apiUrl}`,data)
            const resp = await req.data
            console.log(resp);
            sessionStorage.setItem('usuario',JSON.stringify(data))
            alert('Creación de usuario exitosa :)')
        } catch (error) {
            console.log(error);
            alert('Algo salio mal vuelva a intentar')
        }
        
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