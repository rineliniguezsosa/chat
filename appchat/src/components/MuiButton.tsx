import { Button } from "@mui/material"
import { MuiButtonProps } from "../types/Index"

export const MuiButton = ({variant,sx,onClick,children}:MuiButtonProps) => {
  return (
    <Button
        variant={variant}
        sx={sx}
        onClick={onClick}
    >
        {children}
    </Button>
  )
}
