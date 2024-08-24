import { LinearProgress } from '@mui/material'
import { LinerProgressProps } from '../types/Index'

export const MuiLinearProgress = ({variant,value}:LinerProgressProps) => {
  return (
    <LinearProgress variant={variant} value={value}/>
  )
}
