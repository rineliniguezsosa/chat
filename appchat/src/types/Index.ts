import { SxProps, Theme } from '@mui/system';
import React, { CSSProperties } from 'react';

export interface LinerProgressProps {
    variant:'determinate',
    value:number,
    sx?:SxProps<Theme>
}

export interface FormWrapperProps {
    title:string,
    children:React.ReactNode
}

export interface MuiTextFieldProps {
    variant:'outlined',
    label:string,
    type:'text'|'tel'|'email'|'number',
    name:string,
    value:string,
    sx?:SxProps<Theme>,
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=> void,
    onKeyDown:(e:React.KeyboardEvent<HTMLInputElement>)=> void
}

export interface FormValues {
    email: string;
    telefono: string;
}

export interface FormInformationProps {
    children:React.ReactNode
}

export interface MuiButtonProps {
    variant:'outlined',
    onClick:()=> void,
    children:React.ReactNode,
    sx?:SxProps<Theme>,
    style:CSSProperties
}

export interface ContactviewProps{
    form:{
        email:string,
        phone:string,
        name: string,
        middlename:string,
        paternalsurname:string,
        maternalsurname:string,
        day:string,
        month:string,
        year:string
    },
    handleInputChange:(e:React.ChangeEvent<HTMLInputElement>)=> void,
    handleKeyDown:(e:React.KeyboardEvent<HTMLInputElement>)=> void
}