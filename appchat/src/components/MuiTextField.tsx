import { TextField } from "@mui/material"
import { MuiTextFieldProps } from '../types/Index.ts'

export const MuiTextField = ({name,label,type,value,variant,sx,onChange,onKeyDown,InputProps}:MuiTextFieldProps) => {
  return (
    <TextField
        name={name}
        label={label}
        type={type}
        value={value}
        variant={variant}
        sx={sx}
        onChange={onChange}
        onKeyDown={onKeyDown}
        InputProps={InputProps}
    />
  )
}
