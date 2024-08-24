import { SxProps, Theme } from '@mui/system';
import React from 'react';

export interface LinerProgressProps {
    variant:'determinate',
    value:number,
    sx?:SxProps<Theme>
}

export interface FormWrapperProps {
    title:string,
    children:React.ReactNode
}

export interface MuiAvatarProps {
    overlap:'circular',
    badgeContent:React.ReactNode,
    children:React.ReactNode
}