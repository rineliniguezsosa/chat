import { Avatar, Badge } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const MuiAvatar = () => {
  return (
    <Badge 
        overlap='circular'
        badgeContent={
         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, borderRadius: '50%', backgroundColor: '#f174dc',marginTop:'1rem',border:'1px gray solid' }}>
            <KeyboardArrowDownIcon sx={{ fontSize:14 }} />
          </div>
        }
    >
      <Avatar sx={{width:70,height:70,borderRadius:'45%',border:'3px #f174dc solid'}} alt="juanita" src="https://randomuser.me/api/portraits/women/65.jpg" />
    </Badge>
  )
}
