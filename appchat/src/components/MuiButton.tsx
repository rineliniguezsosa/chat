import { Button } from "@mui/material"
import { MuiButtonProps } from "../types/Index"

export const MuiButton = ({variant,sx,style,onClick,children}:MuiButtonProps) => {
  return (
    <Button
    disableRipple
        variant={variant}
        sx={sx}
        style={style}
        onClick={onClick}
    >
        {children}
    </Button>
  )
}
