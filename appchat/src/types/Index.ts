import { SxProps, Theme } from '@mui/system';

export interface LinerProgressProps {
    variant:'determinate',
    value:number,
    sx?:SxProps<Theme>
}