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
    type:'text'|'tel'|'email',
    name:string,
    value:string,
    sx?:SxProps<Theme>,
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=> void
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