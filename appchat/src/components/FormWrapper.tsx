import { FormWrapperProps } from "../types/Index"
import { MuiAvatar } from "./MuiAvatar"


export const FormWrapper = ({title,children}:FormWrapperProps) => {
  return (
    <div style={{width:'100%',display:'flex',flexDirection:'row',padding:'1rem',marginTop:'2rem'}}>
        <MuiAvatar/>

        <div style={{width:'100%',borderRadius:'10px',backgroundColor:'#f0f0f0',marginLeft:'0.4rem',padding:'0.6rem'}}>
            <h2 style={{paddingBottom:'1rem',fontFamily: '"Roboto", sans-serif',fontWeight:700,fontStyle:'normal'}}>{title}</h2>
            <form>
                {children}
            </form>
        </div>
    </div>
  )
}
