import React, { useState } from "react"


export const useForm = (initialForm) =>{
    const [form, setform] = useState(initialForm)
    
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = e.target
    } 

    return {

    }
}